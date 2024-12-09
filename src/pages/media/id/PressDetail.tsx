import MediaLayout from '@/features/media/common/MediaLayout';

import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui';
import { MediaDetail } from '@/features/media/common/MediaDetail';
import useScrollTo from '@/features/media/hooks/useScrollTo';
import { newsItems2 } from '@/features/media/mock_data';
import NotFoundPage from '@/pages/NotFoundPage';
import { ArrowLeftIcon, ListOrderedIcon } from 'lucide-react';

/** 보도자료 상세 페이지 */
const PressDetailPage = () => {
  useScrollTo();

  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = newsItems2.findIndex((item) => item.id === Number(id));
  const pressItem = newsItems2[currentIndex];

  const prevNews = currentIndex > 0 ? newsItems2[currentIndex - 1] : null;
  const nextNews =
    currentIndex < newsItems2.length - 1 ? newsItems2[currentIndex + 1] : null;

  if (!pressItem) {
    return (
      <NotFoundPage
        title="존재하지 않는 뉴스입니다"
        buttonText="뉴스 목록으로 돌아가기"
        redirectUrl="/media/wizpress"
      />
    );
  }

  return (
    <MediaLayout>
      <MediaDetail.Container>
        <div className="flex items-center justify-between mb-8">
          <Button onClick={() => navigate('/media/wizpress')} className="px-0">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            뒤로
          </Button>
        </div>

        <MediaDetail.Header
          title={pressItem.title}
          date={pressItem.date}
          views={pressItem.views}
        />
        <MediaDetail.Body
          title={pressItem.title}
          description={pressItem.description}
          thumbnail={pressItem.thumbnail}
          content={
            'kt wiz 프로야구단(대표이사 이호식, ktwiz.co.kr)이 29일(금) 외국인 투수 윌리엄 쿠에바스(34)와 총액 150만 달러에 계약했다고 밝혔다.  2019 시즌 KBO리그 무대를 밟은 쿠에바스는 2년 연속 두 자릿수 승수를 따내며 KT의 에이스로 자리 잡았다. 2021 시즌에는 타이브레이커에서 정규시즌 우승의 결정적인 역할을 하는 등 팀을 첫 통합 우승으로 이끌었다.'
          }
        />
        <MediaDetail.Navigation
          config={{
            prevLink: `/media/wizpress/${prevNews?.id}`,
            nextLink: `/media/wizpress/${nextNews?.id}`,
            listButton: {
              onClick: () => navigate('/media/wizpress'),
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

export default PressDetailPage;
