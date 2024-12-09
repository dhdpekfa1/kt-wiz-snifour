// 임시 404

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router';

type NotFoundPageProps = {
  title?: string;
  buttonText?: string;
  redirectUrl?: string;
  className?: string;
};

const NotFoundPage = ({
  title = '페이지를 찾을 수 없습니다',
  buttonText = '홈으로 돌아가기',
  redirectUrl = '/',
  className = '',
}: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        'flex items-center flex-col justify-center',
        'px-4 py-8 text-cente text-wiz-white',
        'h-[500px]',
        className
      )}
    >
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Button onClick={() => navigate(redirectUrl)} variant="ghost">
        {buttonText}
      </Button>
    </div>
  );
};

export default NotFoundPage;
