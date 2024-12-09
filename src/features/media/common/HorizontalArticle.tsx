import { DEFAULT_IMAGE } from '@/constants/default-image';
import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import { HorizontalType } from '../mock_data';

type HorizontalArticleProps = Omit<HorizontalType, 'id'> & {
  link: string;
};

// Root 컴포넌트
const HorizontalArticle = ({
  link,
  children,
  className,
}: Pick<HorizontalArticleProps, 'link'> & {
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
const HorizontalArticleThumbnail = ({
  thumbnail,
  title,
  className,
}: { thumbnail?: string; title: string; className?: string }) => {
  return (
    <div
      className={cn(
        'w-full shrink-0 overflow-hidden rounded-lg',
        'md:w-[280px]',
        className
      )}
    >
      <img
        src={thumbnail || DEFAULT_IMAGE}
        alt={title}
        className={cn(
          'w-full aspect-[16/9] object-cover transform',
          'thumbnail-animation'
        )}
      />
    </div>
  );
};

// Content Container 컴포넌트
const HorizontalArticleContent = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('flex-1 flex flex-col max-w-2xl', className)}>
      {children}
    </div>
  );
};

// Title 컴포넌트
const HorizontalArticleTitle = ({
  title,
  className,
}: { title: string; className?: string }) => {
  return <h3 className={cn('media-article-title', className)}>{title}</h3>;
};

// Description 컴포넌트
const HorizontalArticleDescription = ({
  description,
  className,
}: { description: string; className?: string }) => {
  return (
    <p className={cn('text-gray-400 text-sm mb-auto line-clamp-2', className)}>
      {description}
    </p>
  );
};

// Footer 컴포넌트
const HorizontalArticleFooter = ({
  date,
  views,
  className,
}: { date: string; views: number; className?: string }) => {
  return (
    <div className={cn('media-article-footer', className)}>
      <span>{date}</span>
      <div className={cn('media-article-views')}>
        <EyeIcon className="w-4 h-4" />
        <span>{views.toLocaleString()}</span>
      </div>
    </div>
  );
};

HorizontalArticle.Thumbnail = HorizontalArticleThumbnail;
HorizontalArticle.Content = HorizontalArticleContent;
HorizontalArticle.Title = HorizontalArticleTitle;
HorizontalArticle.Description = HorizontalArticleDescription;
HorizontalArticle.Footer = HorizontalArticleFooter;

export default HorizontalArticle;
