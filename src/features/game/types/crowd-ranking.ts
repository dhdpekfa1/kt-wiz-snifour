export interface CrowdRank {
  crowd: number;
  game: number;
  teamCode: string;
  teamName: string;
}

export interface CrowdRankingResponse {
  data: {
    list: CrowdRank[];
  };
}
