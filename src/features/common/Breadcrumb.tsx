import { PAGE_URLS } from '@/constants/urls';
import { cn } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { IconRight } from 'react-day-picker';
import { useLocation } from 'react-router';

type UrlStructure = {
  name: string;
  sub?: { [key: string]: UrlStructure };
};
interface BreadcrumbProps {
  leftComponent?: ReactNode;
}

const getLabel = (paths: string[], pathToFind: string) => {
  const findPathInStructure = (current: UrlStructure): string | null => {
    // 하위 구조(sub)가 존재하는 경우 재귀적으로 탐색
    if (current.sub) {
      for (const key in current.sub) {
        // 현재 경로가 pathToFind와 일치하면 name 반환
        if (key === pathToFind) {
          return current.sub[key].name;
        }
        const result = findPathInStructure(current.sub[key]);
        if (result) return result; // 일치하는 경로를 찾으면 반환
      }
    }

    // 일치하는 경로가 없으면 null 반환
    return null;
  };

  if (!paths.length) return null; // 경로가 비어 있는 경우 null 반환
  const rootPath = paths[0]; // 첫 번째 경로 가져오기
  const rootStructure = PAGE_URLS[rootPath];
  if (rootPath === pathToFind) {
    return rootStructure.name;
  }
  if (!rootStructure) return null; // 최상위 경로를 찾지 못한 경우 null 반환
  return findPathInStructure(rootStructure);
};

const Breadcrumb = ({ leftComponent = null }: BreadcrumbProps) => {
  // url 파싱
  const { pathname } = useLocation();
  let paths: string[] = pathname.split('?')[0].split('/').slice(1);

  // 타자의 경우 pathname에 batter가 포함되지 않으므로 '타자'가 생략된다. 그러므로 추가한다.
  if (
    paths.includes('catcher') ||
    paths.includes('infielder') ||
    paths.includes('outfielder')
  ) {
    paths = paths.reduce((acc: string[], path: string) => {
      // 'catcher', 'infielder', 'outfielder'가 나오면 그 앞에 'batter'를 추가
      if (['catcher', 'infielder', 'outfielder'].includes(path)) {
        acc.push('batter'); // 'batter' 추가
      }
      acc.push(path); // 현재 경로 요소 추가
      return acc;
    }, []);
  }

  // url 매핑
  const mappedPaths = [
    { key: 'home', label: 'Home', isActive: false },
    ...paths.map((path, index) => ({
      key: path,
      label: getLabel(paths, path),
      isActive: index === paths.length - 1,
    })),
  ];

  // url label이 null인 것 필터링
  const filteredPaths = mappedPaths.filter((path) => path.label);
  filteredPaths[filteredPaths.length - 1].isActive = true;

  return (
    <div
      className={cn(
        'w-full mt-6 mb-4 pb-2 border-b-2 border-wiz-red flex flex-col md:flex-row md:items-center',
        leftComponent ? 'md:justify-between justify-start' : 'justify-end'
      )}
    >
      {/* Breadcrumb */}
      <span className="flex items-center font-light text-wiz-white whitespace-wraps">
        <HomeIcon className={cn('mr-1 h-3', 'lg:mr-2 lg:h-4')} />
        {filteredPaths.map((path, index) => (
          <span
            key={path.key}
            className={cn(
              'flex items-center text-xs',
              'md:text-sm',
              path.isActive && 'text-wiz-red'
            )}
          >
            {path.label}
            {index < filteredPaths.length - 1 && (
              <IconRight className={cn('h-2 mx-1', 'lg:h-3 lg:mx-2')} />
            )}
          </span>
        ))}
      </span>

      {/* sm 이하에서 브래드크럼 아래에 표시되는 leftComponent */}
      {leftComponent && (
        <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-4">
          {leftComponent}
        </div>
      )}
    </div>
  );
};
export default Breadcrumb;
