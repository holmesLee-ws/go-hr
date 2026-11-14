#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계, 출처 표(R11), 확인 시점 표, 경계·연결 줄(R13), 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교", "출처"];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function parseCurriculum(text) {
  const modules = new Map();
  const sources = new Map();
  const bounded = new Set();
  const problems = [];
  const body = text.split(/^## 출처$/m)[0].split(/^## 확인 시점이 중요한 항목$/m)[0];
  const blocks = body.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(/^([BWERSHGX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
    sources.set(id, (fields["출처"] || "").split(",").map((s) => s.trim()).filter(Boolean));
    if (fields["경계·연결"]) bounded.add(id);
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, sources, bounded, problems };
}

function sectionRows(text, title) {
  const m = text.split(new RegExp(`^## ${title}$`, "m"))[1];
  if (m === undefined) return null;
  return m.split(/^## /m)[0].split("\n").filter((l) => l.startsWith("|")).slice(2)
    .map((l) => l.slice(1, -1).split("|").map((c) => c.trim()));
}

function checkSources(text, sources) {
  const problems = [];
  const rows = sectionRows(text, "출처");
  if (!rows) return ["「출처」 절 없음"];
  const table = new Map();
  for (const [key, name, url, at] of rows) {
    if (table.has(key)) problems.push(`출처 ${key}: 중복`);
    table.set(key, true);
    if (!name) problems.push(`출처 ${key}: 이름 없음`);
    if (!/^https:\/\//.test(url || "")) problems.push(`출처 ${key}: URL 없음`);
    if (!DATE.test(at || "")) problems.push(`출처 ${key}: 조회일 없음`);
  }
  const used = new Set();
  for (const [id, keys] of sources) for (const k of keys) { used.add(k); if (!table.has(k)) problems.push(`${id}: 출처 표에 없는 키 ${k}`); }
  for (const k of table.keys()) if (!used.has(k)) problems.push(`출처 ${k}: 어느 모듈도 쓰지 않음`);
  const timed = sectionRows(text, "확인 시점이 중요한 항목");
  if (!timed || timed.length === 0) problems.push("「확인 시점이 중요한 항목」 표 없음");
  else for (const r of timed) if (r.length < 3 || !r[0] || !r[1] || !r[2]) problems.push(`확인 시점 표 행 불완전: ${r[0] || "(빈 항목)"}`);
  return problems;
}

function checkBoundaries(spec, modules, bounded) {
  const problems = [];
  const part = spec.split(/^## 다른 go-\* 영역과의 경계$/m)[1];
  if (!part) return ["spec: 경계 절 없음"];
  for (const line of part.split(/^## /m)[0].split("\n").filter((l) => l.startsWith("|")).slice(2)) {
    const ids = (line.split("|")[2] || "").match(/\b[BWERSHGX]\d+\b/g) || [];
    for (const id of ids) {
      if (!modules.has(id)) problems.push(`spec 경계 표: 없는 모듈 ${id}`);
      else if (!bounded.has(id)) problems.push(`${id}: 「경계·연결」 없음(spec 경계 표에 있음)`);
    }
  }
  return problems;
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svg|png|jpe?g|gif|webp|avif)$/i.test(f) || (/\.m?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  return hits;
}

function main() {
  const map = read("curriculum/map.md");
  const { modules, sources, bounded, problems } = parseCurriculum(map);
  errors.push(...problems);
  errors.push(...checkSources(map, sources));
  errors.push(...checkBoundaries(read("docs/build/spec.md"), modules, bounded));
  if (modules.size === 0) errors.push("모듈을 찾지 못함");

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 파일 ${files.length}개 검사`);
}

main();
