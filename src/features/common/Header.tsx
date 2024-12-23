import { navMenus } from '@/constants/nav-menus';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';

function WebHeader({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'w-screen fixed top-0 z-10 text-white hidden lg:flex flex-col justify-between items-center transition-all duration-150 origin-top',
        isHovered ? 'bg-white h-96' : 'bg-black h-28 overflow-hidden',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[1200px]">
        {/* 윗단 - 스폰서, 로그인, 회원가입, KT Sports */}
        <nav className="">
          <ul
            className={`flex items-center justify-end py-2 gap-4 text-sm ${
              isHovered && 'text-black'
            }`}
          >
            <Link to="/login">
              <li>로그인</li>
            </Link>
            <Link to="/join">
              <li>회원가입</li>
            </Link>
          </ul>
        </nav>

        {/* 아랫단 - KT Wiz, Wiz Park, Game, Player, Media, Shop, 티켓구매  */}
        {/* hover 안 했을 때 */}
        <nav className={isHovered ? 'text-black' : 'text-white'}>
          <ul className="grid grid-cols-8 text-xl font-semibold ">
            <li className="">
              {isHovered ? (
                <Link to="/">
                  <img
                    src="/assets/img-logo-black.svg"
                    alt=""
                    className="mt-2"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <img src="/assets/img-logo.svg" alt="" className="mt-2" />
                </Link>
              )}
            </li>
            {navMenus.map((menu) => (
              <li
                key={menu.title}
                className={`w-fit border-b-4 border-b-transparent py-6 cursor-pointer hover:border-b-[#d60c0c] ${
                  menu.title === '티켓구매' ? 'text-[#d60c0c]' : ''
                }`}
              >
                {menu.title === 'Shop' ? (
                  <Link to="https://www.ktwizstore.co.kr/">{menu.title}</Link>
                ) : (
                  menu.title
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* hover 했을 때 서브메뉴 렌더 */}
        <div className={isHovered ? 'block' : 'hidden'}>
          <div className="grid grid-cols-8 text-black">
            <div className="w-[184px]" />
            {navMenus.map((menu) => (
              <ul key={`for-${menu.title}`} className="w-36 py-4">
                {menu.sub.map((subMenu) => (
                  <li
                    key={`sub-${subMenu.title}`}
                    className="py-1 cursor-pointer hover:text-wiz-red"
                  >
                    <Link to={subMenu.link}>{subMenu.title}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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

function MobileHeader() {
  const navigate = useNavigate();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleSidebarClose = () => setSideBarOpen(false);

  return (
    <div className="w-screen h-12 lg:hidden flex items-center justify-center fixed top-0 z-10 bg-black">
      <Sidebar open={sideBarOpen} onClose={handleSidebarClose} />
      <AlignJustify
        className="text-white absolute top-3 left-4 w-4"
        onClick={() => setSideBarOpen((prev) => !prev)}
      />
      <img
        src="/assets/img-logo.svg"
        alt=""
        className="h-8 my-1 cursor-pointer"
        onClick={() => navigate('/')}
        onKeyUp={() => navigate('/')}
      />
    </div>
  );
}

function Header() {
  return (
    <>
      <WebHeader />
      <MobileHeader />
    </>
  );
}

export default Header;
