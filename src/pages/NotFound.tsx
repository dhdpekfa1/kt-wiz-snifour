// 임시 404 페이지

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-wiz-yellow mb-4">404</h1>
      <p className="text-white mb-8">페이지를 찾을 수 없습니다.</p>
      <a
        href="/"
        className="px-6 py-2 bg-wiz-yellow text-wiz-black rounded-md hover:bg-wiz-yellow/90"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
};

export default NotFoundPage;
