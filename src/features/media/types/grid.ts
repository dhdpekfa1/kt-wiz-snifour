type GridViewType = {
  artcSeq: number; // 기사 고유 번호
  nextSeq: number; // 다음 기사 순번 (현재는 0으로 설정)
  prevSeq: number; // 이전 기사 순번 (현재는 0으로 설정)
  refSeq: number; // 참조 순번
  boardSeq: number; // 게시판 카테고리 순번 (현재는 0으로 설정)
  boardCode: string; // 게시판 코드
  title: string; // 기사 제목
  subTitle: string; // 부제목
  imgFilePath?: string; // 이미지 파일 경로
  maxArticlePerPage: number; // 페이지당 최대 기사 수
  totalPage: number; // 전체 페이지 수
  viewCount: number; // 조회 수
  contentsDate: string; // 기사 작성일
  videoLink: string; // 영상 링크
  createdAt: number; // 등록 일시 (UNIX 타임스탬프)
  updatedAt: number; // 수정 일시 (UNIX 타임스탬프)
};

type GridDataType = {
  list: GridViewType[];
};

export type { GridDataType, GridViewType };
