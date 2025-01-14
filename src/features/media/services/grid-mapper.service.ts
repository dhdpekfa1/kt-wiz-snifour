import { GridViewType, HighlightListItem } from '@/features/media/types';
import { PhotoItem } from '@/features/media/types/photo';
import { StoryItem } from '@/features/media/types/story';
import { format } from 'date-fns';

// GridViewType으로 변환하는 팩토리 함수
const createGridViewItem = (
  item: HighlightListItem | StoryItem | PhotoItem
): GridViewType => ({
  artcSeq: item.artcSeq,
  refSeq: 'refSeq' in item ? item.refSeq : 0,
  nextSeq: item.artcNextSeq,
  prevSeq: item.artcPrevSeq,
  boardSeq: item.boardCatSeq,
  boardCode: item.boardCode,
  title: item.artcTitle,
  subTitle: 'artcSubTitle' in item ? item.artcSubTitle : '',
  imgFilePath: item.imgFilePath,
  maxArticlePerPage: item.maxArticlePerPage,
  totalPage: item.totalPage,
  viewCount: item.viewCnt,
  contentsDate:
    'contentsDate' in item
      ? item.contentsDate
      : format(new Date(item.regDttm), 'yyyy-MM-dd'),
  videoLink: 'videoLink' in item ? item.videoLink : '',
  createdAt: item.regDttm,
  updatedAt: item.updDttm,
});

export { createGridViewItem };
