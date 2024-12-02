import channelsData from '@/assets/data/broadcastChannels.json';
import MatchInfoCarousel from '@/components/ui/carousel/MatchInfoCarousel';
import MatchCalendar from './MatchCalendar';

const MatchSchedule = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 경기 정보 */}
      <MatchInfoCarousel />
      {/* 달력 */}
      <MatchCalendar />
      {/* 중계 채널 정보 */}
      <div className="w-full flex-col gap-2 hidden lg:flex">
        {channelsData.channels.map((channel) => (
          <div
            className="flex items-center justify-start w-full"
            key={channel.category}
          >
            <strong className="flex items-centers justify-center flex-shrink-0 mr-3 px-3 w-14 bg-slate-600 text-white rounded">
              {channel.category}
            </strong>
            <span className="text-sm font-light justify-start">
              {channel.items.map((item, index) => (
                <span key={item.code}>
                  {item.code}
                  <span className="text-[#666]">({item.name})</span>
                  {index < channel.items.length - 1 && ', '}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchSchedule;
