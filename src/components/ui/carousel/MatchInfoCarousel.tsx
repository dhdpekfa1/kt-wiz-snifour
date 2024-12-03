import { Card, CardContent } from '../card/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselPrevious,
  // CarouselNext,
} from './carousel';

const matchMockData = [
  {
    date: '2024.10.09',
    team1: 'LG 트윈스',
    team1_logo:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1424D544502DD27604',
    team1_player: '백승현',
    team2: 'KT 위즈',
    team2_logo:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F173D58365036F0AA03',
    team2_player: '박영현',
    score: '5:6',
    matchResult: '승',
  },
  {
    date: '2024.10.11',
    team1: 'KT 위즈',
    team1_logo:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F173D58365036F0AA03',
    team1_player: '엄상백',
    team2: 'LG 트윈스',
    team2_logo:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1424D544502DD27604',
    team2_player: '임찬구',
    score: '1:4',
    matchResult: '패',
  },
  {
    date: '',
    team1: '',
    team2: '',
    team1_player: '',
    team2_player: '',
    score: '',
    matchResult: '',
  },
];

const MatchInfoCarousel = () => {
  return (
    <div className="w-full max-w-2xl min-w-full overflow:hidden">
      <Carousel className="relative max-w-full">
        <CarouselContent className="-ml-2">
          {matchMockData.map((data) => (
            <CarouselItem
              key={data.date}
              className={
                'pl-1 md:basis-1/2 lg:basis-1/3 transition-transform duration-300 w-fit'
              }
            >
              <div className="p-1">
                <Card className="shadow-md min-w-80 w-full">
                  <CardContent className="flex flex-col gap-2 items-center justify-between p-5">
                    {data.date ? (
                      <div className="flex flex-col h-48 items-center justify-between p-2">
                        {/* 날짜 라벨 */}
                        <h4 className="bg-[#ec0a0b] text-white px-6 py-1 rounded-full">
                          {data.date}
                        </h4>

                        <div className="flex gap-6 items-center justify-center px-6">
                          {/* team1 */}
                          <div className="min-w-fit flex flex-col items-center gap-2">
                            <img
                              src={data.team1_logo}
                              alt="team logo"
                              className="w-14 h-14"
                            />
                            <p className="text-sm font-medium leading-none">
                              {data.team1}
                            </p>
                            <p className="mb-4 text-sm text-[#666] leading-none">
                              L: {data.team1_player}
                            </p>
                          </div>

                          {/* 스코어, 승패, 경기 정보 버튼 */}
                          <div className="flex flex-col items-center justify-center">
                            <h4 className="mb-4 font-normal text-xl leading-none">
                              {data.score}
                            </h4>
                            <div className="flex gap-2">
                              <p className="mb-4 leading-none text-[#ec0a0b]">
                                {data.matchResult}
                              </p>
                            </div>
                            <button
                              type="button"
                              className="bg-gray-400 text-white rounded-full hover:bg-gray-500 py-1 px-3 w-24"
                            >
                              경기 정보
                            </button>
                          </div>
                          {/* team2 */}
                          <div className="min-w-fit flex flex-col items-center gap-2">
                            <img
                              src={data.team2_logo}
                              alt="team logo"
                              className="w-14 h-14"
                            />
                            <p className="text-sm font-medium leading-none">
                              {data.team2}
                            </p>
                            <p className="mb-4 text-sm text-[#666] leading-none">
                              W: {data.team2_player}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-5 h-48 items-center p-2">
                        <div className="top-0 w-full h-7 bg-[#222] text-white p-1 rounded-2xl" />
                        <p className=" mb-4">예정된 경기가 없습니다.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="absolute left-[-28px] top-1/2 -translate-y-1/2 z-30 bg-gray-600 text-white  hover:bg-[#222] hover:text-[#eceef2] p-2 rounded-full" />
        <CarouselNext className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 bg-gray-600 text-white  hover:bg-[#222] hover:text-[#eceef2] p-2 rounded-full" /> */}
      </Carousel>
    </div>
  );
};

export default MatchInfoCarousel;
