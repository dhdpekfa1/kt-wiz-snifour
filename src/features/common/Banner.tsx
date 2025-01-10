import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type BannerDescriptionProps = {
  description: string;
};

export const BannerDescription = ({ description }: BannerDescriptionProps) => {
  return (
    <p
      className={cn(
        'text-gray-300 mt-1 text-xs break-keep',
        'md:mt-2 md:text-sm',
        'lg:mt-4 lg:text-base'
      )}
    >
      {description}
    </p>
  );
};

type BannerHeadingProps = {
  title: string;
  subtitle?: string;
};

export const BannerHeading = ({ title, subtitle }: BannerHeadingProps) => {
  return (
    <h2
      className={cn(
        'text-2xl font-bold text-white',
        'md:text-3xl',
        'lg:text-4xl'
      )}
    >
      {title}
      <br />
      <span className="text-wiz-red">{subtitle}</span>
    </h2>
  );
};

export const BannerImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'w-full h-20 object-cover absolute top-1/2 left-0 -translate-y-1/2',
        'md:block md:h-48',
        'lg:h-[300px]'
      )}
    />
  );
};

type BannerOverlayProps = {
  children: ReactNode;
};

export const BannerOverlay = ({ children }: BannerOverlayProps) => {
  return (
    <div
      className={
        'absolute inset-0 bg-gradient-to-r from-wiz-black/90 to-wiz-black/40'
      }
    >
      <div className={cn('h-full mx-auto flex flex-col justify-center')}>
        {children}
      </div>
    </div>
  );
};

const Banner = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn('relative h-36', 'md:h-52', 'lg:h-[300px]')}>
      {children}
    </div>
  );
};

Banner.Heading = BannerHeading;
Banner.Description = BannerDescription;
Banner.Image = BannerImage;
Banner.Overlay = BannerOverlay;

export default Banner;
