import MediaLayout from '@/features/media/common/MediaLayout';

import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui';
import { MediaDetail } from '@/features/media/common/MediaDetail';
import useScrollTo from '@/features/media/hooks/useScrollTo';
import { newsItems } from '@/features/media/mock_data';
import NotFoundPage from '@/pages/NotFoundPage';
import { ArrowLeftIcon, ListOrderedIcon } from 'lucide-react';

/** 뉴스 상세 페이지 */
const NewsDetailPage = () => {
  useScrollTo();

  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = newsItems.findIndex((item) => item.id === Number(id));
  const newsItem = newsItems[currentIndex];

  const prevNews = currentIndex > 0 ? newsItems[currentIndex - 1] : null;
  const nextNews =
    currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;

  if (!newsItem) {
    return (
      <NotFoundPage
        title="존재하지 않는 뉴스입니다"
        buttonText="뉴스 목록으로 돌아가기"
        redirectUrl="/media/wiznews"
      />
    );
  }

  return (
    <MediaLayout>
      <MediaDetail.Container>
        <div className="flex items-center justify-between mb-8">
          <Button onClick={() => navigate('/media/wiznews')} className="px-0">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            뒤로
          </Button>
        </div>

        <MediaDetail.Header
          title={newsItem.title}
          date={newsItem.date}
          views={newsItem.views}
        />
        <MediaDetail.Body
          title={newsItem.title}
          description={newsItem.description}
          thumbnail={newsItem.thumbnail}
          content={
            '안녕하세요, kt wiz 야구단입니다. 2024 시즌권 회원분들께선 11월 23일 토요일 2024 팬 페스티벌 수원컨벤션센터 3층 입장 확인처에서 73승 기념뱃지를 수령 가능하십니다.'
          }
          tags={['팬페스티벌', '기념뱃지']}
        />
        <MediaDetail.Navigation
          config={{
            prevLink: `/media/wiznews/${prevNews?.id}`,
            nextLink: `/media/wiznews/${nextNews?.id}`,
            listButton: {
              onClick: () => navigate('/media/wiznews'),
              text: (
                <>
                  <ListOrderedIcon className="w-4 h-4 mr-2" />
                  <span>목록으로</span>
                </>
              ),
            },
          }}
        />
      </MediaDetail.Container>
    </MediaLayout>
  );
};

export default NewsDetailPage;
