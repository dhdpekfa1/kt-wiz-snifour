import { CarouselItem } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Photo } from '../types';

const WizGalleryAnimationItem = ({
  photo,
  index,
}: {
  photo: Photo;
  index: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% 화면에 들어오면 트리거
    triggerOnce: true, // 한 번만 애니메이션 실행
  });

  return (
    <CarouselItem
      ref={ref}
      className={cn(
        'md:basis-1/2 lg:basis-1/3 transition-transform duration-500 ease-in-out',
        inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      )}
      style={{
        transitionDelay: `${index * 200}ms`, // 각 아이템의 지연 시간
      }}
    >
      <div className="h-[36rem] rounded-xl overflow-hidden relative">
        <img
          src={photo.imgFilePath}
          alt={photo.artcTitle}
          className="w-auto h-full object-cover object-center"
        />
        <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-end">
          <h3 className="w-full text-center text-white font-bold text-2xl z-10 pb-12 bg-gradient-to-t from-black to-transparent break-keep">
            {photo.artcTitle}
          </h3>
        </div>
      </div>
    </CarouselItem>
  );
};

export { WizGalleryAnimationItem };
