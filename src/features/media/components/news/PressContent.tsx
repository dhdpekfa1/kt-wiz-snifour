import HorizontalArticle from '@/features/media/common/HorizontalArticle';
import { newsItems2 } from '@/features/media/mock_data';

const PressContent = () => {
  // API 연동

  return (
    <>
      {newsItems2.map(({ id, title, description, date, views }) => (
        <HorizontalArticle key={id} link={`/media/wiznews/${id}`}>
          <HorizontalArticle.Content className="max-w-4xl">
            <HorizontalArticle.Title title={title} />
            <HorizontalArticle.Description description={description} />
            <HorizontalArticle.Footer
              date={date}
              views={views}
              className="mt-4"
            />
          </HorizontalArticle.Content>
        </HorizontalArticle>
      ))}
    </>
  );
};

export default PressContent;
