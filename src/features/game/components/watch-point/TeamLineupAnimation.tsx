import { Lineup } from '@/features/game/types/watch-point';
import { useInView } from 'react-intersection-observer';

const TeamLineupAnimation = ({
  player,
  position,
  delay,
}: {
  player: Lineup;
  position?: { style: string; label: string };
  delay: number; // 각 요소의 지연 시간
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번만 실행 -> false로 설정할 경우 매번 실행(기본값 false)
    threshold: 0.1, // 요소가 10% 보이면 트리거
  });

  return position ? (
    <div
      ref={ref}
      style={{
        transitionDelay: `${inView ? delay : 0}ms`, // 애니메이션 지연 시간 설정
      }}
      className={`border border-l-2 border-l-wiz-red bg-wiz-white w-fit h-fit px-2 rounded transition-transform duration-500 ease-in-out ${
        position.style
      } ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'
      }`}
    >
      <div className="flex text-wiz-black text-[10px] md:text-sm lg:text-xs">
        <p>{position.label}.</p>
        <p className="break-words max-w-[6ch]">{player.playerName}</p>
      </div>
    </div>
  ) : null;
};

export { TeamLineupAnimation };
