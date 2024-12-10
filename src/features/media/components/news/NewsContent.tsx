import ListArticle from '@/features/media/common/ListArticle';
import PaginationWithThemeRed from '@/features/media/common/PaginationWithThemeRed';

import { usePagination } from '@/features/media/hooks/usePagination';
import { useGetNewsList } from '@/features/media/apis/NewsApi.query';
import {
  ListArticleSkeleton,
  SKELETON_IDS,
} from '@/features/media/common/skeleton';
import { PageRoutes } from '@/constants/route';
import { toUrl } from '@/lib';

const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 (임시)
const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const NewsContent = () => {
  const { currentPage, setCurrentPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  const { data, isLoading } = useGetNewsList({
    variables: {
      searchWord: '빅또리',
      pageNum: '1',
      itemCount: '10',
    },
  });

  if (isLoading) {
    return (
      <>
        {SKELETON_IDS.map((id) => (
          <ListArticleSkeleton key={id} />
        ))}
      </>
    );
  }

  return (
    <>
      {/* 뉴스 컨텐츠 */}
      {data?.list.map(
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

      {/* 페이지네이션 */}
      <PaginationWithThemeRed
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        className="mt-14"
      />
    </>
  );
};

export default NewsContent;
