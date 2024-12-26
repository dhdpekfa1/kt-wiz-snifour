export interface CommonRecord {
  bb: number;
  er: number;
  hit: number;
  hp: number;
  hr: number;
  inn2: number;
  innDisplay: string;
  kk: number;
  r: number;
  sv: number;
  wl: string;
  w: number;
}

export interface RecentRecord extends CommonRecord {
  displayDate: string;
  matchTeamCode: string;
  matchTeamName: string;
  oavg: string;
  pa: number;
  wls: string;
}

export interface YearRecord extends CommonRecord {
  bf: number;
  era: string;
  gamenum: number;
  gyear: string;
  hold: number;
  sho: number;
  teamCode: string;
  teamName: string;
  wCg: number;
  wra: string;
  l: number;
}

export interface SeasonSummary extends CommonRecord {
  babip: string;
  era: string;
  bs: number;
  err: number;
  fip: string;
  fo: number;
  gamenum: number;
  go: number;
  havg: string;
  ib: number;
  kbb: string;
  l: number;
  oavg: string;
  pcode: string;
  playerName: string;
  qs: number;
  qsPlus: number;
  ravg: string;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  svo: number;
  tugucount: number;
  turfSave: number;
  war: string;
  whip: string;
  winShares: string;
  wp: number;
  wra: string;
}

export interface SeasonBatter
  extends Pick<CommonRecord, 'bb' | 'hit' | 'hp' | 'hr' | 'kk'> {
  ab: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cs: number;
  ber?: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kkab: number;
  ops: string;
  pa: number;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  teamCode: string;
  teamName: string;
}
