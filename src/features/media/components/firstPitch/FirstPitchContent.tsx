import ListArticle from '@/features/media/common/ListArticle';
import PaginationWithThemeRed from '@/features/media/common/PaginationWithThemeRed';
import { usePagination } from '@/features/media/hooks/usePagination';
import { newsItems as firstPitchItems } from '@/features/media/mock_data';

const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 (임시)
const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const FirstPitchContent = () => {
  // API 연동

  const { currentPage, setCurrentPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <>
      {/* 시구자 정보 컨텐츠 */}
      {firstPitchItems.map(
        ({ id, thumbnail, title, description, date, views }) => (
          <ListArticle key={id} link={`/media/firstpitch/${id}`}>
            <ListArticle.Thumbnail thumbnail={thumbnail} title={title} />
            <ListArticle.Content>
              <ListArticle.Title title={title} />
              <ListArticle.Description description={description} />
              <ListArticle.Footer date={date} views={views} />
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

export default FirstPitchContent;
