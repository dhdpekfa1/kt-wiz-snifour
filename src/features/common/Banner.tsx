import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type BannerDescriptionProps = {
  description: string;
};

export const BannerDescription = ({ description }: BannerDescriptionProps) => {
  return <p className={cn('text-gray-300 max-w-xl')}>{description}</p>;
};

type BannerHeadingProps = {
  title: string;
  subtitle: string;
};

export const BannerHeading = ({ title, subtitle }: BannerHeadingProps) => {
  return (
    <h2 className={cn('text-4xl font-bold text-white mb-4')}>
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
      className={cn('hidden w-full h-[300px] object-cover', 'md:block')}
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
  return <div className="relative h-[300px]">{children}</div>;
};

Banner.Heading = BannerHeading;
Banner.Description = BannerDescription;
Banner.Image = BannerImage;
Banner.Overlay = BannerOverlay;

export default Banner;
