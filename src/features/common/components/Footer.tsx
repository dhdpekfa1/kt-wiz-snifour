import { cn } from '@/lib/utils';

function Footer() {
  return (
    <div
      className={cn(
        'w-full border-t flex justify-center py-7 bg-white pb-16',
        'md:pb-0'
      )}
    >
      <div
        className={cn(
          'w-full flex flex-col justify-between px-4',
          'md:flex-row',
          'lg:w-[1200px]'
        )}
      >
        {/* 케이티 위즈 로고 */}
        <div className={cn('w-24 mb-2', 'md:w-40', 'lg:w-52')}>
          <img src="/assets/img-logo-kr.svg" alt="" />
        </div>
        {/* footer 메뉴 및 정보 */}
        <div
          className={cn(
            'flex flex-col flex-1 justify-between gap-4 text-[0.6rem]',
            'md:text-xs',
            'lg:text-base'
          )}
        >
          <ul
            className={cn(
              'flex items-center font-semibold gap-6 text-[0.6rem]',
              'md:text-xs',
              'lg:text-base'
            )}
          >
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>이메일무단수집거부</li>
            <li>Sitemap</li>
          </ul>
          <div
            className={cn(
              'flex items-start text-[0.6rem]',
              'md:text-xs',
              'lg:text-sm'
            )}
          >
            <span className="min-w-14 md:min-w-[70px] text-[#0098af]">
              대표번호
            </span>
            <div>
              <p className="font-bold">1899-5916</p>
              <p className="text-gray-300">
                (운영시간 : 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기시작 전까지,
                월요일 및 주말 미경기 시 미운영)
              </p>
            </div>
          </div>
          <div
            className={cn(
              'flex items-start text-[0.6rem]',
              'md:text-xs',
              'lg:text-sm'
            )}
          >
            <span className="min-w-14 md:min-w-[70px] text-[#0098af]">
              주소
            </span>
            <span className="font-semibold">
              경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크
            </span>
          </div>
          <p
            className={cn(
              'text-[0.6rem] text-gray-500',
              'md:text-xs',
              'lg:text-sm'
            )}
          >
            Copyright 2022 kt sports. All rights reserved.
          </p>
        </div>
        {/* 관련 링크 */}
        <div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {/* sns */}
            <button type="button" className="w-4 md:w-6 lg:w-8 p-1">
              <img src="/assets/sns/ico-instagram@2x.png" alt="" />
            </button>
            <button type="button" className="w-2 md:w-4 lg:w-6">
              <img src="/assets/sns/ico-facebook@2x.png" alt="" />
            </button>
            <button type="button" className="w-4 md:w-6 lg:w-8">
              <img src="/assets/sns/ico-youtube@2x.png" alt="" />
            </button>
            <button type="button" className="w-2 md:w-4 lg:w-6">
              <img src="/assets/sns/ico-naver@2x.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
