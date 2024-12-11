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
        <CardTitle className="text-wiz-white">wiz Video</CardTitle>
      </CardHeader>
      <CardContent className="w-full px-0">
        <div className="w-full h-fit bg-gray-200 rounded-3xl overflow-hidden">
          <img src={videos[0].imgFilePath} alt={videos[0].artcTitle} />
        </div>
        <div className="w-full grid grid-cols-4 gap-4 py-4">
          {videos.slice(1).map((vid) => (
            <div className="flex flex-col gap-2 relative bg-white rounded-xl overflow-hidden">
              <div className="w-full h-40 bg-gray-500">
                <img src={vid.imgFilePath} alt={vid.artcTitle} />
              </div>
              <div className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-1 rounded-xl bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6]">
                하이라이트
              </div>
              <div className="flex flex-col px-2 py-1 gap-8">
                <p className="font-semibold text-base">{vid.artcTitle}</p>
                <p className="text-xs text-gray-400 self-end">
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
          className="border-2 px-4 py-2 rounded bg-white"
        >
          더 많은 영상보기
        </Link>
      </CardFooter>
    </Card>
  );
}

export { WizVideo };
