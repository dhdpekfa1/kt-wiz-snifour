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
    { label: '포지션', prop: data.leaderPosition },
    { label: '닉네임', prop: data.leaderNickName },
    { label: '좋아하는 선수', prop: data.leaderLikePlayer },
    { label: '모토', prop: data.leaderMotto },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col items-center">
          <img src={data.imgPrvwPath} alt={`${data.leaderName}`} />
          <h1>{data.leaderName}</h1>
        </Card>
      </DialogTrigger>

      <DialogContent
        style={{ backgroundImage: `url(${data.titleImgPath})` }}
        className="sm:max-w-[800px] h-[450px] text-wiz-black flex flex-col items-end"
      >
        <DialogHeader className="flex">
          <DialogTitle className="text-2xl font-bold">
            {data.leaderName}
          </DialogTitle>
          <DialogDescription className="text-xl font-bold text-gray-400">
            {data.leaderEngName}
          </DialogDescription>
          <SocialIcon
            target="_blank"
            url={`https://www.instagram.com/${data.snsId}/`}
            style={{ height: 35, width: 35 }}
          />
        </DialogHeader>
        <DialogDescription className="mt-4 flex flex-col gap-2">
          {dialogContentItems.map((item) => (
            <div className="flex items-baseline gap-4" key={item.label}>
              <p className="font-semibold text-lg">{item.label}</p>
              <p>{item.prop}</p>
            </div>
          ))}
          <div className="mt-1">
            <p className="font-semibold text-lg mb-1">경력</p>
            <Separator className="w-full h-0.5 bg-wiz-red mb-2" />
            <p>{data.leaderCareer}</p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default CheerleaderDialog;
