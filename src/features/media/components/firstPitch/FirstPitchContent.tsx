import ListArticle from '@/features/media/common/ListArticle';
import PaginationList from '@/features/media/common/PaginationList';
import { usePagination } from '@/features/media/hooks/usePagination';
import { newsItems as firstPitchItems } from '@/features/media/mock_data';

const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const FirstPitchContent = () => {
  // API 연동

  const { pageNum, itemCount } = usePagination();

  return (
    <>
      {/* 시구자 정보 컨텐츠 */}
      {firstPitchItems.map(({ id, thumbnail, title, description, views }) => (
        <ListArticle key={id} link={`/media/firstpitch/${id}`}>
          <ListArticle.Thumbnail imgFilePath={thumbnail} title={title} />
          <ListArticle.Content>
            <ListArticle.Title title={title} />
            <ListArticle.Description content={description} />
            <ListArticle.Footer createdAt={1733014800000} viewCount={views} />
          </ListArticle.Content>
        </ListArticle>
      ))}

      {/* 페이지네이션 */}
      <PaginationList
        currentPage={pageNum}
        total={totalItems}
        limit={itemCount}
        onChange={() => {}}
        className="mt-14"
      />
    </>
  );
};

export default FirstPitchContent;
