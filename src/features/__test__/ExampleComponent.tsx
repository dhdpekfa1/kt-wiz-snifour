import { AlertCircle } from 'lucide-react';

import { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState<string[]>(() => []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 가짜 비동기 작업
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(['React', 'TypeScript', 'Vite', 'Biome']);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('데이터가 변경되었습니다:', data);
  }, [data]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="text-blue-500" />
        <h2 className="text-xl font-bold">의존성 테스트 컴포넌트</h2>
      </div>

      {loading ? (
        <p className="text-gray-600">로딩 중...</p>
      ) : (
        <ul className="space-y-2">
          {data.map((item) => (
            <li key={`${item}`} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExampleComponent;
