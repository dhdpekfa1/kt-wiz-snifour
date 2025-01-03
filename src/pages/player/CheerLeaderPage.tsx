import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import CheerleaderDialog from '@/features/player/components/cheerleader/CheerleaderDialog';
import useCheerleaderList from '@/features/player/hooks/useCheerleaderList';
import Skeleton from 'react-loading-skeleton';

function CheerleaderPage() {
  const { cheerleaderList, loading, error } = useCheerleaderList();
  const skeletonItems = Array.from({ length: 16 });

  if (error) return <div>{error}</div>;

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=CHEERLEADER"
            alt="KT WIZ Coach"
          />
          <Banner.Overlay>
            <Banner.Heading title="KT Wiz 선수단" subtitle="응원단" />
            <Banner.Description description="KT wiz의 꽃! KT wiz의 응원단" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Breadcrumb />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {!cheerleaderList || loading
          ? // 로딩 중일 때 스켈레톤
            skeletonItems.map(() => (
              <div
                key={Math.random()}
                className="relative bg-gray-200 animate-pulse rounded-lg shadow-md"
              >
                <Skeleton height={200} width="100%" />
              </div>
            ))
          : // 컴포넌트
            cheerleaderList.map((cheerleader) => (
              <CheerleaderDialog
                data={cheerleader}
                key={cheerleader.leaderName}
              />
            ))}
      </div>
    </Layout>
  );
}

export default CheerleaderPage;
