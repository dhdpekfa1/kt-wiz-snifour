import Breadcrumb from "@/features/common/Breadcrumb";
import SubTitle from "@/features/common/SubTitle";
import MatchBoard from "@/features/game/components/MatchBoard";
import TeamLineup from "@/features/game/components/TeamLineup";
import { MatchSummaryTable } from "@/features/game/components/table";

const mockData = {
  teamA: {
    wins: 72,
    losses: 70,
    draws: 2,
    winRate: 0.507,
    seasonResult: "시즌 성적",
    seasonRank: 5,
  },
  teamB: {
    wins: 76,
    losses: 66,
    draws: 2,
    winRate: 0.535,
    seasonResult: "시즌 성적",
    seasonRank: 3,
  },
};

const WatchPointPage = () => {
  const mock_data1 = {
    logoUrl: "/assets/emblems/ktwiz.svg",
    catcher: "장성우",
    firstBase: "오재일",
    secondBase: "김상수",
    thirdBase: "황재균",
    shortstop: "심우준",
    leftField: "로하스",
    centerField: "배정대",
    rightField: "송민섭",
    designatedHitter: "강백호",
    pitcher: "박영현",
  };

  const mock_data2 = {
    logoUrl: "/assets/emblems/lgtwins.svg",
    catcher: "허도환",
    firstBase: "오스틴",
    secondBase: "신민재",
    thirdBase: "문보경",
    shortstop: "오지환",
    leftField: "문성주",
    centerField: "박해민",
    rightField: "홍창기",
    designatedHitter: "이영빈",
    pitcher: "정우영",
  };

  return (
    <div className="w-full flex my-20">
      <div className="w-full flex flex-col justify-center items-start">
        {/* 경로 */}
        <Breadcrumb
          paths={[
            { key: "home", label: "Home" },
            { key: "game", label: "Game" },
            { key: "regular-season", label: "정규리그" },
            { key: "box-score", label: "관전 포인트", isActive: true },
          ]}
        />

        {/* 경기 정보 보드 */}
        <MatchBoard
          team1Data={{
            teamName: "KT",
            logoUrl: "/assets/emblems/ktwiz.svg",
            result: 1,
            stadium: "원정",
            tabType: "MatchBoard",
          }}
          team2Data={{
            teamName: "LG",
            logoUrl: "/assets/emblems/lgtwins.svg",
            result: 4,
            stadium: "홈",
            tabType: "MatchBoard",
          }}
          matchDate="2024-12-10"
          matchTime="18:30"
          stadium="수원 KT 위즈 파크"
          gameTable={
            <MatchSummaryTable teamA={mockData.teamA} teamB={mockData.teamB} />
          }
        />

        <div className="flex flex-col">
          {/* TODO: 선발투수 비교 차트 구현 */}
          <div className="flex flex-col gap-2 w-full my-10">
            <SubTitle title="선발투수 비교" />
            <div className="w-full">{/*  */}</div>
          </div>

          {/* 라인업 */}
          <div className="flex flex-col gap-2 w-full my-10">
            <SubTitle title="라인업" />
            <div className="w-full flex items-center justify-between gap-10 px-20">
              <TeamLineup data={mock_data1} />
              <h2 className="text-6xl	text-wiz-red font-extrabold mt-20">VS</h2>
              <TeamLineup data={mock_data2} />
            </div>
          </div>

          <div className="flex items-center justify-between w-full my-10">
            {/* 중계 채널 */}
            <div className="flex flex-col gap-2 flex-1">
              <SubTitle title="중계 채널" />
              <p className="mb-4 text-wiz-white">
                SPOTV, SPOTV2, KBS N SPORTS, MBC SPORTS+, SBS SPORTS
              </p>
            </div>

            {/* 홈구장 날씨 */}
            <div className="flex flex-col gap-2 flex-1">
              <SubTitle title="홈구장 날씨" />
              <p className="mb-4 text-wiz-white">
                * 경기 당일 날씨만 제공됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPointPage;
