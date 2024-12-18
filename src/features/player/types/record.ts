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
}

export interface SeasonSummary extends CommonRecord {
  babip: string;
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
