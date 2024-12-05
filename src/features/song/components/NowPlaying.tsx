import { Song } from '../types';

function NowPlaying({ song }: { song: Song }) {
  return (
    <div className="w-[full] h-20 flex flex-col justify-between text-[#717781]">
      <div className="w-full h-10 bg-gray-500">audio player</div>
      <div className="flex items-center justify-between text-sm">
        <p>{song.copyright.singer}</p>
        <div className="flex items-center gap-2">
          <p>작사 - {song.copyright.owner.lyrics}</p>
          <p>작곡 - {song.copyright.owner.composition}</p>
        </div>
      </div>
    </div>
  );
}

export { NowPlaying };
