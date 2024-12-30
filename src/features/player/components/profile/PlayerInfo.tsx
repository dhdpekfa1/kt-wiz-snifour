import { cn, formatDate } from '@/lib/utils';
import { PlayerBase } from '../../types/detail';

interface PlayerInfoProps {
  data: PlayerBase;
}

function PlayerInfo({ data }: PlayerInfoProps) {
  const info = [
    { label: '생년월일', content: `${formatDate(data.birth)}` },
    { label: '체격', content: `${data.height}cm / ${data.weight}kg` },
    { label: '연봉', content: data.promise },
    { label: '출신', content: data.career?.split('-').join(' - ') },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="mb-4">
        <div
          className={cn(
            'flex justify-between text-base font-bold',
            'md:text-xl',
            'lg:text-2xl'
          )}
        >
          <span>{data.playerName}</span>
          <span>No.{data.backnum}</span>
        </div>
        <div
          className={cn(
            'text-neutral-400 flex items-center justify-between text-xs',
            'md:text-sm',
            'lg:text-base'
          )}
        >
          <span>{data.engName}</span>
          <div className="flex items-center gap-1">
            <span>{data.position}</span>
            <span>({data.hittype})</span>
          </div>
        </div>
      </div>
      {/* 생년월일, 체격, 연봉, 출신 */}
      <div
        className={cn(
          'w-full text-xs flex flex-col gap-1',
          'md:text-sm',
          'lg:text-base lg:gap-2'
        )}
      >
        {info.map((item) => (
          <div key={item.label} className="flex justify-between">
            <p className="w-1/4">{item.label}</p>
            <p className="max-w-3/4 text-right break-keep">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerInfo;
