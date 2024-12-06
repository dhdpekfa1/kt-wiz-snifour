import HorizontalArticle from '@/features/media/common/HorizontalArticle';
import { newsItems as firstPitchItems } from '@/features/media/mock_data';

const FirstPitchContent = () => {
  // API 연동

  return (
    <>
      {firstPitchItems.map(
        ({ id, thumbnail, title, description, date, views }) => (
          <HorizontalArticle key={id} link={`/media/firstpitch/${id}`}>
            <HorizontalArticle.Thumbnail thumbnail={thumbnail} title={title} />
            <HorizontalArticle.Content>
              <HorizontalArticle.Title title={title} />
              <HorizontalArticle.Description description={description} />
              <HorizontalArticle.Footer date={date} views={views} />
            </HorizontalArticle.Content>
          </HorizontalArticle>
        )
      )}
    </>
  );
};

export default FirstPitchContent;
