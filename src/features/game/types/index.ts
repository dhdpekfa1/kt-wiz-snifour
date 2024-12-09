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

export interface TeamPitcherStats {
  ab: number;
  bb: number; // 볼넷
  bb9: number;
  bbhp: number; // 사구
  bk: number; // 보크
  bs: number; // 블론세이브
  cg: number;
  cs: number;
  er: number; // 자책점
  era: string; // 평균 자책점
  err: number;
  gd: number;
  gyear: string; // 경기 연도(시즌)
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number; // 홀드 수
  hp: number; //
  hr: number;
  ib: number; // 고의사구
  inn: number;
  iso: string;
  kk: number; // 탈삼진
  kk9: number;
  oavg: string; // 피안타율
  obp: string;
  oops: string;
  oslg: string;
  pa: number;
  qs: number; // QS
  r: number; // 실점
  sb: number;
  sf: number; // 희비
  sh: number; // 희타
  sho: number;
  sv: number; // 세이브 수
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  tugucount: number;
  tugucountinn: number;
  whip: string; // WHIP
  wp: number; // 폭투
  wra: string;
}
