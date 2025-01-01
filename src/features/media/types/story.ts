type StoryItem = {
  artcContents: string;
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcTitle: string;
  boardCatSeq: number;
  boardCode: string;
  delYn: string;
  imgFilePath: string;
  maxArticlePerPage: number;
  regDttm: number;
  regr: string;
  totalPage: number;
  updDttm: number;
  updr: string;
  useYn: string;
  videoLink: string;
  viewCnt: number;
};

type StoryResponse = {
  data: {
    list: StoryItem[];
    searchCount: number;
  };
};

type StoryListDto = {
  searchWord?: string;
  itemCount?: number;
  pageNum?: number;
};

type StoryDetailDto = {
  artcSeq: string;
};

type StoryDetailResponse = {
  data: {
    article: StoryItem;
  };
};

export {
  type StoryItem,
  type StoryResponse,
  type StoryListDto,
  type StoryDetailDto,
  type StoryDetailResponse,
};
