import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui';

function WizGallery() {
  return (
    <Card className="w-full border-none shadow-none flex flex-col items-center pb-8">
      <CardHeader className="w-full px-0">
        <CardTitle className="text-wiz-white">wiz Gallery</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-4 px-0">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <div className="h-96 bg-gray-200 rounded-xl">images</div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="h-96 bg-gray-200 rounded-xl">images</div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="h-96 bg-gray-200 rounded-xl">images</div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="h-96 bg-gray-200 rounded-xl">images</div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="h-96 bg-gray-200 rounded-xl">images</div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </CardContent>
      <CardFooter>
        <button type="button" className="border-2 px-4 py-2 rounded bg-white">
          더 많은 사진보기
        </button>
      </CardFooter>
    </Card>
  );
}

export { WizGallery };
