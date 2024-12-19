import {
  Card,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui';
import { Separator } from '@radix-ui/react-select';
import { SocialIcon } from 'react-social-icons';
import type { Cheerleader } from '../types/cheerleader';

interface cheerleaderDialogProps {
  data: Cheerleader;
}

function CheerleaderDialog({ data }: cheerleaderDialogProps) {
  const dialogContentItems = [
    { label: '생년월일', prop: data.leaderBirthDay },
    { label: '포지션', prop: data.leaderPosition },
    { label: '닉네임', prop: data.leaderNickName },
    { label: '좋아하는 선수', prop: data.leaderLikePlayer },
    { lable: '모토', prop: data.leaderMotto },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col items-center">
          <img src={data.imgPath} alt="응원단 사진" />
          <h1>{data.leaderName}</h1>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] h-auto bg-wiz-black text-wiz-white">
        <div className="flex gap-6 p-2">
          <img
            className="w-2/5"
            src="https://media.istockphoto.com/id/1328176926/ko/%EB%B2%A1%ED%84%B0/%EC%9D%91%EC%9B%90%EC%9D%B4%EB%9D%BC%EB%8A%94-%EB%8B%A8%EC%96%B4%EC%99%80-%ED%95%A8%EA%BB%98-%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%8A%A4%ED%94%BC%EC%BB%A4%EC%9D%98-%EB%B3%B4%EA%B8%B0.jpg?s=1024x1024&w=is&k=20&c=l7YaOg604gbmu4h_2Qa0sNBI2XeBcpMfU3Ekua5YlSw="
            alt="사진"
          />
          <div>
            <DialogHeader className="flex flex-row justify-between items-baseline mr-7">
              <div className="flex gap-2 items-baseline text-base">
                <p className="text-2xl font-bold">{data.leaderName}</p>
                <p className="text-xl font-bold text-gray-400">
                  {data.leaderEngName}
                </p>
              </div>
              <div>
                <SocialIcon
                  target="_blank"
                  url={`https://www.instagram.com/${data.snsId}/`}
                  style={{ height: 35, width: 35 }}
                />
              </div>
            </DialogHeader>
            <div className="mt-4 flex flex-col gap-2">
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
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CheerleaderDialog;
