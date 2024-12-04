import { useState } from 'react';
import { Link } from 'react-router';

const navMenus = [
  {
    title: 'KT Wiz',
    sub: [
      { title: 'kt wiz는?', link: '/ktwiz/about' },
      { title: '구단 BI', link: '/ktwiz/bi/symbol' },
      { title: '회원 정책', link: '/ktwiz/policy/regular' },
      { title: '스폰서', link: '/ktwiz/sponsor' },
      { title: '월페이퍼', link: '/ktwiz/wallpaper' },
    ],
  },
  {
    title: 'Wiz Park',
    sub: [
      { title: '수원 kt wiz park', link: '/wizpark/intro' },
      { title: '주차 예약', link: '/wizpark/parking' },
      { title: '찾아오기', link: '/wizpark/location' },
      { title: '익산야구장', link: '/wizpark/iksan' },
    ],
  },
  {
    title: 'Game',
    sub: [
      { title: '정규리그', link: '/game/regular/schedule' },
      { title: '퓨처스리그', link: '/game/futures/schedule' },
    ],
  },
  {
    title: 'Player',
    sub: [
      { title: '코칭스텝', link: '/player/coach' },
      { title: '투수', link: '/player/pitcher' },
      { title: '타자', link: '/player/catcher' },
      { title: '응원단', link: '/player/cheer' },
      { title: '응원가', link: '/player/song' },
    ],
  },
  {
    title: 'Media',
    sub: [
      { title: 'wiz 뉴스', link: '/media/wiznews' },
      { title: 'wiz 스토리', link: '/media/wizstory' },
      { title: 'wiz 포토', link: '/media/photos/1' },
      { title: '시구자 정보', link: '/media/firstpitch' },
      { title: '하이라이트', link: '/media/highlight' },
      { title: 'Live 영상', link: '/media/live/pts' },
    ],
  },
  { title: 'Shop', link: 'https://www.ktwizstore.co.kr/', sub: [] },
  {
    title: '티켓구매',
    sub: [
      { title: '티켓예매', link: '/ticket/reservation' },
      { title: '단체관람', link: '/ticket/group' },
      { title: '입장 및 좌석 정보', link: '/ticket/seatmap' },
    ],
  },
];

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full sticky top-0 z-10 ${
        isHovered ? 'bg-white h-96' : 'bg-black h-28 overflow-hidden'
      } text-white flex flex-col justify-between items-center transition-all duration-150 origin-top`}
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
            <Link to="https://b2b.ktwiz.co.kr/">
              <li>스폰서</li>
            </Link>
            <Link to="/login">
              <li>로그인</li>
            </Link>
            <Link to="/join">
              <li>회원가입</li>
            </Link>
            <Link to="http://kt-sports.co.kr/sports/site/main.do">
              <li>KT Sports</li>
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
                {menu.title}
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
                    className="py-1 cursor-pointer"
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

export default Header;
