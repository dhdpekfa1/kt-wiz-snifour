import Breadcrumb from '@/features/common/Breadcrumb';
import useCoach from '@/features/player/hooks/useCoach';
import { cn } from '@/lib/utils';
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

  return (
    <div className="w-full h-screen pb-30">
      <Breadcrumb />
      <div className="md:w-full">
        {/* md 이하일 때 */}
        <div className="block md:hidden text-xl rounded-lg p-2">
          <div
            className={cn(
              'w-full h-fit aspect-square bg-wiz-white rounded-xl overflow-hidden'
            )}
          >
            <img
              src={coachData.playerPrvwImg}
              alt={`${coachData.playerName} profile`}
              className="w-full"
            />
          </div>
          <div className={cn('w-full h-full flex items-center mt-2')}>
            {/* 선수 프로필 */}
            <div className={cn('w-full h-full flex flex-col gap-2')}>
              {/* 이름, 포지션 */}
              <div className="w-full h-full flex flex-col justify-between">
                <div className="mb-4">
                  <div
                    className={cn(
                      'flex justify-between text-xl font-bold text-wiz-white'
                    )}
                  >
                    <span>{coachData.playerName}</span>
                    <span className="text-wiz-red">No.{coachData.backnum}</span>
                  </div>
                  <div
                    className={cn(
                      'text-neutral-400 flex items-center justify-between text-xs',
                      'md:text-sm',
                      'lg:text-base'
                    )}
                  >
                    <span>{coachData.engName}</span>
                    <div className="flex items-center gap-1">
                      <span>{coachData.position}</span>
                      <span>({coachData.hittype})</span>
                    </div>
                  </div>
                </div>
                {/* 생년월일, 체격, 연봉, 출신 */}
                <div className="w-full text-base flex flex-col gap-1 text-wiz-white">
                  <div className="flex items-center justify-between">
                    <p className="md:w-28 w-32">생년월일</p>
                    <p>{coachData?.birth}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="md:w-28 w-32">체격</p>
                    <p>{coachData?.heightWeight}</p>
                  </div>

                  <div className="flex items-start justify-between">
                    <p className="md:w-28 w-32">출신교</p>
                    <div className="flex flex-wrap gap-x-2">
                      <div className="flex flex-col gap-2 max-w-3/4 text-right break-keep">
                        {coachData.career?.split('-').join(' - ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* md 이상일 때 */}
        <div
          className="hidden md:block w-full h-auto p-10"
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
                    <h2 className="md:text-4xl lg:text-6xl font-bold">
                      {coachData?.playerName}
                    </h2>
                    <h2 className="text-wiz-red md:text-4xl lg:text-6xl font-bold">
                      No. {coachData?.backnum}
                    </h2>
                  </div>
                  <div className="flex gap-4 md:text-xl lg:text-2xl">
                    <h3>{coachData?.engName}</h3>
                    <h3>{coachData?.position}</h3>
                  </div>
                </div>

                {/* 설명 */}
                <div className="flex flex-col gap-4 md:text-xl lg:text-2xl">
                  <div className="flex">
                    <p className="md:w-28 lg:w-32">투타</p>
                    <p>{coachData?.hittype}</p>
                  </div>
                  <div className="flex">
                    <p className="md:w-28 w-32">생년월일</p>
                    <p>{coachData?.birth}</p>
                  </div>
                  <div className="flex">
                    <p className="md:w-28 w-32">체격</p>
                    <p>{coachData?.heightWeight}</p>
                  </div>

                  <div className="flex">
                    <p className="md:w-28 w-32">출신교</p>
                    <div className="flex flex-wrap gap-x-2">
                      <div className="flex flex-col gap-2 max-w-[70%] text-center break-keep">
                        {coachData.career?.split('-').join(' - ')}
                      </div>
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
