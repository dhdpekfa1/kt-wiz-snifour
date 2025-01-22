export interface BoxscoreResponse {
  data: BoxscoreData[];
}

export interface BoxscoreData {
  etcgames: EtcGame[];
  gameFlag: string;
  hbatters: Batter[];
  hpitchers: Pitcher[];
  schedule: {
    current: ScheduleInfo;
    next: ScheduleInfo;
    prev: ScheduleInfo;
  };
  scoreboard: ScoreboardEntry[];
  vbatters: Batter[];
  vpitchers: Pitcher[];
}

export interface EtcGame {
  gday: string;
  gmkey: string;
  how: string;
  result: string;
  seq: number;
}

export interface Batter {
  team?: string;
  ab: number;
  accmAb: number;
  accmHit: number;
  changeinn: string;
  gday: string;
  gmkey: string;
  hit: number;
  inn1: string;
  inn2: string;
  inn3: string;
  inn4: string;
  inn5: string;
  inn6: string;
  inn7: string;
  inn8: string;
  inn9: string;
  name: string;
  oneturn: string;
  pcode: string;
  position: string;
  rbi: number;
  run: number;
  tb: string;
  turn: string;
}

export interface Pitcher {
  playerName?: string;
  team?: string;
  ab: number;
  accmEr: number;
  accmInn2: number;
  bbhp: number;
  bf: number;
  changeinn: string;
  er: number;
  game: number;
  gday: string;
  gmkey: string;
  hit: number;
  hr: number;
  inn: string;
  kk: number;
  l: number;
  name: string;
  pa: number;
  pcode: string;
  pos: string;
  r: number;
  s: number;
  tb: string;
  w: number;
  wls: string;
  era?: string;
  start?: number;
  sv?: number;
  hold?: number;
  wra?: string;
  innDisplay?: string;
  bb?: number;
  hp?: number;
}

export interface ScheduleInfo {
  broadcast: string;
  cancelFlag: string;
  crowdCn: number;
  endFlag: string;
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  vscore: number;
}

export interface ScoreboardEntry {
  ballfour: string;
  bhome: number;
  bhomeName: string;
  error: string;
  gameDate: number;
  hit: string;
  run: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
  score8: string;
  score9: string;
  score10: string;
  score11: string;
  score12: string;
  [key: `score${number}`]: string;
}
