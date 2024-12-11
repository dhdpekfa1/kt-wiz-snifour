import { toUrl } from '@/lib';
import { PageRoutes } from '@/constants/route';
import { ListViewType } from '@/features/media/types';
import ListArticle from '@/features/media/common/ListArticle';

import {
  ListArticleSkeleton,
  SKELETON_IDS,
} from '@/features/media/common/skeleton';

type NewsListProps = {
  news: ListViewType[];
  isLoading?: boolean;
};

const NewsList = ({ news, isLoading }: NewsListProps) => {
  if (isLoading) {
    return (
      <div className="min-height">
        {SKELETON_IDS.map((id) => (
          <ListArticleSkeleton key={id} />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* 뉴스 컨텐츠 */}
      {news.map(
        ({ artcSeq, imgFilePath, title, content, createdAt, viewCount }) => (
          <ListArticle
            key={artcSeq}
            link={toUrl(PageRoutes.NewsDetail, { artcSeq: artcSeq.toString() })}
          >
            <ListArticle.Thumbnail imgFilePath={imgFilePath} title={title} />
            <ListArticle.Content>
              <ListArticle.Title title={title} />
              <ListArticle.Description content={content} />
              <ListArticle.Footer
                createdAt={createdAt}
                viewCount={viewCount}
                className="mt-4"
              />
            </ListArticle.Content>
          </ListArticle>
        )
      )}
    </>
  );
};

export default NewsList;
