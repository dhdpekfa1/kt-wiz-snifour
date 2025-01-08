import { Tabs, TabsContent, TabsList } from '@/components/ui';
import {
  AllPitcherRankingTab,
  KTPitcherRankingTab,
  RankingCard,
} from '@/features/game/components/ranking';
import { useTopPitcherRank } from '@/features/game/hooks/ranking/useTopPitcherRank';
import { cn } from '@/lib/utils';
import Breadcrumb from '../../../../common/Breadcrumb';
import SubTabsTrigger from '../../../../common/SubTabsTrigger';
import CustomSelect from '@/features/common/CustomSelect.tsx';
import { useSearchParams } from 'react-router';
import { seasons } from '@/constants/seasons';
import { useState } from 'react';

function PitcherRankingTab() {
  const { eraRanking, winRanking, isLoading, error, isError } =
    useTopPitcherRank();
  const [searchParams, setSearchParams] = useSearchParams();
  const [season, setSeason] = useState<string>(
    searchParams.get('gyear') || seasons[0]
  );

  if (isError) {
    return <div>{error?.toString()}</div>;
  }

  return (
    <div>
      <Breadcrumb
        leftComponent={
          <CustomSelect
            type="year"
            data={seasons}
            value={season}
            onChange={(value) => {
              setSeason(value);
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                gyear: value,
              });
            }}
          />
        }
      />

      {/* 투수 랭킹 카드 */}
      <div
        className={cn(
          'w-full mt-12 bg-wiz-white bg-opacity-10 grid grid-cols-1 rounded-xl p-8 gap-4',
          'lg:grid-cols-2'
        )}
      >
        <RankingCard
          title="평균 자책점 TOP 3"
          ranking={eraRanking || []}
          position="pitcher"
          indicator="era"
          loading={isLoading}
        />
        <RankingCard
          title="승리 TOP 3"
          ranking={winRanking || []}
          position="pitcher"
          indicator="w"
          loading={isLoading}
        />
      </div>

      {/* 투수 순위 표 */}
      <Tabs
        defaultValue="ktPitchers"
        onValueChange={() => {
          setSearchParams({ gyear: searchParams.get('gyear') || '' });
        }}
      >
        <TabsList className="my-8">
          <SubTabsTrigger value="ktPitchers">KT Wiz 투수</SubTabsTrigger>
          <SubTabsTrigger value="allPitchers">전체 투수 순위</SubTabsTrigger>
        </TabsList>
        <TabsContent value="ktPitchers">
          <KTPitcherRankingTab />
        </TabsContent>
        <TabsContent value="allPitchers">
          <AllPitcherRankingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { PitcherRankingTab };
