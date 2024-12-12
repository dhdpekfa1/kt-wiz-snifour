import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import { MatchSummaryTable } from '@/features/game/components/table';
import { useEffect, useState } from 'react';
import { getWatchPoint } from './apis';
import {
  MatchBoard,
  StartingPitcher,
  TeamLineup,
} from './components/watch-point';
import { WatchPointData } from './types/watch-point';

const mockData = {
  teamA: {
    wins: 72,
    losses: 70,
    draws: 2,
    winRate: 0.507,
    seasonResult: '시즌 성적',
    seasonRank: 5,
  },
  teamB: {
    wins: 76,
    losses: 66,
    draws: 2,
    winRate: 0.535,
    seasonResult: '시즌 성적',
    seasonRank: 3,
  },
};

const WatchPointTab = () => {
  const [watchData, setWatchData] = useState<WatchPointData>();
  // const [gameDate, setGameDate] = useState("20240922");
  // const [gameKey, setGameKey] = useState("20240922SKKT0");

  useEffect(() => {
    fetchWatchPointData();
  }, []);

  console.log('watchData', watchData);

  const fetchWatchPointData = async () => {
    // TODO: gameDate, gameKey 매개변수 state 전달
    const res = await getWatchPoint('20240922', '20240922SKKT0');
    setWatchData(res);
  };

  return (
    <div className="w-full flex my-20">
      <div className="w-full flex flex-col justify-center items-start">
        {/* 경로 */}
        <Breadcrumb
          paths={[
            { key: 'home', label: 'Home' },
            { key: 'game', label: 'Game' },
            { key: 'regular-season', label: '정규리그' },
            { key: 'box-score', label: '관전 포인트', isActive: true },
          ]}
        />
        {/* 경기 정보 보드 */}
        <MatchBoard
          team1Data={{
            teamName: watchData?.gameScore.home || '',
            logoUrl: watchData?.gameScore.homeLogo || '',
            result: watchData?.gameScore.hscore,
            stadium: '홈',
            tabType: 'MatchBoard',
          }}
          team2Data={{
            teamName: watchData?.gameScore.visit || '',
            logoUrl: watchData?.gameScore.visitLogo || '',
            result: watchData?.gameScore.vscore,
            stadium: '원정',
            tabType: 'MatchBoard',
          }}
          matchDate={watchData?.gameScore.displayDate || ''}
          matchTime={watchData?.gameScore.gtime || ''}
          stadium={watchData?.gameScore.stadium || ''}
          gameTable={
            <MatchSummaryTable teamA={mockData.teamA} teamB={mockData.teamB} />
          }
        />

        <div className="flex flex-col">
          <div className="flex flex-col gap-2 w-full my-10">
            <SubTitle title="선발투수 비교" />
            <div className="w-full">
              <StartingPitcher
                homeTeam={watchData?.gameScore.home || ''}
                visitTeam={watchData?.gameScore.visit || ''}
                homePitcher={watchData?.homePitcher}
                visitPitcher={watchData?.visitPitcher}
              />
            </div>
          </div>

          {/* 라인업 */}
          <div className="flex flex-col gap-2 w-full my-10">
            <SubTitle title="라인업" />
            <div className="w-full flex items-center justify-between gap-10 px-20 lg:flex-row sm:gap-0 md:gap-0 lg:gap-20 xl:px-20 flex-col">
              <TeamLineup
                data={watchData?.homeLineup || []}
                logoUrl={watchData?.gameScore.homeLogo || ''}
              />
              <h2 className="text-6xl text-wiz-red font-extrabold lg:mt-44 md:mt-6 md:mb-2 sm:mb-6 sm:ml-32 mt-10 lg:ml-0 ">
                VS
              </h2>
              <TeamLineup
                data={watchData?.visitLineup || []}
                logoUrl={watchData?.gameScore.visitLogo || ''}
              />
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

export { WatchPointTab };
