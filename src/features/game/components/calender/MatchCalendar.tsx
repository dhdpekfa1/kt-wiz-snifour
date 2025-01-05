import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import {
  CalenderBody,
  MatchCalendarCell,
} from "@/features/game/components/calender";
import { useMatchStore } from "@/store/useMatchStore";
import { format } from "date-fns";
import { useState } from "react";
import { useGetMatchScheduleQuery } from "@/features/game/apis/match-schedule/matchScheduleApi.query";

const GAME_TABS_CONFIG = [
  { value: "ktWiz", label: "KT Wiz 경기" },
  { value: "allLeague", label: "전체 리그" },
];

const MatchCalendar = () => {
  const { currentMonth } = useMatchStore();
  const [currentTab, setCurrentTab] = useState<"ktWiz" | "allLeague">("ktWiz");

  const { matchData: ktMatchData = [], isLoading: isLoadingKT } =
    useGetMatchScheduleQuery({
      currentMonth,
      type: "kt",
    });

  const { matchData: allMatchData = [], isLoading: isLoadingAll } =
    useGetMatchScheduleQuery({
      currentMonth,
      type: "all",
    });

  // 날짜별 데이터 렌더링
  const renderCellContent = (date: Date) => {
    const formattedDate = format(date, "yyyyMMdd");

    const match =
      currentTab === "ktWiz"
        ? ktMatchData.find((item) => item.gameDate.toString() === formattedDate)
        : undefined;

    const matches =
      currentTab === "allLeague"
        ? allMatchData.filter(
            (item) => item.gameDate.toString() === formattedDate
          )
        : undefined;

    return (
      <MatchCalendarCell
        date={date}
        ktMatchData={match}
        allMatchData={matches || []}
        currentTab={currentTab}
      />
    );
  };

  // 탭 변경 핸들러
  const handleTabChange = (value: string) => {
    setCurrentTab(value as "ktWiz" | "allLeague");
  };

  return (
    <div className="w-full my-10">
      <Tabs
        className="media-container"
        defaultValue={currentTab}
        onValueChange={handleTabChange}
      >
        <div className="flex justify-between items-center pb-3 mb-5 mt-10">
          {/* 탭 */}
          <TabsList className="media-tabs-list">
            {GAME_TABS_CONFIG.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="media-tabs-trigger px-6 py-2.5"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex gap-2 text-xs md:text-sm lg:text-base text-white">
            <span className="px-2 lg:px-3 py-2 rounded bg-red-500">승</span>
            <span className="px-2 lg:px-3 py-2 rounded bg-gray-700">패</span>
            <span className="px-2 lg:px-3 py-2 rounded bg-gray-500">무</span>
          </div>
        </div>
        {/* 탭 컨텐츠 */}
        <TabsContent value="ktWiz">
          {isLoadingKT ? (
            <p>Loading...</p>
          ) : (
            <CalenderBody renderCellContent={renderCellContent} />
          )}
        </TabsContent>
        <TabsContent value="allLeague">
          {isLoadingAll ? (
            <p>Loading...</p>
          ) : (
            <CalenderBody renderCellContent={renderCellContent} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { MatchCalendar };
