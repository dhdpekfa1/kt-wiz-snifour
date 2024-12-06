import HorizontalArticle from '@/features/media/common/HorizontalArticle';
import { newsItems } from '@/features/media/mock_data';

const NewsContent = () => {
  // API 연동

  return (
    <>
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
    </>
  );
};

export default NewsContent;
