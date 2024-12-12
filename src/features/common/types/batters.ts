// 공통으로 사용되는 타자 스탯
export interface CommonBatterStats {
  ab: number;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cs: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kk: number;
  ops: string;
  pa: number;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slg: string;
  teamName: string;
}

// 팀 단위의 타자 순위 스탯 - 팀 순위 페이지에서 사용
export interface TeamBatterRank extends CommonBatterStats {
  der: string;
  err: number;
  gd: number;
  slab: number;
  teamCode: string;
}

// 타자 타율 순위 스탯
export interface BatterHra extends CommonBatterStats {
  babip: string;
  cba: string;
  cgopo: string;
  fl: number;
  gamenum: number;
  gd: number;
  gofo: string;
  gr: number;
  h1: number;
  lba: string;
  lgopo: string;
  nppa: number;
  opsPlus: string;
  paFlag: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  rba: string;
  rgopo: string;
  spHra: string;
  startCn: number;
  subCn: number;
  wrHit: string;
}

// 홈런 수와 관련된 순위 스탯
export interface BatterHR extends BatterHra {}

// 전체 타자 순위 스탯
export interface OverallBatterRank extends BatterHra {}
