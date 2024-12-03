import {
  Card,
  CardContent,
  CardHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function MatchInfo() {
  return (
    <Card className="w-full px-8 pb-8 flex flex-col items-center border-none shadow-none">
      <CardHeader className="w-full flex flex-row items-center justify-between">
        <ChevronLeft className="cursor-pointer" />
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold text-lg">2024.10.11</h3>
          <p className="text-gray-600 text-sm">잠실 18:30</p>
        </div>
        <ChevronRight className="cursor-pointer" />
      </CardHeader>
      <CardContent className="w-[75%] flex flex-col items-center">
        {/* 경기 정보 */}
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 flex items-center justify-between gap-24">
            <div className="w-40 h-40 bg-gray-200">kt wiz</div>
            <div className="flex flex-col items-center justify-end">
              <div className="text-6xl font-bold mt-8">1 : 4</div>
              <button
                type="button"
                className="flex justify-center items-center gap-2 bg-[#d60c0c] rounded px-4 py-1 mt-8 text-white"
              >
                경기정보 <ChevronRight />
              </button>
            </div>
            <div className="w-40 h-40 bg-gray-200">lg twins</div>
          </div>
        </div>
        {/* 배너 */}
        <div className="w-full flex items-center justify-center gap-4 mt-16">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex-1 h-16 bg-[#d60c0c] flex items-center justify-center text-white text-lg rounded cursor-pointer">
                중계 안내
              </div>
            </PopoverTrigger>
            <PopoverContent className="bg-white w-1/2">
              <div>
                <div className="flex items-start gap-2">
                  <div className="bg-[#35383E] w-fit text-white px-2 py-1 rounded text-xs">
                    TV
                  </div>
                  <p className="text-sm">
                    {/* 그 날의 중계정보를 나타낼 예정 */}
                    K-2T(KBS 2TV), M-T(MBC TV), S-T(SBS TV), KN-T(KBS N SPORTS),
                    MS-T(MBC SPORTS PLUS), SS-T(SBS SPORTS), SPOTV+(SPOTV PLUS),
                    SKY-T(SKY SPORTS)
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div className="flex-1 h-16 overflow-hidden text-center text-white text-lg rounded relative bg-black bg-opacity-20 flex items-center justify-center cursor-pointer">
            <img
              src="https://www.ktwiz.co.kr/v2/imgs/dummy/main/img-banner-parking@2x.png"
              alt=""
              className="absolute top-0 left-0 -z-10 object-cover -translate-y-10"
            />
            사전 주차 예약
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { MatchInfo };
