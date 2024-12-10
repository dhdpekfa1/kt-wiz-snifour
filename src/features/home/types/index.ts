export interface MatchInfoType {
  broadcast: string;
  displayDate: string;
  gameDate: number;
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

export interface TeamRank {
  game: number;
  gyear: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  wldName: string;
  wra: string;
}
