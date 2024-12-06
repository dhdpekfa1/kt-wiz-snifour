import { DEFAULT_IMAGE } from '@/constants/default-image';
import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import { StoryType } from '../mock_data';

type ListArticleProps = Omit<StoryType, 'id'> & {
  link: string;
};

const ListArticle = ({
  link,
  children,
  className,
}: Pick<ListArticleProps, 'link'> & {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link to={link}>
      <article className={cn('group', className)}>{children}</article>
    </Link>
  );
};

// Media Container 컴포넌트
const ListArticleMedia = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
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
    />
  );
};

// Video 컴포넌트
const ListArticleVideo = ({
  src = '',
  className,
}: { src: string; className?: string }) => {
  return (
    <video
      src={src}
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
  views,
  className,
}: { date: string; views?: number; className?: string }) => {
  return (
    <div className={cn('media-article-footer', className)}>
      <span>{date}</span>
      <div className={cn('media-article-views')}>
        <EyeIcon className="w-4 h-4" />
        <span>{views?.toLocaleString() || 0}</span>
      </div>
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
