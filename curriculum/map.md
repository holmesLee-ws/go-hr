# 커리큘럼 지도

큰 윤곽만 둔다. 강의 내용은 여기 없다. 튜터가 세션마다 학습자의 수준·목표에 맞춰 조사하고 만든다.

- 기본 순서는 B → W → E → R → S → H → G → X다. 선수 관계만 지키면 학습자의 목표에 맞춰 순서를 바꿔도 된다.
- 목표 수준은 그 모듈을 마쳤다고 볼 최소 수준이다. 수준의 뜻은 [tutor/assessment.md](../tutor/assessment.md)에 있다.
- 「국내 근거」가 뼈대이고 「글로벌 비교」는 비교 축이다. 조문은 아래 출처 표의 조회일 기준이다. 세션에서 쓸 때는 [tutor/sources.md](../tutor/sources.md) 규칙대로 현행 여부를 다시 확인한다. 금액·요율·한도는 해마다 바뀌므로 여기 적지 않는다.
- 「경계·연결」은 다른 go-* 워크스페이스가 깊게 다루는 주제다. 여기서는 지금 흐름에 필요한 만큼만 다룬다.
- 모듈 id는 진도 기록의 키다. 바꾸면 `learner/state.json`이 깨지므로, 고칠 때는 새 id를 만든다.
- `node tools/check.mjs`로 형식·선수 관계·출처 표를 검사한다(리포 관리자용, 학습자에게는 필요 없다).

## B · 고용 관계의 뼈대

### B1 · 근로자란 누구인가
- 선수: 없음
- 핵심 질문: 계약서 제목이 「프리랜서」이면 근로기준법을 피할 수 있는가?
- 목표: Apply — 사실관계로 근로자성과 법 적용 범위(상시 근로자 수)를 판정한다.
- 만들어 볼 것: 우리 조직 외부 인력 목록의 근로자성 위험 점검표
- 국내 근거: 근로기준법 제2조(정의)·제11조(적용 범위)
- 글로벌 비교: 미국 FLSA의 근로자 오분류 기준, EU 플랫폼 노동 지침의 고용 추정(제5조)
- 출처: KR-LSA, US-DOL-IC, EU-2024-2831

### B2 · 근로계약과 근로조건 명시
- 선수: B1
- 핵심 질문: 근로계약서에 빠지면 그 자체로 위반이 되는 것은 무엇인가?
- 목표: Apply — 근로계약서를 법정 명시 사항과 금지 조항 기준으로 점검해 고친다.
- 만들어 볼 것: 우리 조직 표준 근로계약서 점검표와 수정안
- 국내 근거: 근로기준법 제15조·제17조·제20조
- 글로벌 비교: EU 투명하고 예측 가능한 근로조건 지침의 정보 제공 의무(제4조)
- 출처: KR-LSA, EU-2019-1152

### B3 · 취업규칙과 사내 규정
- 선수: B2
- 핵심 질문: 회사가 규정을 바꾸면 이미 일하던 사람에게도 그대로 적용되는가?
- 목표: Evaluate — 취업규칙 변경이 불이익 변경인지 판단하고 필요한 절차를 고른다.
- 만들어 볼 것: 규정 하나의 개정 전후 비교표와 동의·신고 절차 계획
- 국내 근거: 근로기준법 제93조·제94조·제95조
- 글로벌 비교: 독일 사업장조직법 제87조의 사업장협의회 공동결정
- 출처: KR-LSA, DE-BETRVG

## W · 근로조건

### W1 · 임금과 최저임금
- 선수: B2
- 핵심 질문: 같은 월급이라도 무엇을 임금에 넣고 빼느냐에 따라 왜 수당과 퇴직금이 달라지는가?
- 목표: Apply — 임금 항목을 통상임금·평균임금·최저임금 산입 여부로 나누고 계산한다.
- 만들어 볼 것: 우리 조직 급여 항목 분류표와 최저임금 충족 점검
- 국내 근거: 근로기준법 제2조·제43조·제48조, 최저임금법 제6조
- 글로벌 비교: 미국 FLSA 최저임금, EU 적정 최저임금 지침
- 경계·연결: 급여의 회계 처리는 go-accounting, 원천징수·근로소득세는 go-tax
- 출처: KR-LSA, KR-MWA, US-DOL-FLSA, EU-2022-2041

### W2 · 근로시간과 연장근로
- 선수: W1
- 핵심 질문: 주 52시간은 어떤 숫자들이 더해진 결과이고, 유연근무제는 그 숫자를 어떻게 바꾸는가?
- 목표: Apply — 실제 근무표에서 법정·연장·야간·휴일 근로를 가려 가산임금을 계산하고 위반을 찾는다.
- 만들어 볼 것: 우리 팀 한 달 근무표의 근로시간 점검과 유연근무제 선택 메모
- 국내 근거: 근로기준법 제50조·제51조·제52조·제53조·제54조·제56조
- 글로벌 비교: EU 근로시간 지침의 주 평균 48시간·하루 11시간 연속 휴식, 미국 FLSA 초과근로 규정
- 출처: KR-LSA, EU-2003-88, US-DOL-OT

### W3 · 휴일과 휴가
- 선수: W2
- 핵심 질문: 연차는 언제 생기고, 쓰지 못한 연차는 누구의 책임이 되는가?
- 목표: Apply — 입사일·출근율로 연차를 계산하고 사용 촉진과 미사용 수당을 처리한다.
- 만들어 볼 것: 우리 조직 연차 관리 규칙과 계산표
- 국내 근거: 근로기준법 제55조·제60조·제61조
- 글로벌 비교: EU 근로시간 지침의 연 4주 유급휴가, 미국의 연방 유급휴가 의무 부재
- 출처: KR-LSA, EU-2003-88, US-DOL-VAC

### W4 · 퇴직급여
- 선수: W1
- 핵심 질문: 퇴직금과 퇴직연금은 위험을 누구에게 지우는 제도인가?
- 목표: Evaluate — 퇴직금·DB·DC 제도를 조직과 직원 입장에서 비교해 고른다.
- 만들어 볼 것: 우리 조직 퇴직급여 제도 비교 메모와 퇴직금 계산 예시
- 국내 근거: 근로자퇴직급여 보장법 제4조·제8조·제9조
- 글로벌 비교: 영국 2008년 연금법의 자동 가입, 미국 ERISA의 퇴직연금 규율
- 경계·연결: 퇴직급여 부채의 회계는 go-accounting
- 출처: KR-RBA, UK-PA-2008, US-DOL-RET

## E · 평등과 보호

### E1 · 차별 금지와 평등
- 선수: B2
- 핵심 질문: 의도가 없었는데도 차별이 되는 경우는 어떤 때인가?
- 목표: Evaluate — 채용·임금·승진 결정의 차별 위험을 직접·간접 차별 기준으로 판단한다.
- 만들어 볼 것: 우리 조직 인사 결정 한 건의 차별 위험 검토 메모
- 국내 근거: 근로기준법 제6조, 남녀고용평등법 제2조·제7조·제8조, 고령자고용법 제4조의4, 장애인고용촉진법 제28조
- 글로벌 비교: 미국 민권법 제7편, EU 임금 투명성 지침(회원국 전환 기한 2026-06-07)
- 출처: KR-LSA, KR-EEA, KR-AGE, KR-DEPA, US-TITLE7, EU-2023-970

### E2 · 모성보호와 일·가정 양립
- 선수: W3
- 핵심 질문: 육아휴직을 쓴 사람의 자리와 평가는 어떻게 지켜져야 하는가?
- 목표: Apply — 임신·출산·육아 단계별로 회사가 해야 할 조치와 금지된 조치를 일정표로 만든다.
- 만들어 볼 것: 직원 한 명의 출산·육아 지원 일정표와 복귀 계획
- 국내 근거: 근로기준법 제74조, 남녀고용평등법 제18조의2·제19조·제19조의2
- 글로벌 비교: EU 일·생활 균형 지침의 아버지 휴가·부모 휴가(제4조·제5조), 미국 가족의료휴가법의 12주 휴가
- 출처: KR-LSA, KR-EEA, EU-2019-1158, US-DOL-FMLA

### E3 · 직장 내 괴롭힘과 성희롱
- 선수: B3
- 핵심 질문: 신고가 들어온 순간부터 회사가 놓치면 안 되는 의무는 무엇인가?
- 목표: Apply — 신고 접수부터 조사·보호·조치까지 법정 절차대로 처리 계획을 세운다.
- 만들어 볼 것: 우리 조직 괴롭힘·성희롱 신고 처리 절차서
- 국내 근거: 근로기준법 제76조의2·제76조의3, 남녀고용평등법 제12조·제13조·제14조
- 글로벌 비교: EU 남녀 균등대우 지침(2006/54/EC)의 괴롭힘·성희롱 정의, 미국 EEOC의 괴롭힘 예방 안내
- 경계·연결: 신고인·행위자와의 대화·갈등 조정 기술은 go-leadership-negotiation
- 출처: KR-LSA, KR-EEA, EU-2006-54, US-EEOC-HAR

### E4 · 기간제·단시간·파견
- 선수: B1
- 핵심 질문: 같은 일을 하는 사람을 계약 형태만 다르게 쓰면 어떤 의무가 생기는가?
- 목표: Evaluate — 기간제·단시간·파견·도급 중 인력 운용 방식을 법적 위험과 함께 고른다.
- 만들어 볼 것: 우리 조직 비정규 인력 현황의 위험 지도와 운용 방식 결정 메모
- 국내 근거: 기간제법 제4조·제8조, 파견법 제5조·제6조
- 글로벌 비교: EU 기간제 근로 기본협약의 남용 방지(제5조항), EU 파견근로 지침의 균등대우(제5조)
- 출처: KR-FTA, KR-TWA, EU-1999-70, EU-2008-104

## R · 고용 종료와 노사관계

### R1 · 징계와 해고
- 선수: B3
- 핵심 질문: 해고가 정당한지는 사유·절차·양정 중 무엇으로 판단하는가?
- 목표: Evaluate — 징계·해고 사안의 정당성을 사유·절차·양정으로 판단하고 대안을 고른다.
- 만들어 볼 것: 가상의 징계 사안 검토서와 통지서 초안
- 국내 근거: 근로기준법 제23조·제24조·제26조·제27조·제28조
- 글로벌 비교: 독일 해고제한법 제1조의 사회적 정당성, 영국 1996년 고용권법 제98조의 공정한 해고 사유
- 출처: KR-LSA, DE-KSCHG, UK-ERA-98

### R2 · 퇴직 처리와 노동 분쟁 대응
- 선수: R1, W4
- 핵심 질문: 사람이 나갈 때 회사가 14일 안에 끝내야 하는 일과, 진정이 들어오면 할 일은 무엇인가?
- 목표: Apply — 퇴직 처리 점검표를 만들고 진정·구제신청 대응 순서를 정한다.
- 만들어 볼 것: 우리 조직 퇴직 처리 점검표와 노동청 진정 대응 순서도
- 국내 근거: 근로기준법 제36조·제39조·제104조, 근로자퇴직급여 보장법 제9조
- 글로벌 비교: EU 집단해고 지침의 근로자 대표 협의(제2조), 미국 WARN법의 사전 통지
- 출처: KR-LSA, KR-RBA, EU-1998-59, US-DOL-WARN

### R3 · 노동조합과 노사협의회
- 선수: B3
- 핵심 질문: 노조가 없는 회사에도 직원 대표와 협의해야 할 의무가 있는가?
- 목표: Explain — 노동조합·단체교섭·부당노동행위와 노사협의회의 차이를 설명한다.
- 만들어 볼 것: 우리 조직 노사협의회 운영 점검표
- 국내 근거: 노동조합법 제2조·제29조·제81조, 근로자참여법 제4조·제20조
- 글로벌 비교: EU 근로자 정보·협의 지침(50인 이상 기업), 미국 전국노동관계법
- 경계·연결: 단체교섭의 협상 기술은 go-leadership-negotiation
- 출처: KR-TULRAA, KR-WPCA, EU-2002-14, US-NLRA

## S · 안전과 사회보험

### S1 · 산업안전보건
- 선수: B1
- 핵심 질문: 사무실 회사에도 안전보건 의무가 있는가, 있다면 무엇부터인가?
- 목표: Apply — 우리 사업장의 유해·위험 요인을 찾아 위험성평가를 해 본다.
- 만들어 볼 것: 우리 사업장 위험성평가표 한 장
- 국내 근거: 산업안전보건법 제5조·제29조·제36조
- 글로벌 비교: EU 산업안전보건 기본 지침(89/391/EEC)
- 경계·연결: 현장 공정·설비 안전 운영은 go-operations
- 출처: KR-OSHA, EU-1989-391

### S2 · 중대재해처벌법과 안전보건관리체계
- 선수: S1
- 핵심 질문: 사고가 나면 경영책임자는 무엇을 했다고 보여 줄 수 있어야 하는가?
- 목표: Evaluate — 안전보건관리체계 구축 의무 항목별로 우리 조직의 이행 상태를 판단한다.
- 만들어 볼 것: 우리 조직 안전보건 확보의무 이행 점검표
- 국내 근거: 중대재해처벌법 제2조·제4조·제6조, 같은 법 시행령 제4조
- 글로벌 비교: 영국 2007년 법인 과실치사법(고위 경영진의 관리 방식 요건)
- 경계·연결: 컴플라이언스 프로그램 총론은 go-compliance-and-legal, 현장 공정·설비 안전 운영은 go-operations
- 출처: KR-SAPA, KR-SAPA-ED, UK-CMCHA

### S3 · 4대 사회보험
- 선수: W1
- 핵심 질문: 직원 한 명을 뽑고 내보낼 때 네 보험에 각각 무엇을 언제 신고하는가?
- 목표: Apply — 입사·퇴사·휴직 사례에서 가입 대상과 신고·보험료 처리를 판단한다.
- 만들어 볼 것: 우리 조직 입퇴사 4대 보험 신고 점검표
- 국내 근거: 국민연금법 제8조, 국민건강보험법 제6조, 고용보험법 제8조, 산업재해보상보험법 제6조, 고용보험·산재보험 보험료징수법 제16조의10
- 글로벌 비교: 한미 사회보장협정의 가입증명서와 이중 가입 면제
- 경계·연결: 보험료의 회계 처리는 go-accounting, 원천징수는 go-tax
- 출처: KR-NPA, KR-NHIA, KR-EIA, KR-IACIA, KR-PCA, US-SSA

## H · HR 운영 실무

### H1 · 직무 설계와 인력계획
- 선수: B2
- 핵심 질문: 사람을 더 뽑기 전에 일을 어떻게 나눠 보아야 하는가?
- 목표: Apply — 직무분석으로 직무기술서를 쓰고 필요한 인원과 역량을 추정한다.
- 만들어 볼 것: 우리 조직 핵심 직무 하나의 직무기술서와 1년 인력계획
- 국내 근거: NCS 국가직무능력표준(대분류 02 경영·회계·사무)의 인사 관련 능력단위
- 글로벌 비교: 미국 노동부 O*NET 직업 정보
- 경계·연결: 인건비 예산은 go-control
- 출처: KR-NCS, US-ONET

### H2 · 채용과 선발
- 선수: H1, E1
- 핵심 질문: 어떤 선발 방법이 실제로 일을 잘할 사람을 더 잘 가려내는가?
- 목표: Evaluate — 선발 방법을 타당도·공정성·법적 제한으로 비교해 채용 절차를 설계한다.
- 만들어 볼 것: 직무 하나의 구조화 면접 질문지와 평가표
- 국내 근거: 채용절차법 제4조의3·제11조, 남녀고용평등법 제7조, 개인정보 보호법 제15조
- 글로벌 비교: 미국 선발 절차 통일 지침의 4/5 기준, EU AI 법 부속서 III의 채용 AI 고위험 분류
- 경계·연결: 지원자 개인정보 보호 조치는 go-security, AI 채용 도구 규제는 go-ai
- 출처: KR-FHPA, KR-EEA, KR-PIPA, US-UGESP, EU-2024-1689, RES-SACKETT

### H3 · 온보딩·교육·경력개발
- 선수: H2
- 핵심 질문: 법정 의무교육과 실제로 일을 잘하게 만드는 교육은 어떻게 다른가?
- 목표: Apply — 신규 입사자의 첫 90일 계획과 연간 교육 계획(법정 교육 포함)을 짠다.
- 만들어 볼 것: 우리 조직 신규 입사자 90일 계획과 연간 교육 달력
- 국내 근거: 남녀고용평등법 제13조, 산업안전보건법 제29조, 장애인고용법 제5조의2, 국민 평생 직업능력 개발법
- 글로벌 비교: EU 투명하고 예측 가능한 근로조건 지침의 의무 교육 무상·근로시간 인정(제13조)
- 출처: KR-EEA, KR-OSHA, KR-DEPA, KR-VTA, EU-2019-1152

### H4 · 성과평가와 피드백
- 선수: H1
- 핵심 질문: 평가는 무엇을 위해 하고, 그 목적에 따라 설계가 어떻게 달라지는가?
- 목표: Evaluate — 평가 목적(보상·육성·인력 결정)에 맞는 평가 방식을 고르고, 평가 결과를 불이익 처분에 쓸 때의 위험을 판단한다.
- 만들어 볼 것: 우리 조직 평가 제도 설계안 한 장
- 국내 근거: 근로기준법 제23조, 남녀고용평등법 제10조
- 글로벌 비교: 미국 선발 절차 통일 지침(승진·강등·해고 결정에도 적용), 수행 평가 연구 100년 정리
- 경계·연결: 조직 KPI와 성과관리 체계는 go-control, OKR은 go-strategy
- 출처: KR-LSA, KR-EEA, US-UGESP, RES-DENISI

### H5 · 보상 설계
- 선수: W1, H4
- 핵심 질문: 같은 인건비로 공정하다고 느끼게 하는 보상 구조는 무엇이 다른가?
- 목표: Evaluate — 연공급·직무급·성과급과 인센티브 구조를 비교해 우리 조직 보상 구조를 정한다.
- 만들어 볼 것: 직급·직무별 보상 구간표 초안과 결정 근거 메모
- 국내 근거: 남녀고용평등법 제8조, 근로기준법 제94조, 고용노동부 임금체계 개편 지원(임금직업포털)
- 글로벌 비교: EU 임금 투명성 지침의 임금 구조·공개 의무
- 경계·연결: 스톡옵션은 go-startup-agile, 인건비 예산은 go-control
- 출처: KR-EEA, KR-LSA, KR-WAGE, EU-2023-970

### H6 · 조직문화와 몰입
- 선수: H4
- 핵심 질문: 사람들이 문제를 말하지 않는 조직에서는 무엇이 먼저 무너지는가?
- 목표: Evaluate — 진단 자료로 조직문화 문제를 정의하고 개입 방안을 고른다.
- 만들어 볼 것: 우리 팀 짧은 진단 설문과 결과 해석·개입 계획
- 국내 근거: 근로자참여법 제4조, 근로기준법 제76조의2
- 글로벌 비교: 영국 보건안전청의 업무 스트레스 관리 기준, 심리적 안전감 연구
- 경계·연결: 리더십·동기·팀의 대화 기술은 go-leadership-negotiation, 진단 데이터의 통계 분석은 go-data-analytics, OKR은 go-strategy
- 출처: KR-WPCA, KR-LSA, UK-HSE-MS, RES-EDMONDSON

### H7 · 인사 데이터와 인사 개인정보
- 선수: H2
- 핵심 질문: 회사가 가진 직원 정보 중 어디까지 써도 되고, 누구와 협의해야 하는가?
- 목표: Apply — 인사 데이터 항목별로 처리 근거·보관 기간·접근 권한을 정한다.
- 만들어 볼 것: 우리 조직 인사 데이터 목록과 처리 근거표
- 국내 근거: 개인정보 보호법 제15조·제23조, 근로자참여법 제20조
- 글로벌 비교: EU 일반개인정보보호규정 제88조(고용 맥락)
- 경계·연결: 보호 조치·유출 대응은 go-security, AI 기반 평가는 go-ai, HRIS 도입은 go-mis, 인사 데이터 분석 기법은 go-data-analytics
- 출처: KR-PIPA, KR-WPCA, EU-GDPR

## G · 글로벌 인력 운영

### G1 · 해외 인력과 외국인 고용
- 선수: B2, S3
- 핵심 질문: 다른 나라에 사는 사람을 고용하면 어느 나라 법이 적용되는가?
- 목표: Evaluate — 해외 채용 방식(현지 법인·EOR·업무위탁·파견)과 외국인 국내 고용 경로를 위험과 비용으로 비교한다.
- 만들어 볼 것: 해외 인력 한 명 채용 방식 비교 메모
- 국내 근거: 국제사법 제48조, 외국인고용법 제8조, 출입국관리법 제18조
- 글로벌 비교: EU 로마 I 규칙 제8조(개별 근로계약의 준거법)
- 출처: KR-PILA, KR-FWEA, KR-IMMI, EU-ROME1

## X · 졸업 프로젝트

### X1 · 우리 조직 HR 운영 패키지
- 선수: B3, W2, E3, R1, S2, H5
- 핵심 질문: 배운 것을 실제 조직의 규정과 점검표로 만들어 낼 수 있는가?
- 목표: Develop — 실제(또는 학습자가 정한) 조직의 인사 규정 초안과 노무 위험 점검표를 근거와 함께 만든다.
- 만들어 볼 것: 취업규칙 또는 인사 규정 초안, 노무 위험 점검표, 제도 하나의 설계서
- 국내 근거: 근로기준법 제93조, 고용노동부 표준 취업규칙, 앞 모듈의 근거 전체
- 글로벌 비교: 학습자 조직이 해외 인력을 쓰면 그 나라 기준 한 가지와 대조
- 출처: KR-LSA, KR-MOEL-RULES

## 확인 시점이 중요한 항목

아래 항목은 개정·고시가 잦다. 이 표에는 값을 적지 않는다. 튜터는 이 항목을 쓰는 차례마다 확인할 곳에서 현행 값과 시행일을 확인하고 출처 줄을 붙인다.

| 항목 | 확인할 곳 | 확인 시점 |
|---|---|---|
| 최저임금액(W1, H5) | 최저임금위원회 minimumwage.go.kr, 고용노동부 고시 | 매년 새 고시 뒤, 그리고 세션에서 금액을 쓸 때마다 |
| 4대 사회보험 요율·상하한(S3) | 국민연금공단·국민건강보험공단·근로복지공단 공지, law.go.kr 각 법 시행령 | 매년 1월 전후, 그리고 계산에 쓸 때마다 |
| 출산전후휴가·육아휴직의 기간·급여·분할(E2) | law.go.kr 남녀고용평등법·근로기준법·고용보험법, 고용노동부 | E2를 다룰 때마다(최근 개정이 잦다) |
| 노동조합법 제2조(정의)·제3조 개정 여부와 시행일(R3) | law.go.kr 노동조합 및 노동관계조정법 연혁 | R3을 다룰 때마다 |
| 상시 5명 미만 사업장에 적용되는 조문(B1) | law.go.kr 근로기준법 제11조와 시행령 | B1을 다룰 때마다 |
| 연장근로 한도·유연근무 제도 개정(W2) | law.go.kr 근로기준법 연혁, 고용노동부 | W2를 다룰 때마다 |
| 중대재해처벌법 시행령의 의무 항목(S2) | law.go.kr 중대재해 처벌 등에 관한 법률 시행령 | S2를 다룰 때마다 |
| 채용절차법 적용 범위(H2) | law.go.kr 채용절차의 공정화에 관한 법률 | H2를 다룰 때마다 |
| EU 지침의 회원국 전환 상태(B1, E1, H5) | EUR-Lex 해당 지침의 National transposition | 비교에 쓸 때마다 |
| 고용노동부 표준 취업규칙·표준근로계약서의 판(B2, B3, X1) | 고용노동부 정책자료실 | 문서 초안을 만들 때마다 |

## 출처

조문은 아래 조회일의 현행 법령 기준이다. 법령은 법령명으로 연결되는 국가법령정보센터 주소를 쓴다(항상 현행본을 연다).

| 키 | 출처 | URL | 조회일 |
|---|---|---|---|
| KR-LSA | 근로기준법 | https://www.law.go.kr/법령/근로기준법 | 확인 예정 |
| KR-MWA | 최저임금법 | https://www.law.go.kr/법령/최저임금법 | 확인 예정 |
| KR-RBA | 근로자퇴직급여 보장법 | https://www.law.go.kr/법령/근로자퇴직급여보장법 | 확인 예정 |
| KR-EEA | 남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률 | https://www.law.go.kr/법령/남녀고용평등과일ㆍ가정양립지원에관한법률 | 확인 예정 |
| KR-AGE | 고용상 연령차별금지 및 고령자고용촉진에 관한 법률 | https://www.law.go.kr/법령/고용상연령차별금지및고령자고용촉진에관한법률 | 확인 예정 |
| KR-DEPA | 장애인고용촉진 및 직업재활법 | https://www.law.go.kr/법령/장애인고용촉진및직업재활법 | 확인 예정 |
| KR-FTA | 기간제 및 단시간근로자 보호 등에 관한 법률 | https://www.law.go.kr/법령/기간제및단시간근로자보호등에관한법률 | 확인 예정 |
| KR-TWA | 파견근로자 보호 등에 관한 법률 | https://www.law.go.kr/법령/파견근로자보호등에관한법률 | 확인 예정 |
| KR-TULRAA | 노동조합 및 노동관계조정법 | https://www.law.go.kr/법령/노동조합및노동관계조정법 | 확인 예정 |
| KR-WPCA | 근로자참여 및 협력증진에 관한 법률 | https://www.law.go.kr/법령/근로자참여및협력증진에관한법률 | 확인 예정 |
| KR-OSHA | 산업안전보건법 | https://www.law.go.kr/법령/산업안전보건법 | 확인 예정 |
| KR-SAPA | 중대재해 처벌 등에 관한 법률 | https://www.law.go.kr/법령/중대재해처벌등에관한법률 | 확인 예정 |
| KR-SAPA-ED | 중대재해 처벌 등에 관한 법률 시행령 | https://www.law.go.kr/법령/중대재해처벌등에관한법률시행령 | 확인 예정 |
| KR-NPA | 국민연금법 | https://www.law.go.kr/법령/국민연금법 | 확인 예정 |
| KR-NHIA | 국민건강보험법 | https://www.law.go.kr/법령/국민건강보험법 | 확인 예정 |
| KR-EIA | 고용보험법 | https://www.law.go.kr/법령/고용보험법 | 확인 예정 |
| KR-IACIA | 산업재해보상보험법 | https://www.law.go.kr/법령/산업재해보상보험법 | 확인 예정 |
| KR-PCA | 고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률 | https://www.law.go.kr/법령/고용보험및산업재해보상보험의보험료징수등에관한법률 | 확인 예정 |
| KR-FHPA | 채용절차의 공정화에 관한 법률 | https://www.law.go.kr/법령/채용절차의공정화에관한법률 | 확인 예정 |
| KR-PIPA | 개인정보 보호법 | https://www.law.go.kr/법령/개인정보보호법 | 확인 예정 |
| KR-PILA | 국제사법 | https://www.law.go.kr/법령/국제사법 | 확인 예정 |
| KR-FWEA | 외국인근로자의 고용 등에 관한 법률 | https://www.law.go.kr/법령/외국인근로자의고용등에관한법률 | 확인 예정 |
| KR-IMMI | 출입국관리법 | https://www.law.go.kr/법령/출입국관리법 | 확인 예정 |
| KR-VTA | 국민 평생 직업능력 개발법 | https://www.law.go.kr/법령/국민평생직업능력개발법 | 확인 예정 |
| KR-NCS | 국가직무능력표준(NCS) 누리집 | https://www.ncs.go.kr/ | 2026-11-14 |
| KR-WAGE | 고용노동부 임금체계 개편 지원(임금직업포털 안내) | https://moel.go.kr/policy/policyinfo/wagesystemRenewal/main.do | 2026-11-14 |
| KR-MOEL-RULES | 고용노동부 「2026년 표준 취업규칙 게시」(정책자료실, 2026-02-13 등록) | https://moel.go.kr/policy/policydata/view.do?bbs_seq=20260200740 | 2026-11-14 |
| EU-2024-2831 | Directive (EU) 2024/2831 플랫폼 노동 근로조건 개선 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L2831 | 2026-11-14 |
| EU-2019-1152 | Directive (EU) 2019/1152 투명하고 예측 가능한 근로조건 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L1152 | 2026-11-14 |
| EU-2022-2041 | Directive (EU) 2022/2041 적정 최저임금 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2041 | 2026-11-14 |
| EU-2003-88 | Directive 2003/88/EC 근로시간 편성 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0088 | 2026-11-14 |
| EU-2019-1158 | Directive (EU) 2019/1158 부모·돌봄자의 일·생활 균형 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L1158 | 2026-11-14 |
| EU-2023-970 | Directive (EU) 2023/970 임금 투명성 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023L0970 | 2026-11-14 |
| EU-2006-54 | Directive 2006/54/EC 남녀 균등대우(재구성) | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0054 | 2026-11-14 |
| EU-1999-70 | Council Directive 1999/70/EC 기간제 근로 기본협약 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31999L0070 | 2026-11-14 |
| EU-2008-104 | Directive 2008/104/EC 파견근로 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32008L0104 | 2026-11-14 |
| EU-1998-59 | Council Directive 98/59/EC 집단해고 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31998L0059 | 2026-11-14 |
| EU-2002-14 | Directive 2002/14/EC 근로자 정보·협의 일반 체계 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0014 | 2026-11-14 |
| EU-1989-391 | Council Directive 89/391/EEC 산업안전보건 기본 지침 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31989L0391 | 2026-11-14 |
| EU-2024-1689 | Regulation (EU) 2024/1689 인공지능법 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689 | 2026-11-14 |
| EU-GDPR | Regulation (EU) 2016/679 일반개인정보보호규정 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679 | 2026-11-14 |
| EU-ROME1 | Regulation (EC) No 593/2008 계약채무 준거법(로마 I) | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32008R0593 | 2026-11-14 |
| US-DOL-IC | 미국 노동부 「FLSA상 독립계약자 오분류」 | https://www.dol.gov/agencies/whd/flsa/misclassification | 2026-11-14 |
| US-DOL-FLSA | 미국 노동부 「Minimum Wage」(FLSA) | https://www.dol.gov/agencies/whd/minimum-wage | 2026-11-14 |
| US-DOL-OT | 미국 노동부 「Overtime Pay」 | https://www.dol.gov/agencies/whd/overtime | 2026-11-14 |
| US-DOL-VAC | 미국 노동부 「Vacation Leave」(FLSA는 휴가 유급 지급을 요구하지 않음) | https://www.dol.gov/general/topic/workhours/vacation_leave | 2026-11-14 |
| US-DOL-RET | 미국 노동부 「Retirement Plans, Benefits and Savings」(ERISA) | https://www.dol.gov/general/topic/retirement | 2026-11-14 |
| US-DOL-FMLA | 미국 노동부 「Family and Medical Leave Act」 | https://www.dol.gov/agencies/whd/fmla | 2026-11-14 |
| US-DOL-WARN | 미국 노동부 「WARN Act Compliance Assistance」 | https://www.dol.gov/agencies/eta/layoffs/warn | 2026-11-14 |
| US-TITLE7 | EEOC 「Title VII of the Civil Rights Act of 1964」 | https://www.eeoc.gov/statutes/title-vii-civil-rights-act-1964 | 2026-11-14 |
| US-EEOC-HAR | EEOC 「Harassment」 | https://www.eeoc.gov/harassment | 2026-11-14 |
| US-UGESP | EEOC 「선발 절차 통일 지침 Q&A」 | https://www.eeoc.gov/laws/guidance/questions-and-answers-clarify-and-provide-common-interpretation-uniform-guidelines | 2026-11-14 |
| US-NLRA | 전국노동관계법 제7조(29 U.S.C. §157), 미국 정부 govinfo | https://www.govinfo.gov/content/pkg/USCODE-2023-title29/html/USCODE-2023-title29-chap7-subchapII-sec157.htm | 2026-11-14 |
| US-SSA | 미국 사회보장청 「Totalization Agreement with Korea」 | https://www.ssa.gov/international/Agreement_Pamphlets/korea.html | 2026-11-14 |
| US-ONET | O*NET OnLine(미국 노동부 후원) | https://www.onetonline.org/ | 2026-11-14 |
| UK-PA-2008 | Pensions Act 2008 | https://www.legislation.gov.uk/ukpga/2008/30/contents | 2026-11-14 |
| UK-CMCHA | Corporate Manslaughter and Corporate Homicide Act 2007 s.1 | https://www.legislation.gov.uk/ukpga/2007/19/section/1 | 2026-11-14 |
| UK-ERA-98 | Employment Rights Act 1996 s.98 | https://www.legislation.gov.uk/ukpga/1996/18/section/98 | 2026-11-14 |
| UK-HSE-MS | HSE 「Management Standards」(업무 스트레스) | https://www.hse.gov.uk/stress/standards/ | 2026-11-14 |
| DE-BETRVG | Betriebsverfassungsgesetz §87 | https://www.gesetze-im-internet.de/betrvg/__87.html | 2026-11-14 |
| DE-KSCHG | Kündigungsschutzgesetz §1 | https://www.gesetze-im-internet.de/kschg/__1.html | 2026-11-14 |
| RES-SACKETT | Sackett 외(2022), Revisiting meta-analytic estimates of validity in personnel selection, J. Applied Psychology | https://doi.org/10.1037/apl0000994 | 2026-11-14 |
| RES-DENISI | DeNisi & Murphy(2017), Performance appraisal and performance management: 100 years of progress?, J. Applied Psychology | https://doi.org/10.1037/apl0000085 | 2026-11-14 |
| RES-EDMONDSON | Edmondson(1999), Psychological safety and learning behavior in work teams, Administrative Science Quarterly | https://doi.org/10.2307/2666999 | 2026-11-14 |
