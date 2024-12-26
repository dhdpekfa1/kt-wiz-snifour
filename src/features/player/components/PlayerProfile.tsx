import { formatDate } from '@/lib/utils';
import { PlayerBase, SeasonSummaryBase } from '../types/detail';

interface PlayerProfileProps {
  player: PlayerBase;
  seasonSummary: SeasonSummaryBase;
}

function PlayerProfile({ player, seasonSummary }: PlayerProfileProps) {
  return (
    <div className="w-1/4 flex flex-col">
      <div className="w-full h-[17rem] bg-wiz-white rounded-xl overflow-hidden">
        <img src={player.playerPrvwImg} alt="" className="w-full" />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <div className="mb-4">
          <div className="flex justify-between text-2xl font-bold">
            <span>{player.playerName}</span>
            <span>No.{player.backnum}</span>
          </div>
          <div className="text-neutral-400 flex items-center justify-between">
            <span>{player.engName}</span>
            <div className="flex items-center gap-1">
              <span>{player.position}</span>
              <span>({player.hittype})</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>생년월일</span>
          <span>{formatDate(player.birth)}</span>
        </div>
        <div className="flex justify-between">
          <span>체격</span>
          <span>
            {player.height}cm / {player.weight}kg
          </span>
        </div>
        <div className="flex justify-between">
          <span>연봉</span>
          <span>{player.promise}</span>
        </div>
        <div className="flex justify-between">
          <span>출신</span>
          <span className="max-w-56 text-right break-keep">
            {player.career?.split('-').join(' - ')}
          </span>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2 relative z-0">
          2024 정규 리그 성적
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-wiz-red bg-opacity-50 -z-10" />
        </h4>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex justify-between">
            <span>평균자책점</span>
            <span className="max-w-48 text-right word-wrap">
              {seasonSummary.era}
            </span>
          </div>
          <div className="flex justify-between">
            <span>승</span>
            <span className="max-w-48 text-right word-wrap">
              {seasonSummary.w}
            </span>
          </div>
          <div className="flex justify-between">
            <span>패</span>
            <span className="max-w-48 text-right word-wrap">
              {seasonSummary.l}
            </span>
          </div>
          <div className="flex justify-between">
            <span>세이브</span>
            <span className="max-w-48 text-right word-wrap">
              {seasonSummary.sv}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlayerProfile };
