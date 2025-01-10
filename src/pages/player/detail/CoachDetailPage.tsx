import Breadcrumb from '@/features/common/Breadcrumb';
import useCoach from '@/features/player/hooks/useCoach';
import Skeleton from 'react-loading-skeleton';

const CoachDetailPage = () => {
  const { coachData, isLoading, isError, error } = useCoach();

  if (isError) {
    return <div>Error: {error?.toString()}</div>;
  }

  if (!coachData) {
    return <div>데이터가 존재하지 않습니다.</div>;
  }

  return (
    <div className="w-full h-screen pb-30">
      <Breadcrumb />

      <div className="block md:flex md:gap-8 rounded-xl p-2 md:bg-wiz-white md:bg-opacity-10 w-full md:pr-4 lg:pr-8">
        <div className="w-full md:[60%] lg:w-1/2 h-fit aspect-square bg-wiz-white rounded-xl overflow-hidden md:m-4">
          {isLoading ? (
            <div className="bg-gray-200 animate-pulse rounded-lg w-full">
              <Skeleton height={340} className="w-full mb-10" />
            </div>
          ) : (
            <img
              src={coachData.playerPrvwImg}
              alt={`${coachData.playerName} profile`}
              className="w-full"
            />
          )}
        </div>
        <div className="w-full h-full flex items-center mt-4 md:mt-8">
          {/* 선수 프로필 */}
          <div className="w-full h-full flex flex-col gap-2">
            {/* 이름, 포지션 */}
            {isLoading ? (
              <div className="w-full">
                <div className="rounded-lg">
                  <Skeleton
                    height={36}
                    width={240}
                    className="bg-gray-200 animate-pulse"
                  />
                  <Skeleton
                    height={36}
                    width={320}
                    className="my-4 bg-gray-200 animate-pulse"
                  />
                  <Skeleton
                    height={36}
                    width={140}
                    className="bg-gray-200 animate-pulse"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col justify-between">
                <div className="mb-4">
                  <div className="flex justify-between text-xl md:text-2xl font-bold text-wiz-white">
                    <span>{coachData.playerName}</span>
                    <span className="text-wiz-red text-xl md:text-2xl">
                      No.{coachData.backnum}
                    </span>
                  </div>
                  <div className="text-neutral-400 flex items-center justify-between text-sm md:text-base lg:lg">
                    <span>{coachData.engName}</span>
                    <div className="flex items-center gap-1 text-sm md:text-base lg:lg">
                      <span>{coachData.position}</span>
                      <span>({coachData.hittype})</span>
                    </div>
                  </div>
                </div>
                {/* 생년월일, 체격, 연봉, 출신 */}
                <div className="w-full text-base md:text-lg flex flex-col gap-1 text-wiz-white">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachDetailPage;
