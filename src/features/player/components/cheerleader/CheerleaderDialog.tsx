import {
  Card,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { Separator } from '@radix-ui/react-select';
import { SocialIcon } from 'react-social-icons';
import type { Cheerleader } from '../../types/cheerleader';

interface cheerleaderDialogProps {
  data: Cheerleader;
}

function CheerleaderDialog({ data }: cheerleaderDialogProps) {
  const dialogContentItems = [
    { label: '생년월일', prop: data.leaderBirthDay },
    { label: '키', prop: `${data.leaderHeight}cm` },
    { label: '닉네임', prop: data.leaderNickName },
    { label: '좋아하는 선수', prop: data.leaderLikePlayer },
    { label: '모토', prop: data.leaderMotto },
  ];

  return (
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
        className="sm:max-w-[830px] h-[450px] text-wiz-black flex flex-col items-end"
      >
        <div className="m-4">
          <DialogHeader>
            <p className="text-wiz-red font-bold">{data.leaderPosition}</p>
            <div className="flex gap-4 items-center">
              <DialogTitle className="text-2xl font-bold">
                {data.leaderName}
              </DialogTitle>
              <SocialIcon
                target="_blank"
                url={`https://www.instagram.com/${data.snsId}/`}
                style={{ height: 35, width: 35 }}
              />
            </div>
            <p className="text-xl text-gray-400">{data.leaderEngName}</p>
          </DialogHeader>
          <DialogDescription className="mt-4 flex flex-col gap-2 bg-wiz-white p-3 rounded-md">
            {dialogContentItems.map((item) => (
              <div className="flex items-baseline gap-4" key={item.label}>
                <p className="font-semibold text-lg">{item.label}</p>
                <p className="font-medium">{item.prop}</p>
              </div>
            ))}
            <div className="mt-1">
              <p className="font-semibold text-lg mb-1">경력</p>
              <Separator className="w-full h-0.5 bg-wiz-red mb-2" />
              <p className="font-medium">{data.leaderCareer}</p>
            </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CheerleaderDialog;
