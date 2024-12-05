import { Song } from '../types';
import { NowPlaying } from './NowPlaying';

function SongBoard({ song }: { song: Song }) {
  return (
    <div className="w-full max-h-[600px] flex items-start justify-between text-wiz-white pt-8 pb-16">
      {/* 곡 정보 */}
      <div className="flex">
        <div>
          <h3 className="font-bold text-3xl mb-8">{song.title}</h3>
          <div className="">
            {song.lyrics
              .split('\n')
              .map((l) => (l === '' ? <br /> : <p className="">{l}</p>))}
          </div>
        </div>
      </div>
      {/* 이미지 */}
      <div className="w-72 h-80 self-end flex items-end">
        {song.player === 'team' ? (
          <img src="/assets/emblems/ktwiz.svg" alt="" className="w-full" />
        ) : (
          <img src="/assets/players/강백호.webp" alt="" className="w-full" />
        )}
      </div>
      {/* 오디오 플레이어, 저작권, 응원가 리스트 */}
      <div className="w-[40%] flex flex-col gap-4">
        {/* now playing... */}
        <NowPlaying song={song} />
        <ul className="h-[400px] overflow-y-scroll">
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
