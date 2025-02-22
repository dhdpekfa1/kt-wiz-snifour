import { Tabs, TabsContent, TabsList } from '@/components/ui';
import { seasons } from '@/constants/seasons';
import { Breadcrumb, CustomSelect, SubTabsTrigger } from '@/features/common';
import {
  AllBatterRankingTab,
  KTBatterRankingTab,
  RankingCard,
} from '@/features/game';
import { useTopBatterRank } from '@/features/game/hooks/ranking';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

function BatterRankingTab() {
  const { hraRanking, hrRanking, isLoading, error, isError } =
    useTopBatterRank();
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

      {/* 타자 랭킹 카드 */}
      <div
        className={cn(
          'w-full mt-12 bg-wiz-white bg-opacity-10 grid grid-cols-1 rounded-xl p-8 gap-4',
          'lg:grid-cols-2'
        )}
      >
        <RankingCard
          title="타율 TOP 3"
          ranking={hraRanking || []}
          position="batter"
          indicator="hra"
          loading={isLoading}
        />
        <RankingCard
          title="홈런 TOP 3"
          ranking={hrRanking || []}
          position="batter"
          indicator="hr"
          loading={isLoading}
        />
      </div>

      {/* 타자 순위 표 */}
      <Tabs
        defaultValue="ktBatters"
        onValueChange={() => {
          setSearchParams({ gyear: searchParams.get('gyear') || '' });
        }}
      >
        <TabsList className="my-8">
          <SubTabsTrigger value="ktBatters">KT Wiz 타자</SubTabsTrigger>
          <SubTabsTrigger value="allBatters">전체 타자 순위</SubTabsTrigger>
        </TabsList>
        <TabsContent value="ktBatters">
          <KTBatterRankingTab />
        </TabsContent>
        <TabsContent value="allBatters">
          <AllBatterRankingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { BatterRankingTab };
