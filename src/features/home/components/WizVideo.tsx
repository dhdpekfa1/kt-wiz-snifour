import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { Video } from '../types';
import { cn } from '@/lib/utils';

function WizVideo() {
  const [videos, setVideos] = useState<Video[]>([]);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const getMainHightVideos = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/media/highlightlist?count=5`
        );

        if (status === 200 && data) {
          setVideos(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getMainHightVideos();
  }, []);

  if (videos.length === 0) {
    return null;
  }

  return (
    <Card className="w-full border-none shadow-none flex flex-col items-center">
      <CardHeader className="w-full px-0">
        <CardTitle className={cn('text-wiz-white text-lg', 'lg:text-2xl')}>
          wiz Video
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full px-0">
        <div className="w-full h-fit bg-gray-200 rounded-3xl overflow-hidden">
          <img src={videos[0].imgFilePath} alt={videos[0].artcTitle} />
        </div>
        <div
          className={cn('w-full grid grid-cols-2 gap-4 py-4', 'lg:grid-cols-4')}
        >
          {videos.slice(1).map((vid) => (
            <div className="flex flex-col gap-2 bg-white rounded-xl overflow-hidden">
              <div className="w-full h-fit bg-gray-500">
                <img src={vid.imgFilePath} alt={vid.artcTitle} />
              </div>
              <div className="h-full flex flex-col justify-between px-2 py-1 gap-4 md:gap-8">
                <p
                  className={cn(
                    'font-semibold text-xs',
                    'md:text-sm',
                    'lg:text-base'
                  )}
                >
                  {vid.artcTitle}
                </p>
                <p
                  className={cn(
                    'text-gray-400 self-end text-[0.6rem]',
                    'lg:text-xs'
                  )}
                >
                  {vid.contentsDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          to="/media/highlight"
          className={cn(
            'border-2 rounded bg-white text-xs px-2 py-1',
            'lg:text-base lg:px-4 lg:py-2'
          )}
        >
          더 많은 영상보기
        </Link>
      </CardFooter>
    </Card>
  );
}

export { WizVideo };
