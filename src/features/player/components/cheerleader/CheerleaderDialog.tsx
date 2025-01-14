import {
  Card,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import type { Cheerleader } from '@/features/player/types/cheerleader';
import Skeleton from 'react-loading-skeleton';
import { SocialIcon } from 'react-social-icons';

interface cheerleaderDialogProps {
  data: Cheerleader;
  loading: boolean;
}

function CheerleaderDialog({ data, loading }: cheerleaderDialogProps) {
  const dialogContentItems = [
    { label: '생년월일', prop: data.leaderBirthDay },
    { label: '키', prop: `${data.leaderHeight}cm` },
    { label: '닉네임', prop: data.leaderNickName },
    { label: '좋아하는 선수', prop: data.leaderLikePlayer },
    { label: '모토', prop: data.leaderMotto },
  ];

  return (
    <>
      {loading ? ( // 로딩 중일 때 스켈레톤
        <Skeleton height={200} width="100%" />
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Card className="relative overflow-hidden">
              <img
                className="w-full object-cover aspect-square"
                src={data.imgPrvwPath}
                alt={`${data.leaderName}`}
              />
              <div className="absolute top-2 right-2 text-wiz-black font-bold text-xs md:text-base lg:text-lg flex flex-col items-end">
                <p className="text-wiz-red">{data.leaderPosition}</p>
                <p>{data.leaderName}</p>
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent
            style={{ backgroundImage: `url(${data.titleImgPath})` }}
            className="w-[80%] sm:max-w-[700px] md:max-w-[710px] h-[320px] sm:h-[410px] text-wiz-black justify-start sm:justify-end p-3 rounded-md"
          >
            <div className="mt-8 mx-4 sm:mt-10 lg:m-10">
              <DialogHeader className="flex flex-col items-start">
                <span className="text-wiz-white sm:text-wiz-red font-bold">
                  {data.leaderPosition}
                </span>
                <div className="flex gap-4 items-center">
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {data.leaderName}
                  </DialogTitle>
                  <SocialIcon
                    target="_blank"
                    url={`https://www.instagram.com/${data.snsId}/`}
                    style={{ height: 30, width: 30 }}
                    className="sm:h-[35px] sm:w-[35px]"
                  />
                </div>
                <span className="text-lg sm:text-xl text-gray-400">
                  {data.leaderEngName}
                </span>
              </DialogHeader>
              <DialogDescription asChild>
                <div className="my-4 p-4 flex flex-col gap-2 bg-wiz-white rounded-md">
                  {dialogContentItems.map((item) => (
                    <div
                      className="flex items-baseline gap-2 text-xs sm:text-sm lg:text-base"
                      key={item.label}
                    >
                      <span className="font-semibold">{item.label}</span>
                      <span className="font-normal">{item.prop}</span>
                    </div>
                  ))}
                </div>
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export { CheerleaderDialog };
