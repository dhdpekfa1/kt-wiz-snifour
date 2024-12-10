import ListArticle from '@/features/media/common/ListArticle';
import PaginationWithThemeRed from '@/features/media/common/PaginationWithThemeRed';

import { newsItems } from '@/features/media/mock_data';
import { usePagination } from '@/features/media/hooks/usePagination';
import { useGetNewsList } from '@/features/media/apis/NewsApi.query';

const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 (임시)
const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const NewsContent = () => {
  const { currentPage, setCurrentPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  const { data, isLoading, error } = useGetNewsList({
    variables: {
      searchWord: '빅또리',
    },
  });

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <>
      {/* 뉴스 컨텐츠 */}
      {newsItems.map(({ id, thumbnail, title, description, date, views }) => (
        <ListArticle key={id} link={`/media/wiznews/${id}`}>
          <ListArticle.Thumbnail thumbnail={thumbnail} title={title} />
          <ListArticle.Content>
            <ListArticle.Title title={title} />
            <ListArticle.Description description={description} />
            <ListArticle.Footer date={date} views={views} className="mt-4" />
          </ListArticle.Content>
        </ListArticle>
      ))}

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
