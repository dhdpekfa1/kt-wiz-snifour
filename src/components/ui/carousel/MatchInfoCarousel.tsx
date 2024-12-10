import { getMonthSchedule } from '@/features/game/apis/matchSchedule';
import { CarouselCard } from '@/features/game/components';
import { GameSchedule } from '@/features/game/types';
import { useMatchStore } from '@/store/useMatchStore';
import { format, isValid, parse } from 'date-fns';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const MatchInfoCarousel = () => {
  const [matchData, setMatchData] = useState<GameSchedule[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { currentMonth, selectedDate } = useMatchStore();

  const formatDate = useCallback((date: string): string => {
    return format(parse(date, 'yyyyMMdd', new Date()), 'yyyy.MM.dd');
  }, []);

  useEffect(() => {
    // 이번 달에 경기가 없을 경우 가장 최신 경기 확인
    const fetchMatchSchedule = async () => {
      let yearMonth = format(currentMonth, 'yyyyMM');
      let retries = 12; // 최대 12번 호출 (1년)
      let allMatches: GameSchedule[] = [];

      while (retries > 0) {
        const data: GameSchedule[] = await getMonthSchedule(yearMonth);

        if (data.length) {
          allMatches = [...allMatches, ...data];
          break; // 데이터가 있으면 반복 중지
        }

        // 이전 달로 이동
        const currentDate = new Date(
          parseInt(yearMonth.slice(0, 4)),
          parseInt(yearMonth.slice(4, 6)) - 1,
          1
        );
        currentDate.setMonth(currentDate.getMonth() - 1);
        yearMonth = format(currentDate, 'yyyyMM');
        retries -= 1;
      }

      setMatchData(allMatches);
    };

    fetchMatchSchedule();
  }, [currentMonth]);

  // 캐러셀 이동
  useEffect(() => {
    if (!selectedDate || !carouselRef.current) return;

    const formattedSelectedDate = format(selectedDate, 'yyyy.MM.dd');
    const selectedIndex = matchData.findIndex(
      (game) => formatDate(game.displayDate) === formattedSelectedDate
    );

    if (selectedIndex !== -1) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const scrollAmount = carouselWidth * selectedIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [selectedDate, matchData, formatDate]);

  const today = new Date();
  const hasUpcomingGames = matchData.some((game) => {
    const gameDateString = game.gameDate?.toString(); // gameDate를 문자열로 변환
    if (!gameDateString) return false;
    const parsedDate = parse(gameDateString, 'yyyyMMdd', new Date());
    return isValid(parsedDate) && parsedDate >= today; // 유효한 날짜인지 확인 후 비교
  });

  return (
    <div className="w-full max-w-2xl min-w-full overflow:hidden">
      <Carousel ref={carouselRef} className="relative max-w-full">
        <CarouselContent className="-ml-1">
          {matchData.map((data) => (
            <CarouselCard key={data.gameDate} data={data} />
          ))}
          {!hasUpcomingGames && <CarouselCard data={null} />}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-gray-600 text-white hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-600 text-white hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
};

export default MatchInfoCarousel;
