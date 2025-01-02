type PhotoItem = {
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
};

type PhotoListDto = {
  type: 'GAME' | 'TRAINING' | 'EVENT';
  searchWord?: string;
  itemCount?: number;
  startDate?: string;
  endDate?: string;
  pageNum?: number;
};

type PhotoResponse = {
  data: {
    list: PhotoItem[];
  };
};

export { type PhotoItem, type PhotoListDto, type PhotoResponse };
