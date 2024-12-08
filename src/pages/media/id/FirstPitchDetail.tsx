import MediaLayout from '@/features/media/common/MediaLayout';

import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui';
import { MediaDetail } from '@/features/media/common/MediaDetail';
import useScrollTo from '@/features/media/hooks/useScrollTo';
import { newsItems as firstPitchItems } from '@/features/media/mock_data';
import NotFoundPage from '@/pages/NotFoundPage';
import { ArrowLeftIcon, ListOrderedIcon } from 'lucide-react';

/** 시구자 정보 상세 페이지 */
const FirstPitchDetailPage = () => {
  useScrollTo();

  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = firstPitchItems.findIndex(
    (item) => item.id === Number(id)
  );
  const firstPitchItem = firstPitchItems[currentIndex];

  const prevNews = currentIndex > 0 ? firstPitchItems[currentIndex - 1] : null;
  const nextNews =
    currentIndex < firstPitchItems.length - 1
      ? firstPitchItems[currentIndex + 1]
      : null;

  if (!firstPitchItem) {
    return (
      <NotFoundPage
        title="존재하지 않는 시구자 정보입니다."
        buttonText="시구자 정보 목록으로 돌아가기"
        redirectUrl="/media/firstpitch"
      />
    );
  }

  return (
    <MediaLayout>
      <MediaDetail.Container>
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={() => navigate('/media/firstpitch')}
            className="px-0"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            뒤로
          </Button>
        </div>

        <MediaDetail.Header
          title={firstPitchItem.title}
          date={firstPitchItem.date}
          views={firstPitchItem.views}
        />
        <MediaDetail.Body
          title={firstPitchItem.title}
          description={firstPitchItem.description}
          thumbnail={firstPitchItem.thumbnail}
          content={
            '10월 9일 KT 위즈파크에서 열린 LG 트윈스와의 홈 경기, "수원특례시장" 이재준, "수원특례시의회 의장" 이재식 님이 승리를 기원하는 시구/시타 행사를 가졌습니다.'
          }
        />
        <MediaDetail.Navigation
          config={{
            prevLink: `/media/firstpitch/${prevNews?.id}`,
            nextLink: `/media/firstpitch/${nextNews?.id}`,
            listButton: {
              onClick: () => navigate('/media/firstpitch'),
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

export default FirstPitchDetailPage;
