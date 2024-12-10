import { startTransition, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';

type TabConfig = {
  value: string;
  path: string;
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
    const matchedTab = tabs.find((tab) => currentPath.includes(tab.path));
    return matchedTab?.value || defaultTab || tabs[0].value;
  })();

  // 탭 변경 핸들러
  const handleTabChange = useCallback(
    (value: string) => {
      const targetTab = tabs.find((tab) => tab.value === value);

      // 탭이 없으면 기본 탭으로 리다이렉트
      if (!targetTab) {
        const firstTab = tabs.at(0);
        if (!firstTab?.path) {
          return;
        }

        const fallbackPath = `${basePath}${firstTab.path}`;
        navigate(fallbackPath, { replace: true });
        return;
      }

      // 탭이 있으면 탭 경로로 리다이렉트
      startTransition(() => {
        const newPath = `${basePath}${targetTab.path}`;
        navigate(newPath);
      });
    },
    [basePath, navigate, tabs]
  );

  return { currentTab, handleTabChange };
};
