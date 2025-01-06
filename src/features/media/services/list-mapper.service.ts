import { ListViewType, NewsItem } from '@/features/media/types';
import { FirstPitchItem } from '../types/firstPitch';

// ListViewType으로 변환하는 팩토리 함수
const createListViewItem = (item: NewsItem | FirstPitchItem): ListViewType => ({
  artcSeq: item.artcSeq,
  nextSeq: item.artcNextSeq,
  prevSeq: item.artcPrevSeq,
  boardSeq: item.boardCatSeq,
  boardCode: item.boardCode,
  title: item.artcTitle,
  content: item.artcContents,
  imgFilePath: item.imgFilePath,
  maxArticlePerPage: item.maxArticlePerPage,
  totalPage: item.totalPage,
  viewCount: item.viewCnt,
  createdAt: item.regDttm,
  updatedAt: item.updDttm,
});

export { createListViewItem };
