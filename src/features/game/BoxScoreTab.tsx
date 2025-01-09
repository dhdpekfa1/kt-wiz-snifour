import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  BattingRecordTable,
  MatchScoreTable,
  PitchingRecordTable,
} from '@/features/game/components/table';
import { formatDate } from '@/lib/utils';
import { useParams } from 'react-router';
import { useGetBoxscoreQuery } from './apis/boxscore/boxscoreApi.query';
import KeyRecordsCard from './components/card/KeyRecordsCard';
import { MatchBoard } from './components/common';

const BoxscoreTab = () => {
  //TODO: recentScheduleApi query를 이용해서 초기 렌더링 화면을 최신경기의 gameDate, gameKey로 세팅하기
  const { gameDate, gameKey } = useParams<{
    gameDate: string;
    gameKey: string;
  }>();

  const {
    data: matchData,
    isLoading,
    isError,
    error,
  } = useGetBoxscoreQuery(gameDate, gameKey);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!matchData) return <div>데이터가 없습니다.</div>;

  const handleDateChange = (direction: 'prev' | 'next') => {
    if (matchData) {
      if (direction === 'prev') {
        const prevDate = matchData.schedule.prev.gameDate.toString();
        const prevKey = matchData.schedule.prev.gmkey;
        window.location.href = `/game/regular/boxscore/${prevDate}/${prevKey}`;
      } else {
        const nextDate = matchData?.schedule.next.gameDate.toString();
        const nextKey = matchData?.schedule.next.gmkey;
        window.location.href = `/game/regular/boxscore/${nextDate}/${nextKey}`;
      }
    }
  };
  console.log('matchData', matchData.schedule);

  return (
    <div className="w-full flex justify-center my-20">
      <div className="w-full flex flex-col justify-center items-center">
        {/* 경로 */}
        <Breadcrumb />

        {/* 경기 스코어 테이블 */}
        <MatchBoard
          team1Data={{
            teamName: matchData?.schedule.current.visit,
            logoUrl: matchData?.schedule.current.visitLogo,
            result: matchData?.schedule.current.vscore,
            stadium: '원정',
            tabType: 'MatchBoard',
          }}
          team2Data={{
            teamName: matchData?.schedule.current.home,
            logoUrl: matchData?.schedule.current.homeLogo,
            result: matchData?.schedule.current.hscore,
            stadium: '홈',
            tabType: 'MatchBoard',
          }}
          matchDate={formatDate(
            matchData?.schedule.current.gameDate.toString()
          )}
          matchTime={matchData?.schedule.current.gtime}
          stadium={matchData?.schedule.current.stadium}
          gameTable={<MatchScoreTable data={matchData?.scoreboard} />}
          crowd={matchData?.schedule.current.crowdCn}
          onDateChange={handleDateChange}
          disablePrev={!matchData.schedule.prev}
          disableNext={!matchData.schedule.next}
        />

        {/* 주요 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <SubTitle title="주요 기록" />
          <div className="w-full items-center mt-4">
            <KeyRecordsCard data={matchData} />
          </div>
        </div>
        {/* team1 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.home || 'Home Team'
              } 타자 기록`}
            />

            <div className="w-full">
              <BattingRecordTable data={matchData?.hbatters} />
            </div>
          </div>
        </div>
        {/* team2 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.visit || 'Visit Team'
              } 타자 기록`}
            />
            <div className="w-full">
              <BattingRecordTable data={matchData?.vbatters} />
            </div>
          </div>
        </div>
        {/* team1 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.home || 'Home Team'
              } 투수 기록`}
            />
            <div className="w-full">
              <PitchingRecordTable data={matchData?.hpitchers} />
            </div>
          </div>
        </div>
        {/* team2 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.visit || 'Visit Team'
              } 투수 기록`}
            />
            <div className="w-full">
              <PitchingRecordTable data={matchData?.vpitchers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BoxscoreTab };
