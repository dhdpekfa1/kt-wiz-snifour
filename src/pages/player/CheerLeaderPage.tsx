import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import CheerleaderDialog from '@/features/player/components/cheerleader/CheerleaderDialog';
import useCheerleaderList from '@/features/player/hooks/useCheerleaderList';

function CheerleaderPage() {
  const { cheerleaderList, loading, error } = useCheerleaderList();

  if (!cheerleaderList || loading) return null;

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
            <Banner.Heading title="KT WIZ 선수단" subtitle="응원단" />
            <Banner.Description description="KT wiz의 꽃! KT wiz의 응원단" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Breadcrumb />
      <div className="text-wiz-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cheerleaderList.map((cheerleader) => (
          <CheerleaderDialog data={cheerleader} key={cheerleader.leaderName} />
        ))}
      </div>
    </Layout>
  );
}

export default CheerleaderPage;
