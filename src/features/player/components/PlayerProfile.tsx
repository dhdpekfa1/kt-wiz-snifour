import { cn } from '@/lib/utils';
import { PlayerBase, SeasonSummaryBase } from '../types/detail';
import LeagueRecord from './profile/LeagueRecord';
import PlayerInfo from './profile/PlayerInfo';

interface PlayerProfileProps {
  player: PlayerBase;
  seasonSummary: SeasonSummaryBase;
}

function PlayerProfile({ player, seasonSummary }: PlayerProfileProps) {
  return (
    <div
      className={cn(
        'w-full h-full flex flex-row gap-4',
        'lg:w-1/4 lg:flex-col'
      )}
    >
      {/* 선수 이미지 */}
      <div
        className={cn(
          'w-1/3 h-fit aspect-square bg-wiz-white rounded-xl overflow-hidden',
          'lg:w-full'
        )}
      >
        <img src={player.playerPrvwImg} alt="" className="w-full" />
      </div>
      <div className={cn('w-2/3 h-full flex items-center', 'lg:w-full')}>
        {/* 선수 프로필 */}
        <div className={cn('w-full h-full flex flex-col gap-2')}>
          {/* 이름, 포지션 */}
          <PlayerInfo data={player} />
          {/* 정규 리그 성적 */}
          <LeagueRecord data={seasonSummary} />
        </div>
      </div>
    </div>
  );
}

export { PlayerProfile };
