import { DEFAULT_IMAGE } from '@/constants/default-image';
import { cn } from '@/lib/utils';

const ListArticle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <article className={cn('group', className)}>{children}</article>;
};

// Media Container 컴포넌트
const ListArticleMedia = ({
  children,
  onClick,
  className,
}: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={cn(
        'relative aspect-video overflow-hidden rounded-lg mb-4',
        className
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

// Thumbnail 컴포넌트
const ListArticleThumbnail = ({
  thumbnail,
  title,
  className,
}: { thumbnail?: string; title: string; className?: string }) => {
  return (
    <img
      src={thumbnail || DEFAULT_IMAGE}
      alt={title}
      className={cn(
        'w-full h-full object-cover transform',
        'thumbnail-animation',
        className
      )}
      loading="lazy"
    />
  );
};

// Video 컴포넌트
const ListArticleVideo = ({
  src = '',
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) => {
  return (
    <video
      src={src}
      poster={poster}
      controls
      className={cn('absolute inset-0 w-full h-full object-cover', className)}
    >
      <track kind="captions" srcLang="ko" label="한국어" default />
    </video>
  );
};

// Video Overlay 컴포넌트
const ListArticleOverlay = ({ elements }: { elements?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-300'
      )}
    >
      <div className="absolute left-4 bottom-4">{elements}</div>
    </div>
  );
};

// Title 컴포넌트
const ListArticleTitle = ({
  title,
  className,
}: { title: string; className?: string }) => {
  return <h3 className={cn('media-article-title', className)}>{title}</h3>;
};

// Footer 컴포넌트
const ListArticleFooter = ({
  date,
  className,
}: { date: string; className?: string }) => {
  return (
    <div className={cn('media-article-footer', className)}>
      <span>{date}</span>
    </div>
  );
};

ListArticle.Media = ListArticleMedia;
ListArticle.Thumbnail = ListArticleThumbnail;
ListArticle.Video = ListArticleVideo;
ListArticle.Overlay = ListArticleOverlay;
ListArticle.Title = ListArticleTitle;
ListArticle.Footer = ListArticleFooter;

export default ListArticle;
