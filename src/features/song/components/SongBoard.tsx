import { Song } from '@/features/song/types';
import { cn } from '@/lib/utils';
import { NowPlaying } from './NowPlaying';

function SongBoard({ song }: { song: Song }) {
  return (
    <div
      className={cn(
        'w-full flex flex-col items-start justify-between text-wiz-white gap-8 mt-2 mb-16',
        'lg:flex-row lg:h-[28rem]'
      )}
    >
      {/* 곡 정보 */}
      <div className="relative w-full h-full min-h-56">
        <div className="w-full h-full">
          <h3
            className={cn(
              'font-bold text-xl',
              'md:text-2xl',
              'lg:text-3xl lg:mb-8'
            )}
          >
            {song.title}
          </h3>
          <div className={cn('text-xs', 'md:text-sm', 'lg:text-base')}>
            {song.lyrics
              .split('\n')
              .map((l) => (l === '' ? <br /> : <p>{l}</p>))}
          </div>
        </div>
        {/* 이미지 */}
        <img
          src="/assets/emblems/ktwiz.svg"
          alt=""
          className="w-1/2 md:w-1/3 absolute bottom-0 right-0 opacity-30"
        />
      </div>

      {/* 오디오 플레이어, 저작권, 응원가 리스트 */}
      <div className="w-full h-1/3 lg:h-full lg:w-[50%] flex flex-col gap-4">
        {/* now playing... */}
        <NowPlaying song={song} />
        <ul className="h-72 lg:h-[calc(100%-80px)] overflow-y-scroll">
          {Array.from({ length: 15 }, (_, index) => (
            <li className="bg-wiz-white bg-opacity-10 px-4 py-2 my-1 rounded hover:bg-opacity-30 cursor-pointer">
              응원가 {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { SongBoard };
