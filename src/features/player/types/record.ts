export interface GameRecord {
  displayDate: string;
  matchTeamCode: string;
  matchTeamName: string;
  bb: number;
  hit: number;
  hr: number;
  hp: number;
  r: number;
  sv: number;
  wl: string;
  wls: string;
  oavg?: string; // 투수만 있는 필드
  inn2?: number; // 투수만 있는 필드
  innDisplay?: string; // 투수만 있는 필드
  kk?: number; // 투수만 있는 필드
  pa?: number; // 투수만 있는 필드
  // 타자 관련 추가 필드
  ab?: number;
  bra?: string;
  rbi?: number;
  run?: number;
  sb?: number;
  gd?: number;
  h2?: number;
  h3?: number;
  hra?: string;
}

export interface PlayerBase {
  backnum: string;
  birth: string;
  bloodGroups: string;
  bornPlace: string;
  career: string;
  career2: string;
  debutYear: string;
  energybar: number;
  energybarName: string;
  engName: string;
  gyear: string;
  hasFanpage: string;
  height: string;
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  money: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  playerPrvwImg1: string;
  playerPrvwImg2: string;
  playerPrvwImg3: string;
  position: string;
  position2: string;
  promise: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  weight: string;
}

export interface SeasonSummaryBase {
  ab: number;
  babip: string;
  bb: number;
  bbkk: string;
  bra: string;
  cs: number;
  finalHit: number;
  gamenum: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  ib: number;
  kk: number;
  ops: string;
  opsPlus: string;
  pa: number;
  pcode: string;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slg: string;
  spHra: string;
  war: string;
  winShares: string;
  woba: string;
  wraa: string;
  xbhrun: string;
}

export interface Player {
  gameplayer: PlayerBase;
  recentgamerecordlist: GameRecord[];
  recentgamerecordlistfutures: GameRecord[];
  seasonsummary: SeasonSummaryBase;
  seasonsummaryfutures: SeasonSummaryBase;
  yearrecordlist: SeasonSummaryBase[];
}

export interface Pitcher extends Player {
  recentgamerecordlist: GameRecord[];
  recentgamerecordlistfutures: GameRecord[];
  seasonsummary: SeasonSummaryBase;
  seasonsummaryfutures: SeasonSummaryBase;
}

export interface Batter extends Player {
  recentgamerecordlist: GameRecord[];
  recentgamerecordlistfutures: GameRecord[];
  seasonsummary: SeasonSummaryBase;
  seasonsummaryfutures: SeasonSummaryBase;
}
