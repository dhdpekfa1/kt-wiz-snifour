import { photoItems } from '../../mock_data';

import ListArticle from '@/features/media/common/ListArticle';
import { cn } from '@/lib/utils';

const PhotoContent = () => {
  return (
    <div className={cn('media-list-grid')}>
      {photoItems.map(({ id, thumbnail, title, date, catetory }) => (
        <ListArticle key={id} link={`/media/photos/${id}`}>
          <ListArticle.Media>
            <ListArticle.Thumbnail thumbnail={thumbnail} title={title} />
            <ListArticle.Overlay
              elements={
                <span
                  className={cn('text-xs px-3 py-1.5 bg-wiz-red/80 rounded-md')}
                >
                  {catetory}
                </span>
              }
            />
          </ListArticle.Media>
          <ListArticle.Title title={title} />
          <ListArticle.Footer date={date} />
        </ListArticle>
      ))}
    </div>
  );
};

export default PhotoContent;
