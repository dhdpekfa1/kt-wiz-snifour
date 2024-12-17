import { GridViewType, HighlightItem } from '@/features/media/types';

// GridViewType으로 변환하는 팩토리 함수
const createGridViewItem = (item: HighlightItem): GridViewType => ({
  artcSeq: item.artcSeq,
  refSeq: item.refSeq,
  nextSeq: item.artcNextSeq,
  prevSeq: item.artcPrevSeq,
  boardSeq: item.boardCatSeq,
  boardCode: item.boardCode,
  title: item.artcTitle,
  imgFilePath: item.imgFilePath,
  maxArticlePerPage: item.maxArticlePerPage,
  totalPage: item.totalPage,
  viewCount: item.viewCnt,
  contentsDate: item.contentsDate,
  videoLink: item.videoLink,
  createdAt: item.regDttm,
  updatedAt: item.updDttm,
});

export { createGridViewItem };
