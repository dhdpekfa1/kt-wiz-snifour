import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { CarouselCard } from '@/features/game/components';
import { useMatchStore } from '@/store/useMatchStore';
import { format, isValid, parse } from 'date-fns';
import { useEffect, useState } from 'react';
import { getMonthSchedule } from '../../apis';
import { GameSchedule } from '../../types/match-schedule';

const MatchInfoCarousel = () => {
  const [matchData, setMatchData] = useState<GameSchedule[]>([]);
  const { currentMonth, selectedDate } = useMatchStore();
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

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

      // 가장 마지막 경기로 이동
      if (allMatches.length > 0 && carouselApi) {
        carouselApi.scrollTo(allMatches.length - 1, true); // 마지막 경기 인덱스로 이동
      }
    };

    fetchMatchSchedule();
  }, [currentMonth, carouselApi]);

  /**  날짜 선택 시 캐러셀 이동 */
  useEffect(() => {
    if (!selectedDate || !carouselApi || matchData.length === 0) return;
    const formattedSelectedDate = format(selectedDate, 'yyyyMMdd'); // 형식 변환 변환

    // matchData에서 formattedSelectedDate와 일치하는 인덱스 찾기
    const selectedIndex = matchData.findIndex(
      (game) => game.gameDate.toString() === formattedSelectedDate
    );

    if (selectedIndex !== -1) {
      carouselApi.scrollTo(selectedIndex, true); // 해당 인덱스로 이동
    }
  }, [selectedDate, matchData, carouselApi]);

  const today = new Date();
  const hasUpcomingGames = matchData.some((game) => {
    const gameDateString = game.gameDate?.toString();
    if (!gameDateString) return false;
    const parsedDate = parse(gameDateString, 'yyyyMMdd', new Date());
    return isValid(parsedDate) && parsedDate >= today; // 유효한 날짜인지 확인 후 비교
  });

  return (
    <div className="w-full max-w-2xl min-w-full overflow:hidden">
      <Carousel
        setApi={(api) => setCarouselApi(api)} // Carousel API 저장
        className="relative max-w-full"
      >
        <CarouselContent className="-ml-1">
          {matchData.map((data, index) => (
            <CarouselCard key={`${data.gameDate}-${index}`} data={data} />
          ))}
          {!hasUpcomingGames && <CarouselCard data={null} />}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-gray-600 text-white hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-600 text-white hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
};

export { MatchInfoCarousel };
