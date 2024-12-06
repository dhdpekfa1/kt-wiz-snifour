import ListArticle from '@/features/media/common/ListArticle';
import PlayButton from '@/features/media/common/PlayButton';
import { storyItems } from '@/features/media/mock_data';
import { cn } from '@/lib/utils';

const StoryContent = () => {
  return (
    <div className={cn('media-list-grid')}>
      {storyItems.map(({ id, thumbnail, title, date }) => (
        <ListArticle key={id} link={`/media/wizstory/${id}`}>
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

export default StoryContent;
