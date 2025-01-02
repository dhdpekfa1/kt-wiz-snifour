import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { Photo } from '../types';
import { WizGalleryAnimationItem } from './WizGalleryAnimationItem';

function WizGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const getMainPhotos = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/media/photolist?count=10`
        );

        if (status === 200 && data) {
          setPhotos(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getMainPhotos();
  }, []);

  if (photos.length === 0) {
    return null;
  }

  return (
    <Card className="w-full border-none shadow-none flex flex-col items-center pb-8">
      <CardHeader className="w-full px-0">
        <CardTitle className={cn('text-wiz-white text-lg', 'lg:text-2xl')}>
          wiz Gallery
        </CardTitle>
        <CardDescription className="text-gray-400">
          좌우 스크롤을 통해 사진을 볼 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-4 px-0">
        <Carousel className="w-full">
          <CarouselContent>
            {photos.map((photo, index) => (
              <WizGalleryAnimationItem
                key={photo.artcSeq}
                photo={photo}
                index={index}
              />
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
      <CardFooter>
        <Link
          to="/media/photos/1"
          className={cn(
            'rounded bg-white bg-opacity-10 text-white hover:bg-opacity-100 hover:text-black text-xs px-2 py-1 transition-colors duration-300',
            'lg:text-base lg:px-4 lg:py-2'
          )}
        >
          더 많은 사진보기
        </Link>
      </CardFooter>
    </Card>
  );
}

export { WizGallery };
