type ListViewType = {
  artcSeq: number; // 기사 고유 번호
  nextSeq: number; // 다음 기사 순번 (현재는 0으로 설정)
  prevSeq: number; // 이전 기사 순번 (현재는 0으로 설정)
  boardSeq: number; // 게시판 카테고리 순번 (현재는 0으로 설정)
  boardCode: string; // 게시판 코드
  title: string; // 기사 제목
  content: string; // 기사 내용 (HTML 형식)
  imgFilePath?: string; // 이미지 파일 경로
  maxArticlePerPage: number; // 페이지당 최대 기사 수
  totalPage: number; // 전체 페이지 수
  viewCount: number; // 조회 수
  createdAt: number; // 등록 일시 (UNIX 타임스탬프)
  updatedAt: number; // 수정 일시 (UNIX 타임스탬프)
};

type ListDataType = {
  list: ListViewType[];
  searchCount?: number;
};

export type { ListDataType, ListViewType };
