import Breadcrumb from '@/features/common/Breadcrumb';
import CheerleaderDialog from '@/features/player/components/cheerleader/CheerleaderDialog';
import useCheerleaderList from '@/features/player/hooks/useCheerleaderList';

function CheerleaderPage() {
  const { cheerleaderList, loading, error } = useCheerleaderList();

  if (!cheerleaderList || loading) return null;

  if (error) return <div>{error}</div>;

  return (
    <div className="w-[1200px]">
      {/* breadcrumbs */}
      <Breadcrumb />
      {/* 응원단 컴포넌트 :  TODO - 1.고유 넘버로 key 수정  2.Data가 로딩 중 일 때 스켈레톤 추가*/}
      <div className="text-wiz-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cheerleaderList.map((cheerleader) => (
          <CheerleaderDialog data={cheerleader} key={cheerleader.leaderName} />
        ))}
      </div>
    </div>
  );
}

export default CheerleaderPage;
