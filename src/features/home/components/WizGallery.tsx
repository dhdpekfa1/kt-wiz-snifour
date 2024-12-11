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
  CarouselItem,
} from '@/components/ui';
import { Photo } from '../types';

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
        <CardTitle className="text-wiz-white">wiz Gallery</CardTitle>
        <CardDescription className="text-gray-400">
          좌우 스크롤을 통해 사진을 볼 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-4 px-0">
        <Carousel className="w-full">
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem className="basis-1/3">
                <div className="h-[36rem] rounded-xl overflow-hidden relative">
                  <img
                    src={photo.imgFilePath}
                    alt={photo.artcTitle}
                    className="w-auto h-full object-cover object-center"
                  />
                  <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-end">
                    <h3 className="w-full text-center text-white font-bold text-2xl z-10 pb-12 bg-gradient-to-t from-black to-transparent">
                      {photo.artcTitle}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
      <CardFooter>
        <Link
          to="/media/photos/1"
          className="border-2 px-4 py-2 rounded bg-white"
        >
          더 많은 사진보기
        </Link>
      </CardFooter>
    </Card>
  );
}

export { WizGallery };
