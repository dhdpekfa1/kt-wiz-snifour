export interface GameRecord {
  displayDate: string; // 경기 일자
  matchTeamCode: string; // 상대팀 코드
  matchTeamName: string; // 상대팀 이름
  bb: number; // 볼넷
  hit: number; // 안타
  hr: number; // 홈런
  hp: number; // 몸에 맞는 볼
  r: number; // 득점
  sv: number; // 세이브
  wl: string; // 승패 (예: "W", "L")
  wls: string; // 승패 상태 (예: "W", "L", "S")
  oavg?: string; // 상대 타율 (투수 전용 필드)
  inn2?: number; // 투구 이닝 (투수 전용 필드)
  innDisplay?: string; // 투구 이닝 표시 (투수 전용 필드, 예: "1 1/3")
  kk?: number; // 삼진 (투수 전용 필드)
  pa?: number; // 타석 수 (투수 전용 필드)
  er?: number; // 자책점 (투수 전용 필드)
  // 포수 관련 추가 필드
  ab?: number; // 타석 (포수 전용 필드)
  bra?: string; // 타율 (포수 전용 필드)
  rbi?: number; // 타점 (포수 전용 필드)
  run?: number; // 득점 (포수 전용 필드)
  sb?: number; // 도루 (포수 전용 필드)
  gd?: number; // 더블플레이 (포수 전용 필드)
  h2?: number; // 2루타 (포수 전용 필드)
  h3?: number; // 3루타 (포수 전용 필드)
  hra?: string; // 홈런 비율 (포수 전용 필드)
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
  bf: number;
  bk: number;
  bs: number;
  er: number;
  era: string;
  err: number;
  fip: string;
  fo: number;
  gamenum: number;
  go: number;
  gyear: string;
  havg: string;
  hit: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn2: number;
  innDisplay: string;
  kbb: string;
  kk: number;
  l: number;
  oavg: string;
  pcode: string;
  playerName: string;
  qs: number;
  qsPlus: number;
  r: number;
  ravg: string;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  sv: number;
  svo: number;
  tugucount: number;
  turfSave: number;
  w: number;
  wCg: number;
  war: string;
  whip: string;
  winShares: string;
  wl: string;
  wp: number;
  wra: string;
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

export interface Catcher extends Player {
  recentgamerecordlist: GameRecord[];
  recentgamerecordlistfutures: GameRecord[];
  seasonsummary: SeasonSummaryBase;
  seasonsummaryfutures: SeasonSummaryBase;
}

export type RecentRecord = GameRecord;
export type YearRecord = SeasonSummaryBase;
