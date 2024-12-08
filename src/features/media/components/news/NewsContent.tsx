import HorizontalArticle from '@/features/media/common/HorizontalArticle';
import PaginationWithThemeRed from '@/features/media/common/PaginationWithThemeRed';
import { usePagination } from '@/features/media/hooks/usePagination';
import { newsItems } from '@/features/media/mock_data';

const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 (임시)
const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const NewsContent = () => {
  // API 연동

  const { currentPage, setCurrentPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <>
      {/* 뉴스 컨텐츠 */}
      {newsItems.map(({ id, thumbnail, title, description, date, views }) => (
        <HorizontalArticle key={id} link={`/media/wiznews/${id}`}>
          <HorizontalArticle.Thumbnail thumbnail={thumbnail} title={title} />
          <HorizontalArticle.Content>
            <HorizontalArticle.Title title={title} />
            <HorizontalArticle.Description description={description} />
            <HorizontalArticle.Footer date={date} views={views} />
          </HorizontalArticle.Content>
        </HorizontalArticle>
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
