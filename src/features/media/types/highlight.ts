type HighlightListItem = {
  artcNextSeq: number; // 다음 기사 순번 (현재는 0으로 설정)
  artcPrevSeq: number; // 이전 기사 순번 (현재는 0으로 설정)
  artcSeq: number; // 기사 고유 번호
  artcTitle: string; // 기사 제목
  boardCatSeq: number; // 게시판 카테고리 순번 (현재는 0으로 설정)
  boardCode: string; // 게시판 코드
  contentsDate: string; // 기사 작성일
  delYn: string; // 삭제 여부 (N: 삭제 안됨, Y: 삭제됨)
  imgFilePath: string; // 이미지 파일 경로
  maxArticlePerPage: number; // 페이지당 최대 기사 수
  refSeq: number; // 참조 순번
  regDttm: number; // 등록 일시 (UNIX 타임스탬프)
  regr: string; // 등록자 ID
  totalPage: number; // 전체 페이지 수
  updDttm: number; // 수정 일시 (UNIX 타임스탬프)
  updr: string; // 수정자 ID
  useYn: string; // 사용 여부 (Y: 사용, N: 사용 안됨)
  viewCnt: number; // 조회 수
  videoLink: string; // 영상 링크
};

type HighlightItem = {
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
  updDttm: number;
  updr: string;
  useYn: string;
  videoLink: string;
  viewCnt: number;
};

type HighlightResponse = {
  data: {
    list: HighlightListItem[];
  };
};

type HighlightDetailResponse = {
  data: {
    article: HighlightItem;
  };
};

type HighlightListDto = {
  searchWord: string;
  itemCount: number;
  pageNum?: number;
};

type HighlightDetailDto = {
  artcSeq: string;
};

export {
  type HighlightListItem,
  type HighlightItem,
  type HighlightResponse,
  type HighlightListDto,
  type HighlightDetailDto,
  type HighlightDetailResponse,
};
