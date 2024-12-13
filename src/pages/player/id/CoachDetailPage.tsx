import { getCoach } from '@/features/player/apis';
import { Coach } from '@/features/player/types/player';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

const CoachDetailPage = () => {
  const [coachData, setCoachData] = useState<Coach | null>(null);
  const [searchParams] = useSearchParams();
  const pcode = searchParams.get('pcode');

  useEffect(() => {
    if (pcode) {
      fetchCoachData(pcode);
    }
  }, [pcode]);

  const fetchCoachData = async (pcode: string) => {
    const res = await getCoach(pcode);
    setCoachData(res);
    console.log('coachData', res);
  };

  return (
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
                <h2 className="text-6xl font-bold">{coachData?.playerName}</h2>
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
                <p className="break-words max-w-[30ch] w-full">
                  {coachData?.career}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachDetailPage;
