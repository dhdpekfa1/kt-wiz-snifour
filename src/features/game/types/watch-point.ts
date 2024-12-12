export interface WatchPointData {
  gameScore: GameScore;
  homeLineup: Lineup[];
  homePitcher: Pitcher;
  homeTeamRank: TeamRank;
  homeTeamWinLose: TeamWinLose;
  schedule: Schedule;
  visitLineup: Lineup[];
  visitPitcher: Pitcher;
  visitTeamRank: TeamRank;
  visitTeamWinLose: TeamWinLose;
}

export interface GameScore {
  bhomeName: string; // 경기 초/말 여부 ("말")
  displayDate: string; // 경기 날짜 및 시간 (표시용)
  endFlag: string; // 경기 종료 상태 플래그
  gameDate: string; // 경기 날짜 (YYYYMMDD 형식)
  gmKey: string; // 경기 고유 키
  gtime: string; // 경기 시작 시간
  hOutcome: string; // 홈팀 결과 ("승" 또는 "패")
  home: string; // 홈팀 이름
  homeKey: string; // 홈팀 코드
  homeLogo: string; // 홈팀 로고 URL
  homeYn: string; // 홈팀 여부 ("Y")
  hpcode: string; // 홈팀 투수 코드
  hpitcherName: string; // 홈팀 투수 이름
  hscore: number; // 홈팀 점수
  inning: number; // 경기 이닝 수
  stadium: string; // 경기장 이름
  stadiumKey: string; // 경기장 코드
  tbSc: string; // 초/말 구분 ("T" 또는 "B")
  vOutcome: string; // 원정팀 결과 ("승" 또는 "패")
  visit: string; // 원정팀 이름
  visitKey: string; // 원정팀 코드
  visitLogo: string; // 원정팀 로고 URL
  vpcode: string; // 원정팀 투수 코드
  vpitcherName: string; // 원정팀 투수 이름
  vscore: number; // 원정팀 점수
}

export interface Lineup {
  backnum: string; // 등번호
  birth: string; // 생년월일 (YYYYMMDD 형식)
  career: string; // 경력
  curBra: string; // 현재 타율
  curHra: string; // 현재 홈런율
  height: string; // 키 (cm)
  hittype: string; // 투타 유형
  money: string; // 연봉
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  playerPrvwImg: string; // 선수 이미지 URL
  pos: string; // 포지션 번호
  posidName: string; // 포지션 약어
  position: string; // 포지션 풀네임
  promise: string; // 계약금
  seq: number; // 선수 순서
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  weight: string; // 몸무게 (kg)
}

export interface Pitcher {
  babip: string; // 타구인플레이 타율
  bb: number; // 볼넷
  bf: number; // 타자 상대 횟수
  bk: number; // 보크
  bs: number; // 블론 세이브
  er: number; // 자책점
  era: string; // 평균자책점
  err: number; // 에러 개수
  fip: string; // 수비무관 평균자책점
  fo: number; // 플라이 아웃
  gamenum: number; // 경기 수
  go: number; // 땅볼 아웃
  gyear: string; // 시즌 연도
  havg: string; // 타율
  hit: number; // 피안타 수
  hold: number; // 홀드
  hp: number; // 사구
  hr: number; // 피홈런 수
  ib: number; // 고의4구
  inn2: number; // 투구 이닝 (1/3 단위)
  innDisplay: string; // 투구 이닝 (표시용, 예: "149 2/3")
  kbb: string; // 삼진/볼넷 비율
  kk: number; // 탈삼진 수
  l: number; // 패배 수
  oavg: string; // 피안타율
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  qs: number; // 퀄리티 스타트 수
  qsPlus: number; // 퀄리티 스타트 플러스
  r: number; // 실점
  ravg: string; // 실점 평균
  sf: number; // 희생플라이
  sh: number; // 희생번트
  sho: number; // 완봉승
  start: number; // 선발 경기 수
  sv: number; // 세이브 수
  svo: number; // 세이브 기회 수
  tugucount: number; // 총 타자 수
  turfSave: number; // 터프 세이브
  w: number; // 승리 수
  wCg: number; // 완투 경기 수
  war: string; // 대체 선수 대비 승리 기여도
  whip: string; // 이닝당 출루 허용
  winShares: string; // 승리 기여도
  wl: string; // 승-패 기록
  wp: number; // 폭투
  wra: string; // 승률
}

export interface TeamRank {
  ab: number; // 타석 수
  bra: string; // 팀 타율
  continue1: string; // 연승/연패 기록 (예: "3승")
  drawn: number; // 무승부 수
  er: number; // 자책점
  era: string; // 평균자책점
  game: number; // 경기 수
  gameFlag: number; // 경기 상태 플래그
  gb: string; // 게임차
  gyear: string; // 시즌 연도
  hr: number; // 홈런 수
  hra: string; // 홈런율
  lastrank: number; // 이전 순위
  lose: number; // 패배 수
  lra: string; // 패배율
  r: number; // 실점
  rank: number; // 현재 순위
  run: number; // 득점
  sb: number; // 도루 수
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  teamNameEng: string; // 팀 이름 (영문)
  win: number; // 승리 수
  wra: string; // 승률
}

export interface TeamWinLose {
  drawn: number; // 무승부 수
  lose: number; // 패배 수
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  vsTeamCode: string; // 상대 팀 코드
  win: number; // 승리 수
}

export interface Schedule {
  current: GameSchedule; // 현재 경기 일정
  next: GameSchedule; // 다음 경기 일정
  prev: GameSchedule; // 이전 경기 일정
}

export interface GameSchedule {
  broadcast: string; // 중계 방송사
  cancelFlag: string; // 경기 취소 여부 (0: 정상, 1: 취소)
  crowdCn: number; // 관중 수
  endFlag: string; // 경기 종료 여부 (0: 진행 중, 1: 종료)
  game: string; // 경기 상태 (예: "current", "next", "prev")
  gameDate: string; // 경기 날짜 (YYYYMMDD 형식)
  gday: number; // 경기 일
  gmkey: string; // 경기 고유 키
  gmonth: number; // 경기 월
  gtime: string; // 경기 시간
  gyear: string; // 경기 연도
  home: string; // 홈팀 이름
  homeKey: string; // 홈팀 코드
  hscore: number; // 홈팀 점수
  stadium: string; // 경기장 이름
  stadiumKey: string; // 경기장 코드
  visit: string; // 원정팀 이름
  visitKey: string; // 원정팀 코드
  vscore: number; // 원정팀 점수
}
