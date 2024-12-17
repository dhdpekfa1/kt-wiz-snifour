import Breadcrumb from '@/features/common/Breadcrumb';
import useCoach from '@/features/game/hooks/useCoach';
import { useSearchParams } from 'react-router';

const CoachDetailPage = () => {
  const [searchParams] = useSearchParams();
  const pcode = searchParams.get('pcode');
  const { coachData, loading, error } = useCoach(pcode);

  if (!coachData || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // 출신교 데이터 줄바꿈 함수
  const formatCareerInGroups = (career: string | undefined) => {
    if (!career) return null;

    const parts = career.split('-');
    const groupedParts = [];
    for (let i = 0; i < parts.length; i += 5) {
      groupedParts.push(parts.slice(i, i + 5));
    }

    return groupedParts.map((group, groupIndex) => (
      <div key={`group-${groupIndex}-${group}`} className="flex gap-2">
        {group.map((item, index) => (
          <span key={`item-${groupIndex}-${item}`} className="text-wiz-black">
            {index > 0 && '-'}
            {item}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <div className="w-full h-screen pb-30">
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'player', label: 'Player' },
          { key: 'wiz-player', label: 'Wiz Plyer' },
          { key: 'coach', label: '코치', isActive: true },
        ]}
      />
      <div
        className="w-full p-10"
        style={{
          backgroundImage: `url(${coachData?.mobilePlayerImg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full px-10 py-20">
          <div className="flex flex-row items-start gap-10">
            <div className="flex flex-col gap-10 text-wiz-black">
              {/* 이름 */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-8">
                  <h2 className="text-6xl font-bold">
                    {coachData?.playerName}
                  </h2>
                  <h2 className="text-wiz-red text-6xl font-bold">
                    No. {coachData?.backnum}
                  </h2>
                </div>
                <div className="flex gap-4 text-2xl">
                  <h3>{coachData?.engName}</h3>
                  <h3>{coachData?.position}</h3>
                </div>
              </div>

              {/* 설명 */}
              <div className="flex flex-col gap-4 text-2xl">
                <div className="flex">
                  <p className="w-32">투타</p>
                  <p>{coachData?.hittype}</p>
                </div>
                <div className="flex">
                  <p className="w-32">생년월일</p>
                  <p>{coachData?.birth}</p>
                </div>
                <div className="flex">
                  <p className="w-32">체격</p>
                  <p>{coachData?.heightWeight}</p>
                </div>

                <div className="flex">
                  <p className="w-32">출신교</p>
                  <div className="flex flex-wrap gap-x-2">
                    <div className="flex flex-col gap-2">
                      {formatCareerInGroups(coachData?.career)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachDetailPage;
