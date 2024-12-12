export interface TeamStats {
  ab: number; // 타수
  bra: string; // 출루율
  continue1: string; // 연속
  drawn: number; // 무
  er: number; // 자책점
  era: string; // 평균 자책점
  game: number; // 경기 수
  gameFlag: number; //
  gb: string; // 게임 차
  gyear: string; // 경기 연도(시즌)
  hr: number; // 홈런
  hra: string; // 타율
  lastrank: number; // 지난 시즌 순위
  lose: number; // 패
  lra: string; // 장타율
  r: number; // 실점
  rank: number; // 순위
  run: number; // 득점
  sb: number; // 도루
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  teamNameEng: string; // 팀 이름(영어)
  win: number; // 승
  wra: string; // 승률
}

export interface TeamBatterStats {
  ab: number;
  bb: number; // 볼넷
  bbhp: number;
  bbkk: string;
  bra: string; // 출루율
  cs: number;
  der: string;
  err: number; // 실책
  gd: number; // 병살
  gyear: string; // 경기 연도(시즌)
  h2: number; // 2루타
  h3: number; // 3루타
  hit: number; // 안타
  hp: number; // 사구
  hr: number; // 홈런
  hra: string; // 타율
  hrab: number;
  ib: number; // 고의4구
  iso: string;
  kk: number; // 삼진
  kkab: number;
  ops: string; // OPS
  pa: number;
  rbi: number; // 타점
  run: number;
  sb: number; // 도루
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string; // 장타율
  teamCode: string; // 팀 코드
  teamName: 'KT'; // 팀 이름
}

export interface TeamVS {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
}

export interface GameSchedule {
  broadcast: string;
  displayDate: string;
  gameDate: string;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  homeScore: number;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  visitScore: number;
}
