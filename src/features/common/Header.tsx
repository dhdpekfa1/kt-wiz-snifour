import { useState } from 'react';

const navMenus = [
  {
    title: 'KT Wiz',
    link: '',
    sub: [
      { title: 'kt wiz는?', link: '' },
      { title: '구단 BI', link: '' },
      { title: '회원 정책', link: '' },
      { title: '스폰서', link: '' },
      { title: '월페이퍼', link: '' },
    ],
  },
  {
    title: 'Wiz Park',
    link: '',
    sub: [
      { title: '수원 kt wiz park', link: '' },
      { title: '주차 예약', link: '' },
      { title: '찾아오기', link: '' },
      { title: '익산야구장', link: '' },
    ],
  },
  {
    title: 'Game',
    link: '',
    sub: [
      { title: '정규리그', link: '' },
      { title: '퓨처스리그', link: '' },
    ],
  },
  {
    title: 'Player',
    link: '',
    sub: [
      { title: '코칭스텝', link: '' },
      { title: '투수', link: '' },
      { title: '타자', link: '' },
      { title: '응원단', link: '' },
      { title: '응원가', link: '' },
      { title: '응원가 저작권', link: '' },
    ],
  },
  {
    title: 'Media',
    link: '',
    sub: [
      { title: 'wiz 뉴스', link: '' },
      { title: 'wiz 스토리', link: '' },
      { title: 'wiz 포토', link: '' },
      { title: '시구자 정보', link: '' },
      { title: '하이라이트', link: '' },
      { title: 'Live 영상', link: '' },
    ],
  },
  { title: 'Shop', link: '', sub: [] },
  {
    title: '티켓구매',
    link: '',
    sub: [
      { title: '티켓예매', link: '' },
      { title: '단체관람', link: '' },
      { title: '입장 및 좌석 정보', link: '' },
    ],
  },
];

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full sticky top-0 ${
        isHovered ? 'bg-white h-96' : 'bg-black h-28 overflow-hidden z-10'
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
            <li>스폰서</li>
            <li>로그인</li>
            <li>회원가입</li>
            <li>KT Sports</li>
          </ul>
        </nav>

        {/* 아랫단 - KT Wiz, Wiz Park, Game, Player, Media, Shop, 티켓구매  */}
        {/* hover 안 했을 때 */}
        <nav className={isHovered ? 'text-black' : 'text-white'}>
          <ul className="grid grid-cols-8 text-xl font-semibold ">
            <li className="">
              {isHovered ? (
                <img src="/assets/img-logo-black.svg" alt="" className="mt-2" />
              ) : (
                <img src="/assets/img-logo.svg" alt="" className="mt-2" />
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
                    {subMenu.title}
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
