import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

import { navMenus } from '@/constants/nav-menus';
import { cn } from '@/lib/utils';

function Sidebar({
  className,
  open,
  onClose,
}: {
  className?: string;
  open: boolean;
  onClose: () => void;
}) {
  const sideBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="h-screen">
      <div
        ref={sideBarRef}
        className={cn(
          'fixed top-0 left-0 bg-black text-white w-2/3 h-full overflow-y-scroll px-4 my-4 z-20 text-sm transition-all duration-300',
          'md:w-1/3',
          open ? 'transform-x-0' : '-translate-x-full',
          className
        )}
      >
        <Link
          to="/"
          className="block w-full rounded py-1 hover:bg-wiz-white hover:bg-opacity-10"
          onClick={onClose}
        >
          홈으로
        </Link>
        {navMenus.map((group) => (
          <div key={group.title} className="my-8">
            <h4 className="text-wiz-red my-2">{group.title}</h4>
            {group.title === 'Shop' && (
              <Link
                to="https://www.ktwizstore.co.kr/"
                className="block rounded w-full py-1 hover:bg-wiz-white hover:bg-opacity-10"
                onClick={onClose}
              >
                바로가기
              </Link>
            )}
            <ul className="flex flex-col gap-2">
              {group.sub.map((menu) => (
                <Link
                  to={menu.link}
                  className="rounded py-1 hover:bg-wiz-white hover:bg-opacity-10"
                  onClick={onClose}
                >
                  {menu.title}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* 사이드바 외부 배경 */}
      {open && (
        <div className="absolute bg-black bg-opacity-50 top-0 left-0 w-screen h-screen" />
      )}
    </div>
  );
}

export default Sidebar;
