import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { CarouselCard } from "@/features/game/components/carousel";
import { useGetMatchScheduleQuery } from "@/features/game/apis/match-schedule/matchScheduleApi.query";
import { useMatchStore } from "@/store/useMatchStore";
import { format, isValid, parse } from "date-fns";
import { useEffect, useState } from "react";

const MatchInfoCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const { currentMonth, selectedDate } = useMatchStore();
  const { matchData = [], isLoading } = useGetMatchScheduleQuery({
    currentMonth,
    carouselApi,
  });

  if (isLoading) {
    // TODO: 스켈레톤 작업
  }

  /**  날짜 선택 시 캐러셀 이동 */
  useEffect(() => {
    if (!selectedDate || !carouselApi || matchData.length === 0) return;
    const formattedSelectedDate = format(selectedDate, "yyyyMMdd"); // 형식 변환 변환

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
    const parsedDate = parse(gameDateString, "yyyyMMdd", new Date());
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
        <CarouselPrevious className="absolute border-none left-0 top-1/2 -translate-y-1/2 z-30 text-white hover:text-wiz-white hover:text-opacity-80 p-4 rounded-full" />
        <CarouselNext className="absolute border-none  right-0 top-1/2 -translate-y-1/2 z-20 text-white hover:text-wiz-white hover:text-opacity-80 p-4 rounded-full" />
      </Carousel>
    </div>
  );
};

export { MatchInfoCarousel };
