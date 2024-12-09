import { format } from "date-fns";
import { GameSchedule } from "./MatchCalendar";

interface MatchCalendarCellProps {
  date: Date;
  ktMatchData: GameSchedule | undefined;
  allMatchData: GameSchedule[] | [];
  selectedTab: "kt wiz 경기" | "전체 리그";
}

const MatchCalendarCell = ({
  date,
  ktMatchData,
  allMatchData,
  selectedTab,
}: MatchCalendarCellProps) => {
  const day = date.getDay();

  const getResultColor = (result: string) => {
    switch (result) {
      case "승":
        return "bg-red-500";
      case "패":
        return "bg-gray-600";
      case "무":
        return "bg-gray-400";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-full p-2 flex flex-col items-center justify-start gap-2">
      {/* 날짜 */}
      <div
        className={`absolute top-2 right-2 text-sm font-bold ${
          day === 0
            ? "text-red-500"
            : day === 6
            ? "text-blue-500"
            : "text-wiz-white"
        }`}
      >
        {format(date, "d")}
      </div>

      {ktMatchData && selectedTab === "kt wiz 경기" && (
        <div
          key={ktMatchData.gmkey}
          className={`relative w-full h-full p-2 flex flex-col items-center justify-start gap-2 ${
            ktMatchData.stadium === "수원" ? "bg-[#f5323250]" : ""
          }`}
        >
          {/* 경기 결과 */}
          <div
            className={`absolute top-2 left-2 text-xs text-white py-1 px-2 rounded ${getResultColor(
              ktMatchData.outcome
            )}`}
          >
            {ktMatchData.outcome}
          </div>

          {/* 팀 로고 */}
          <img
            src={
              ktMatchData.home === "KT"
                ? ktMatchData.visitLogo
                : ktMatchData.homeLogo
            }
            alt="team logo"
            className="w-20 h-20 my-6"
          />

          {/* 경기 정보 */}
          <span className="text-sm text-wiz-white">
            {ktMatchData.gtime} {ktMatchData.stadium}
          </span>
          <div className="text-gray-400">{ktMatchData.broadcast}</div>
        </div>
      )}

      {allMatchData && selectedTab === "전체 리그" && (
        <div className="flex flex-col gap-2 items-center mt-6">
          {allMatchData.map((data) => {
            const isKTGame = data.home === "KT" || data.visit === "KT";
            return (
              <p
                key={data.gmkey}
                className={`${
                  isKTGame ? "text-[#f53232]" : "text-[#efefef]"
                } text-md`}
              >
                {data.home} {data.homeScore || "-"} : {data.visit}{" "}
                {data.visitScore || "-"} [{data.stadium}]
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { MatchCalendarCell };
