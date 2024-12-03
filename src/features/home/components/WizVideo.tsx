import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';

function WizVideo() {
  return (
    <Card className="w-full border-none shadow-none flex flex-col items-center">
      <CardHeader className="w-full">
        <CardTitle>wiz Video</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <div className="w-full h-[500px] bg-gray-200">video</div>
        <div className="w-full grid grid-cols-4 gap-4 py-4">
          <div className="flex flex-col gap-2 relative">
            <div className="w-full h-40 bg-gray-200 rounded ">thumbnail</div>
            <div className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-1 rounded-xl bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6]">
              하이라이트
            </div>
            <p className="font-bold text-lg">영상 제목</p>
            <p className="text-xs text-gray-400 self-end">2024.12.03</p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <div className="w-full h-40 bg-gray-200 rounded ">thumbnail</div>
            <div className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-1 rounded-xl bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6]">
              하이라이트
            </div>
            <p className="font-bold text-lg">영상 제목</p>
            <p className="text-xs text-gray-400 self-end">2024.12.03</p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <div className="w-full h-40 bg-gray-200 rounded ">thumbnail</div>
            <div className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-1 rounded-xl bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6]">
              하이라이트
            </div>
            <p className="font-bold text-lg">영상 제목</p>
            <p className="text-xs text-gray-400 self-end">2024.12.03</p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <div className="w-full h-40 bg-gray-200 rounded ">thumbnail</div>
            <div className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-1 rounded-xl bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6]">
              하이라이트
            </div>
            <p className="font-bold text-lg">영상 제목</p>
            <p className="text-xs text-gray-400 self-end">2024.12.03</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <button type="button" className="border-2 px-4 py-2 rounded">
          더 많은 영상보기
        </button>
      </CardFooter>
    </Card>
  );
}

export { WizVideo };
