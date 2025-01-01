import { Button } from '@/components/ui';
import { format } from 'date-fns';
import { ArrowLeftIcon, ArrowRightIcon, EyeIcon } from 'lucide-react';
import { Link } from 'react-router';

// Types
type MediaDetailHeaderProps = {
  title: string;
  createdAt: number;
  views?: number;
};

type MediaDetailBodyProps = {
  imgFilePath?: string;
  title: string;
  content: string;
  tags?: string[];
};

type NavigationConfig = {
  prevLink?: string;
  nextLink?: string;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  listButton: {
    onClick: () => void;
    text: React.ReactNode;
  };
  validateLink?: (link: string | undefined) => boolean;
};

// Container Component
const MediaDetailContainer = ({
  children,
  className = '',
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`w-full mx-auto min-h-[1100px] px-4 sm:px-6 lg:px-8 py-8 ${className}`}
  >
    {children || null}
  </div>
);

// Header Component
const Header = ({ title, createdAt, views }: MediaDetailHeaderProps) => {
  return (
    <header className="mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <div className="flex items-center gap-4 text-sm text-[#9ca3af]">
        <time dateTime={new Date(createdAt).toISOString()}>
          {format(new Date(createdAt), 'yyyy년 M월 d일')}
        </time>
        <div className="flex items-center gap-1">
          <EyeIcon className="w-4 h-4" />
          <span>{views?.toLocaleString() || 0}</span>
        </div>
      </div>
    </header>
  );
};

// Body Component
const Body = ({ title, imgFilePath, content, tags }: MediaDetailBodyProps) => {
  const textContent =
    new DOMParser()
      .parseFromString(content, 'text/html')
      .body.textContent?.trim() || 'Content';

  return (
    <article className="prose prose-invert max-w-none">
      {imgFilePath && (
        <img
          src={imgFilePath}
          alt={title}
          className="w-full aspect-video object-cover rounded-lg mb-8"
        />
      )}
      <div className="text-[#9ca3af] space-y-6">
        <p className="text-lg leading-relaxed">{textContent}</p>
      </div>
      {tags && (
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-wiz-red/80 text-wiz-white rounded-full text-sm font-light"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

// Navigation Components
const NavigationButton = ({
  direction,
  disabled,
}: {
  direction: 'prev' | 'next';
  disabled: boolean;
}) => {
  const commonClasses = `
    group flex items-start gap-2 px-3 py-2 rounded-md transition-colors
    ${
      disabled
        ? 'opacity-50 cursor-not-allowed bg-gray-800/50'
        : 'hover:bg-wiz-red cursor-pointer'
    }
    ${direction === 'next' ? 'md:justify-end' : ''}
  `;

  const content =
    direction === 'prev' ? (
      <>
        <ArrowLeftIcon
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-gray-400 shrink-0 mt-1"
        />
        <div>
          <span className="text-sm text-white/50 font-light">이전 글</span>
        </div>
      </>
    ) : (
      <>
        <div className="text-right">
          <span className="text-sm text-white/50 font-light">다음 글</span>
        </div>
        <ArrowRightIcon className="w-5 h-5 text-[#9ca3af] shrink-0 mt-1" />
      </>
    );

  return (
    <button type="button" className={commonClasses}>
      {content}
    </button>
  );
};

const NavigationLink = ({
  to,
  direction,
  onMouseEnter,
}: {
  to: string;
  direction: 'prev' | 'next';
  onMouseEnter?: () => void;
}) => {
  const commonClasses = `
    group flex items-start gap-2 px-3 py-2 rounded-lg hover:bg-wiz-red transition-colors
    ${direction === 'next' ? 'md:justify-end' : ''}
  `;

  const content =
    direction === 'prev' ? (
      <>
        <ArrowLeftIcon className="w-5 h-5 text-gray-400 group-hover:text-white shrink-0 mt-1" />
        <div>
          <span className="text-sm font-light text-white/50 group-hover:text-white transition-colors">
            이전 글
          </span>
        </div>
      </>
    ) : (
      <>
        <div className="text-right">
          <span className="text-sm text-white/50 group-hover:text-white transition-colors">
            다음 글
          </span>
        </div>
        <ArrowRightIcon className="w-5 h-5 text-[#9ca3af] group-hover:text-white shrink-0 mt-1" />
      </>
    );

  return (
    <Link
      to={to}
      className={commonClasses}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={onMouseEnter}
    >
      {content}
    </Link>
  );
};

const Navigation = ({
  config,
  className = '',
}: {
  config: NavigationConfig;
  className?: string;
}) => {
  const {
    prevLink,
    nextLink,
    onPrevClick,
    onNextClick,
    listButton,
    validateLink = (link: string | undefined): boolean => {
      if (!link) return false;
      return link.trim() !== '' && !link.includes('undefined');
    },
  } = config;

  const showPrev = prevLink && validateLink(prevLink);
  const showNext = nextLink && validateLink(nextLink);

  if (!showPrev && !showNext) return null;

  return (
    <div className={`mt-16 border-t border-[#6b728033]/20 pt-8 ${className}`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {prevLink &&
            (showPrev ? (
              <NavigationLink
                to={prevLink}
                direction="prev"
                onMouseEnter={onPrevClick}
              />
            ) : (
              <NavigationButton direction="prev" disabled={true} />
            ))}
          {nextLink &&
            (showNext ? (
              <NavigationLink
                to={nextLink}
                direction="next"
                onMouseEnter={onNextClick}
              />
            ) : (
              <NavigationButton direction="next" disabled={true} />
            ))}
        </div>
        <Button
          onClick={() => {
            listButton.onClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-[#9ca3af] hover:text-white hover:bg-wiz-red font-light"
        >
          {listButton.text}
        </Button>
      </div>
    </div>
  );
};

export const MediaDetail = {
  Container: MediaDetailContainer,
  Header,
  Body,
  Navigation,
};
