import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import { MatchSummaryTable } from '@/features/game/components/table';
import { useEffect, useState } from 'react';
import { MatchBoard } from './components/common';
import { StartingPitcherTable, TeamLineup } from './components/watch-point';
import useGetRecentMatchScheduleQuery from './apis/match-schedule/RecentScheduleApi.query';
import useGetWatchPointQuery from './apis/watch-point/watchPointApi.query';

const WatchPointTab = () => {
  const {
    recentMatchData,
    loading: recentLoading,
    error: recentError,
  } = useGetRecentMatchScheduleQuery();

  const [gameDate, setGameDate] = useState<string | null>(null);
  const [gameKey, setGameKey] = useState<string | null>(null);

  useEffect(() => {
    if (recentMatchData?.data?.current) {
      setGameDate(String(recentMatchData.data.current.gameDate));
      setGameKey(String(recentMatchData.data.current.gmkey));
    }
  }, [recentMatchData]);

  const { watchData, loading, error } = useGetWatchPointQuery(
    gameDate || '',
    gameKey || ''
  );

  // 로딩 및 오류 처리
  if (recentLoading || loading) {
    return <div>Loading...</div>;
  }

  if (recentError || error) {
    return (
      <div>
        <p>Error: {recentError || error}</p>
      </div>
    );
  }

  // 날짜 변경 핸들러
  const handleDateChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && watchData?.schedule?.prev) {
      setGameDate(String(watchData.schedule.prev.gameDate));
      setGameKey(String(watchData.schedule.prev.gmkey));
    } else if (direction === 'next' && watchData?.schedule?.next) {
      setGameDate(String(watchData.schedule.next.gameDate));
      setGameKey(String(watchData.schedule.next.gmkey));
    }
  };

  // 데이터가 없는 경우 처리
  if (!watchData || !watchData.gameScore) {
    return (
      <div>
        <p>예정된 경기 데이터가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex my-20">
      <div className="w-full flex flex-col justify-center items-start">
        {/* 경로 */}
        <Breadcrumb />

        {/* 경기 정보 보드 */}
        <MatchBoard
          team1Data={{
            teamName: watchData.gameScore.home || '',
            logoUrl: watchData.gameScore.homeLogo || '',
            result: watchData.gameScore.hscore,
            stadium: '홈',
            tabType: 'MatchBoard',
          }}
          team2Data={{
            teamName: watchData.gameScore.visit || '',
            logoUrl: watchData.gameScore.visitLogo || '',
            result: watchData.gameScore.vscore,
            stadium: '원정',
            tabType: 'MatchBoard',
          }}
          matchDate={watchData.gameScore.displayDate || ''}
          matchTime={watchData.gameScore.gtime || ''}
          stadium={watchData.gameScore.stadium || ''}
          gameTable={
            <MatchSummaryTable
              homeTeamRank={watchData.homeTeamRank}
              visitTeamRank={watchData.visitTeamRank}
              homeTeamWinLose={watchData.homeTeamWinLose}
              visitTeamWinLose={watchData.visitTeamWinLose}
            />
          }
          onDateChange={handleDateChange}
          disablePrev={!watchData.schedule?.prev}
          disableNext={!watchData.schedule?.next}
        />

        {/* 선발투수 비교 */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2 w-full my-10">
            <SubTitle title="선발투수 비교" />
            <div className="w-full flex items-center justify-center">
              <StartingPitcherTable
                homeTeam={watchData.gameScore.home || ''}
                visitTeam={watchData.gameScore.visit || ''}
                homePitcher={watchData.homePitcher}
                visitPitcher={watchData.visitPitcher}
              />
            </div>
          </div>

          {/* 라인업 */}
          <div className="flex flex-col gap-2 w-full my-10">
            <SubTitle title="라인업" />
            <div className="w-full flex items-center justify-between gap-8 lg:flex-row sm:gap-0 lg:gap-10 flex-col">
              <TeamLineup
                data={watchData.homeLineup || []}
                logoUrl={watchData.gameScore.homeLogo || ''}
              />
              <h2 className="text-3xl lg:text-4xl text-wiz-red font-extrabold lg:ml-0 lg:mt-16 md:mt-6 md:mb-2 sm:mb-6 sm:ml-32">
                VS
              </h2>
              <TeamLineup
                data={watchData.visitLineup || []}
                logoUrl={watchData.gameScore.visitLogo || ''}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full my-10 gap-6">
            {/* 중계 채널 */}
            <div className="flex flex-col gap-2 flex-1">
              <SubTitle title="중계 채널" />
              <p className="mb-4 text-wiz-white text-sm md:text-base">
                {watchData.schedule.current.broadcast}
              </p>
            </div>

            {/* 홈구장 날씨 */}
            <div className="flex flex-col gap-2 flex-1">
              <SubTitle title="홈구장 날씨" />
              <p className="mb-4 text-wiz-white text-sm md:text-base">
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
