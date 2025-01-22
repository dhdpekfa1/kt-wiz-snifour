import { startTransition, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';

type TabConfig = {
  value: string;
  path?: string;
  paths?: string[];
};

type UseTabFromUrlProps = {
  basePath: string;
  tabs: TabConfig[];
  defaultTab?: string;
};

export const useTabFromUrl = ({
  basePath,
  tabs,
  defaultTab,
}: UseTabFromUrlProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 탭 상태
  const currentTab = (() => {
    const currentPath = location.pathname;
    const matchedTab = tabs.find((tab) => {
      if (tab.path) {
        return currentPath.includes(tab.path);
      }
      if (tab.paths) {
        return tab.paths.some((path) => currentPath.includes(path));
      }
      return false;
    });
    return matchedTab?.value || defaultTab || tabs[0].value;
  })();

  // 탭 변경 핸들러
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const handleTabChange = useCallback(
    (value: string) => {
      const targetTab = tabs.find((tab) => tab.value === value);

      // 탭이 없으면 기본 탭으로 리다이렉트
      if (!targetTab) {
        const firstTab = tabs[0];
        const fallbackPath = `${basePath}${
          firstTab.path || firstTab.paths?.[0]
        }`;
        if (fallbackPath) {
          navigate(fallbackPath, { replace: true });
        }
        return;
      }

      // 탭이 있으면 탭 경로로 리다이렉트
      startTransition(() => {
        let newPath: string;
        if (targetTab.path) {
          newPath = `${basePath}${targetTab.path}`;
        } else if (targetTab.paths && targetTab.paths.length > 0) {
          newPath = `${basePath}${targetTab.paths[0]}`;
        } else {
          return; // 경로가 없는 경우 네비게이션을 수행하지 않음
        }
        navigate(newPath, { preventScrollReset: true });
      });
    },
    [basePath, navigate, tabs]
  );

  return { currentTab, handleTabChange };
};
