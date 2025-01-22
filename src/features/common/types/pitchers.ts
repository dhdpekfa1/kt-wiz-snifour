// 공통으로 사용되는 투수 스탯
export interface CommonPitcherStats {
  ab: number;
  bb: number;
  bb9: number;
  bk: number;
  bs: number;
  cg: number;
  cs: number;
  er: number;
  era: string;
  err: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn: number;
  iso: string;
  kk: number;
  kk9: number;
  oavg: string;
  obp: string;
  oops: string;
  oslg: string;
  qs: number;
  r: number;
  sb: number;
  sf: number;
  sh: number;
  sho: number;
  sv: number;
  tugucount: number;
  tugucountinn: number;
  whip: string;
  wp: number;
  wra: string;
}

// 팀 단위의 투수 순위 스탯 - 팀 순위 페이지에서 사용
export interface TeamPitcherRank extends CommonPitcherStats {
  bbhp: number;
  gd: number;
  pa: number;
  teamCode: string;
  teamName: string;
}

// 전체 투수 스탯
export interface OverallPitcherRank extends CommonPitcherStats {
  bf: number;
  cba: string;
  dpp: string;
  fo: number;
  gamenum: number;
  go: number;
  gofo: string;
  h1: number;
  inBa: string;
  inFlag: string;
  inn2: number;
  kkbb: string;
  l: number;
  lCg: number;
  lba: string;
  outBa: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  qsPlus: number;
  quit: number;
  quitInn2: number;
  rba: string;
  sbTryCn: number;
  start: number;
  startInn2: number;
  svo: number;
  w: number;
  wCg: number;
  teamName: string;
}
