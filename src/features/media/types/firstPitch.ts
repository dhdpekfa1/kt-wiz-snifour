type FirstPitchItem = {
  artcContents: string;
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcTitle: string;
  boardCatSeq: number;
  boardCode: string;
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

type FirstPitchListDto = {
  searchWord?: string;
  itemCount?: number;
  pageNum?: number;
};

type FirstPitchResponse = {
  data: {
    list: FirstPitchItem[];
  };
};

type FirstPitchDetailDto = {
  artcSeq: string;
};

type FirstPitchDetailResponse = {
  data: {
    article: FirstPitchItem;
  };
};

export {
  type FirstPitchItem,
  type FirstPitchListDto,
  type FirstPitchResponse,
  type FirstPitchDetailDto,
  type FirstPitchDetailResponse,
};
