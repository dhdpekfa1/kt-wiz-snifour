import ListArticle from '@/features/media/common/ListArticle';
import PlayButton from '@/features/media/common/PlayButton';
import { storyItems as highlightItems } from '@/features/media/mock_data';
import { cn } from '@/lib/utils';

const HighlightContent = () => {
  // API CALL

  return (
    <div className={cn('media-list-grid')}>
      {highlightItems.map(({ id, thumbnail, title, date }) => (
        <ListArticle key={id} link="/media/highlight">
          <ListArticle.Media>
            <ListArticle.Video src="" />
            <ListArticle.Thumbnail thumbnail={thumbnail} title={title} />
            <ListArticle.Overlay elements={<PlayButton />} />
          </ListArticle.Media>
          <ListArticle.Title title={title} />
          <ListArticle.Footer date={date} />
        </ListArticle>
      ))}
    </div>
  );
};

export default HighlightContent;
