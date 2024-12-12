import { DEFAULT_IMAGE } from '@/constants/default-image';
import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import { ListViewType } from '@/features/media/types';
import { format } from 'date-fns';

type ListArticleProps = Omit<ListViewType, 'artcSeq'> & {
  link: string;
};

// Root 컴포넌트
const ListArticle = ({
  link,
  children,
  className,
}: Pick<ListArticleProps, 'link'> & {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <article
      className={cn(
        'border-b border-[#6B7280] border-opacity-20 last:border-b-0 py-6 first:pt-0 last:pb-0 hover:border-wiz-red transition-colors duration-300',
        className
      )}
    >
      <Link to={link} className={cn('group')}>
        <div className={cn('flex flex-col md:flex-row gap-6')}>{children}</div>
      </Link>
    </article>
  );
};

// Thumbnail Container 컴포넌트
const ListArticleThumbnail = ({
  imgFilePath,
  title,
  className,
}: { imgFilePath?: string; title: string; className?: string }) => {
  return (
    <div
      className={cn(
        'w-full shrink-0 overflow-hidden rounded-lg',
        'md:w-[280px]',
        'relative aspect-[16/9]',
        className
      )}
    >
      <img
        src={imgFilePath || DEFAULT_IMAGE}
        alt={title}
        loading="lazy"
        decoding="async"
        className={cn(
          'absolute inset-0 w-full h-full object-cover',
          'thumbnail-animation'
        )}
      />
    </div>
  );
};

// Content Container 컴포넌트
const ListArticleContent = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('flex-1 flex flex-col max-w-3xl py-3', className)}>
      {children}
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

// Description 컴포넌트
const ListArticleDescription = ({
  content,
  className,
}: { content: string; className?: string }) => {
  const textContent =
    new DOMParser()
      .parseFromString(content, 'text/html')
      .body.textContent?.trim() || 'Content';

  return (
    <p
      className={cn('text-[#6B7280] text-base mb-auto line-clamp-2', className)}
    >
      {textContent || 'Content'}
    </p>
  );
};

// Footer 컴포넌트
const ListArticleFooter = ({
  createdAt,
  viewCount,
  className,
}: { createdAt: number; viewCount: number; className?: string }) => {
  return (
    <div className={cn('media-article-footer', className)}>
      <time dateTime={new Date(createdAt).toISOString()}>
        {format(new Date(createdAt), 'yyyy년 M월 d일')}
      </time>
      <div className={cn('media-article-views')}>
        <EyeIcon className="w-4 h-4" />
        <span>{viewCount.toLocaleString()}</span>
      </div>
    </div>
  );
};

ListArticle.Thumbnail = ListArticleThumbnail;
ListArticle.Content = ListArticleContent;
ListArticle.Title = ListArticleTitle;
ListArticle.Description = ListArticleDescription;
ListArticle.Footer = ListArticleFooter;

export default ListArticle;
