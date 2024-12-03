import { Card, Carousel, CarouselContent, CarouselItem } from '@/components/ui';
function MainImageSlider() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        <CarouselItem>
          <Card className="w-full h-96 bg-gray-300">kt 위즈 이미지</Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="w-full h-96 bg-red-300">이 달의 선수</Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="w-full h-96 bg-blue-300">공식 온라인 스토어</Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export { MainImageSlider };
