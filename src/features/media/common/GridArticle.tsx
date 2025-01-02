import { DEFAULT_IMAGE } from '@/constants/default-image';
import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';

const GridArticle = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };
  return (
    <article
      className={cn('group', className)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </article>
  );
};

// Media Container 컴포넌트
const GridArticleMedia = ({
  children,
  className,
}: {
  children: React.ReactNode;

  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative aspect-video overflow-hidden rounded-lg mb-4',
        className
      )}
    >
      {children}
    </div>
  );
};

// Thumbnail 컴포넌트
const GridArticleThumbnail = ({
  imgFilePath,
  title,
  className,
}: {
  imgFilePath?: string;
  title: string;
  className?: string;
}) => {
  return (
    <img
      src={imgFilePath || DEFAULT_IMAGE}
      alt={title}
      className={cn(
        'w-full h-full object-cover transform',
        'thumbnail-animation',
        className
      )}
      loading="lazy"
      decoding="async"
    />
  );
};

// Video 컴포넌트
const GridArticleVideo = ({
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
      className={cn('w-full h-full object-cover', className)}
      autoPlay
    >
      <track kind="captions" srcLang="ko" label="한국어" default />
    </video>
  );
};

// Video Overlay 컴포넌트
const GridArticleOverlay = ({ elements }: { elements?: React.ReactNode }) => {
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
const GridArticleTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <h3 className={cn('media-article-title', className)}>{title}</h3>;
};

// Footer 컴포넌트
const GridArticleFooter = ({
  date,
  viewCount,
  className,
}: {
  date: string;
  viewCount?: number;
  className?: string;
}) => {
  return (
    <div className={cn('media-article-footer mt-2', className)}>
      <time>{date}</time>
      {viewCount && (
        <div className={cn('media-article-views')}>
          <EyeIcon className="w-4 h-4" />
          <span>{viewCount}</span>
        </div>
      )}
    </div>
  );
};

GridArticle.Media = GridArticleMedia;
GridArticle.Thumbnail = GridArticleThumbnail;
GridArticle.Video = GridArticleVideo;
GridArticle.Overlay = GridArticleOverlay;
GridArticle.Title = GridArticleTitle;
GridArticle.Footer = GridArticleFooter;

export default GridArticle;
