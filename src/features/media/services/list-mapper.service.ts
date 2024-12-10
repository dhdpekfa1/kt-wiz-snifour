import { ListViewType, NewsItem } from '@/features/media/types';

// ListViewType으로 변환하는 팩토리 함수
const createListViewItem = (item: NewsItem): ListViewType => ({
  artcSeq: item.artcSeq,
  nextSeq: item.artcNextSeq,
  prevSeq: item.artcPrevSeq,
  boardSeq: item.boardCatSeq,
  boardCode: item.boardCode,
  title: item.artcTitle,
  contents: item.artcContents,
  imgFilePath: item.imgFilePath,
  maxArticlePerPage: item.maxArticlePerPage,
  totalPage: item.totalPage,
  viewCount: item.viewCnt,
});

export { createListViewItem };
