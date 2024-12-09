import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { Button } from "@/components/ui";
import {
  getMonthSchedule,
  getAllMonthSchedule,
} from "../../apis/matchSchedule";
import { MatchCalendarCell, CalendarHeader } from "./";

export interface GameSchedule {
  broadcast: string; // 방송 정보
  displayDate: string; // 화면에 표시되는 날짜
  gameDate: string; // 실제 게임 날짜
  gmkey: string; // 게임 고유 키
  gtime: string; // 게임 시간
  home: string; // 홈 팀 이름
  homeKey: string; // 홈 팀 코드
  homeLogo: string; // 홈 팀 로고 URL
  homeScore: number; // 홈 팀 점수
  matchTeamCode: string; // 매치된 팀 코드
  matchTeamName: string; // 매치된 팀 이름
  outcome: string; // 경기 결과 (승/패)
  stadium: string; // 경기장 이름
  stadiumKey: string; // 경기장 코드
  status: string; // 경기 상태 코드
  visit: string; // 원정 팀 이름
  visitKey: string; // 원정 팀 코드
  visitLogo: string; // 원정 팀 로고 URL
  visitScore: number; // 원정 팀 점수
}

const MatchCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTab, setSelectedTab] = useState<"kt wiz 경기" | "전체 리그">(
    "kt wiz 경기"
  );
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [ktMatchData, setKTMatchData] = useState<GameSchedule[]>();
  const [allMatchData, setAllMatchData] = useState<GameSchedule[]>();

  useEffect(() => {
    fetchMatchSchedule();
  }, [currentMonth, selectedTab]);

  const fetchMatchSchedule = async () => {
    const yearMonth = format(currentMonth, "yyyyMM");
    if (selectedTab === "kt wiz 경기") {
      const data: GameSchedule[] = await getMonthSchedule(yearMonth);
      setKTMatchData(data);
    } else {
      const data: GameSchedule[] = await getAllMonthSchedule(yearMonth);
      setAllMatchData(data);
    }
  };

  const renderCellContent = (date: Date) => {
    const formattedDate = format(date, "yyyyMMdd");
    const match = ktMatchData?.find(
      (item) => item.gameDate.toString() === formattedDate
    );
    const matches = allMatchData?.filter(
      (item) => item.gameDate.toString() === formattedDate
    );

    return (
      <MatchCalendarCell
        date={date}
        ktMatchData={match}
        allMatchData={matches || []}
        selectedTab={selectedTab}
      />
    );
  };

  return (
    <div className="w-full my-10">
      {/* 상단 헤더 */}
      <div className="flex justify-between items-center border-b pb-3 mb-5">
        <div className="flex gap-2">
          <Button
            className={`text-md px-4 py-2 rounded cursor-pointer border border-wiz-white ${
              selectedTab === "kt wiz 경기"
                ? "bg-wiz-red text-white hover:bg-wiz-red"
                : "bg-transparent text-wiz-white hover:text-wiz-black hover:bg-wiz-white"
            }`}
            onClick={() => setSelectedTab("kt wiz 경기")}
          >
            kt wiz 경기
          </Button>
          <Button
            className={`text-md px-5 py-2 rounded cursor-pointer border border-wiz-white ${
              selectedTab === "전체 리그"
                ? "bg-wiz-red text-white hover:bg-wiz-red"
                : "bg-transparent text-wiz-white hover:text-wiz-black hover:bg-wiz-white"
            }`}
            onClick={() => setSelectedTab("전체 리그")}
          >
            전체 리그
          </Button>
        </div>
        <div className="flex gap-2">
          <span className="text-md px-3 py-2 rounded bg-wiz-red text-white">
            승
          </span>
          <span className="text-md px-3 py-2 rounded bg-gray-600 text-white">
            패
          </span>
          <span className="text-md px-3 py-2 rounded bg-gray-400 text-white">
            무
          </span>
        </div>
      </div>
      {/* 캘린더 */}
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        locale={ko}
        className="border border-[#fefefe40] rounded-lg w-full max-w-full mx-auto"
        classNames={{
          table: "w-full border-collapse",
          cell: "h-[180px] w-[160px] text-center p-0 border border-[#fefefe40] relative",
          day: "h-full w-full text-sm flex items-center justify-center relative",
        }}
        captionLayout="dropdown"
        defaultMonth={new Date()}
        month={currentMonth}
        onMonthChange={setCurrentMonth}
        fromMonth={new Date(2024, 6)}
        toMonth={new Date(2025, 9)}
        components={{
          Caption: (props) => (
            <CalendarHeader
              displayMonth={props.displayMonth}
              setCurrentMonth={setCurrentMonth}
            />
          ),
          Head: () => (
            <thead>
              <tr className="bg-[#35383e]">
                {["일", "월", "화", "수", "목", "금", "토"].map(
                  (day, index) => (
                    <th
                      key={day}
                      className={`p-2 font-medium ${
                        index === 0
                          ? "text-red-500"
                          : index === 6
                          ? "text-blue-500"
                          : "text-wiz-white"
                      }`}
                    >
                      {day}
                    </th>
                  )
                )}
              </tr>
            </thead>
          ),
          DayContent: ({ date }) => (
            <div
              className={`relative w-full h-full bg-[#35383e20] ${
                format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")
                  ? "border-2 border-wiz-red"
                  : ""
              }`}
            >
              {renderCellContent(date)}
            </div>
          ),
        }}
      />
      <p className="mt-5 text-sm text-gray-500 text-right">
        * 경기 일정은 사정에 따라 변동될 수 있습니다.
      </p>
    </div>
  );
};

export { MatchCalendar };
