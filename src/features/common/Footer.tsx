import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function Footer() {
  return (
    <div className="w-full border-t flex justify-center py-7">
      <div className="w-[1200px] flex justify-between">
        {/* 케이티 위즈 로고 */}
        <div className="w-52">
          <img src="/assets/img-logo-kr.svg" alt="" />
        </div>
        {/* footer 메뉴 및 정보 */}
        <div className="flex flex-col flex-1 justify-between gap-4">
          <ul className="flex items-center font-semibold gap-6">
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>이메일무단수집거부</li>
            <li>Sitemap</li>
          </ul>
          <div className="flex items-start text-sm">
            <span className="w-[70px] text-[#0098af]">대표번호</span>
            <div>
              <p className="font-bold">1899-5916</p>
              <p className="text-gray-300">
                (운영시간 : 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기시작 전까지,
                월요일 및 주말 미경기 시 미운영)
              </p>
            </div>
          </div>
          <div className="flex items-start text-sm">
            <span className="w-[70px] text-[#0098af]">주소</span>
            <span className="font-semibold">
              경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Copyright 2022 kt sports. All rights reserved.
          </p>
        </div>
        {/* 관련 링크 */}
        <div className="w-56">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="kt 그룹사 및 관련사이트" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">KT estate</SelectItem>
                <SelectItem value="banana">KT telecop</SelectItem>
                <SelectItem value="blueberry">KT sat</SelectItem>
                <SelectItem value="grapes">KT engineering</SelectItem>
                <SelectItem value="pineapple">KT is</SelectItem>
                <SelectItem value="pineapple">KT cs</SelectItem>
                <SelectItem value="pineapple">KT m&s</SelectItem>
                <SelectItem value="pineapple">KT linkus</SelectItem>
                <SelectItem value="pineapple">KT ds</SelectItem>
                <SelectItem value="pineapple">KT NexR</SelectItem>
                <SelectItem value="pineapple">INITECH</SelectItem>
                <SelectItem value="pineapple">kt M mobile</SelectItem>
                <SelectItem value="pineapple">KT alpha</SelectItem>
                <SelectItem value="pineapple">지니뮤직</SelectItem>
                <SelectItem value="pineapple">nasmedia</SelectItem>
                <SelectItem value="pineapple">KT 닷컴</SelectItem>
                <SelectItem value="pineapple">KT Shop</SelectItem>
                <SelectItem value="pineapple">kt commerce</SelectItem>
                <SelectItem value="pineapple">KT 동우회</SelectItem>
                <SelectItem value="pineapple">인재채용</SelectItem>
                <SelectItem value="pineapple">KT 파트너포탈</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Footer;
