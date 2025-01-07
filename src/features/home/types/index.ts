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

export interface WizRank {
  game: number;
  gyear: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  wldName: string;
  wra: string;
}

export interface Video {
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcTitle: string;
  boardCatSeq: number;
  boardCode: string;
  contentsDate: string;
  delYn: string;
  imgFilePath: string;
  maxArticlePerPage: number;
  refSeq: number;
  regDttm: number;
  regr: string;
  totalPage: number;
  updDttm: number;
  updr: string;
  useYn: string;
  videoLink: string;
  viewCnt: number;
}

export interface Photo {
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcSubTitle: string;
  artcTitle: string;
  boardCatSeq: number;
  boardCode: string;
  contentsDate: string;
  delYn: string;
  endDttm: number;
  imgFilePath: string;
  maxArticlePerPage: number;
  regDttm: number;
  regr: string;
  startDttm: number;
  totalPage: number;
  updDttm: number;
  updr: string;
  useYn: string;
  viewCnt: number;
}

export interface WizRankResponse {
  data: {
    ktWizTeamRank: WizRank;
  };
}
