export type HorizontalType = {
  id: number;
  title: string;
  description: string;
  date: string;
  views: number;
  thumbnail?: string;
};

export type ListType = {
  id: number;
  title: string;
  date: string;
  thumbnail?: string;
};

export type StoryType = ListType & {
  src?: string;
  description?: string;
};

export type PhotoType = ListType & {
  catetory: string;
};

export const newsItems: HorizontalType[] = [
  {
    id: 1,
    title: '[안내] 2024 kt wiz 73승 기념백지 수령',
    description:
      '안녕하세요, kt wiz 야구단입니다. 2024 시즌권 회원분들께선 11월 23일 토요일 2024 팬 페스티벌 수원컨벤션센터 3층 입장 확인처에서 73승 기념뱃지를 수령 가능하십니다. 수령 시 본인(회원)확인이 필수로 진행되며, 자세한 내용은 공지 내 이미지를 참고해주세요.',
    date: '2024.11.21',
    views: 69,
    thumbnail:
      'https://wizzap.ktwiz.co.kr/files/article/2024/11/21/20241121180028.b90-9f1f4aa2645c.jpg',
  },
  {
    id: 2,
    title: '[안내] 제13회 수원사랑의산타 봉사 신청 안내',
    description:
      '안녕하세요, kt wiz 야구단입니다. 2024 시즌권 회원분들께선 11월 23일 토요일 2024 팬 페스티벌 수원컨벤션센터 3층 입장 확인처에서 73승 기념뱃지를 수령 가능하십니다. 수령 시 본인(회원)확인이 필수로 진행되며, 자세한 내용은 공지 내 이미지를 참고해주세요.',
    date: '2024.11.21',
    views: 43,
    thumbnail:
      'https://wizzap.ktwiz.co.kr/files/article/2024/11/21/20241121171742.4ed-b95bbcf64940.jpg',
  },
  {
    id: 3,
    title: '[안내] 제13회 수원사랑의산타 봉사 신청 안내',
    description:
      '안녕하세요, kt wiz 야구단입니다. 2024 시즌권 회원분들께선 11월 23일 토요일 2024 팬 페스티벌 수원컨벤션센터 3층 입장 확인처에서 73승 기념뱃지를 수령 가능하십니다. 수령 시 본인(회원)확인이 필수로 진행되며, 자세한 내용은 공지 내 이미지를 참고해주세요.',
    date: '2024.11.21',
    views: 43,
    thumbnail:
      'https://wizzap.ktwiz.co.kr/files/article/2024/11/21/20241121180028.b90-9f1f4aa2645c.jpg',
  },
];

export const newsItems2: HorizontalType[] = [
  {
    id: 11,
    title: 'kt wiz, 로하스와 2025시즌도 함께한다',
    description:
      '▶ 2024시즌 대부분의 타격 지표에서 최상위권에 랭크되며 건재함 과시 kt wiz 프로야구단(대표이사 이호식, ktwiz.co.kr)이 3일(화) 외국인 타자 멜 로하스 주니어와 총액 180만 달러에 재계약했다고 밝혔다. 2017년 KT에 입단한 로하스는 2020년까지 4시즌 동안 KBO리그 최정상급 외국인 타자로 맹활약을 했다. 2020 시즌에는 타격 4관왕에 오르며 정규시즌 MVP를 차지했고, 2019~2020년에는 2년 연속 외야수 골든글러브도 수상했다. 4년 만에 KBO리그에 복귀한 2024 시즌 144경기 타율 0.329, 188안타(리그 4위)와 112타점(리그 5위), 108득점(2위), 32홈런(6위)을 기록하는 등 최정상급 활약을 펼치며 건재함을 과시했다. 나도현 kt wiz 단장은 "로하스는 지난 시즌 대부분의 타격 지표에서 상위권을 차지하며 여전한 경쟁력을 보여줬다”며, “실력과 인성을 두루 갖춘 검증된 선수로 내년 시즌에도 팀 타선을 이끌어주길 기대한다"고 밝혔다. 이로써 KT는 2025 시즌 외국인 선수 구성을 마쳤다.',
    date: '2024.12.21',
    views: 69,
  },
  {
    id: 22,
    title: 'kt wiz, 로하스와 2025시즌도 함께한다',
    description:
      '▶ 2024시즌 대부분의 타격 지표에서 최상위권에 랭크되며 건재함 과시 kt wiz 프로야구단(대표이사 이호식, ktwiz.co.kr)이 3일(화) 외국인 타자 멜 로하스 주니어와 총액 180만 달러에 재계약했다고 밝혔다. 2017년 KT에 입단한 로하스는 2020년까지 4시즌 동안 KBO리그 최정상급 외국인 타자로 맹활약을 했다. 2020 시즌에는 타격 4관왕에 오르며 정규시즌 MVP를 차지했고, 2019~2020년에는 2년 연속 외야수 골든글러브도 수상했다. 4년 만에 KBO리그에 복귀한 2024 시즌 144경기 타율 0.329, 188안타(리그 4위)와 112타점(리그 5위), 108득점(2위), 32홈런(6위)을 기록하는 등 최정상급 활약을 펼치며 건재함을 과시했다. 나도현 kt wiz 단장은 "로하스는 지난 시즌 대부분의 타격 지표에서 상위권을 차지하며 여전한 경쟁력을 보여줬다”며, “실력과 인성을 두루 갖춘 검증된 선수로 내년 시즌에도 팀 타선을 이끌어주길 기대한다"고 밝혔다. 이로써 KT는 2025 시즌 외국인 선수 구성을 마쳤다.',
    date: '2024.12.21',
    views: 69,
  },
  {
    id: 33,
    title: 'kt wiz, 로하스와 2025시즌도 함께한다',
    description:
      '▶ 2024시즌 대부분의 타격 지표에서 최상위권에 랭크되며 건재함 과시 kt wiz 프로야구단(대표이사 이호식, ktwiz.co.kr)이 3일(화) 외국인 타자 멜 로하스 주니어와 총액 180만 달러에 재계약했다고 밝혔다. 2017년 KT에 입단한 로하스는 2020년까지 4시즌 동안 KBO리그 최정상급 외국인 타자로 맹활약을 했다. 2020 시즌에는 타격 4관왕에 오르며 정규시즌 MVP를 차지했고, 2019~2020년에는 2년 연속 외야수 골든글러브도 수상했다. 4년 만에 KBO리그에 복귀한 2024 시즌 144경기 타율 0.329, 188안타(리그 4위)와 112타점(리그 5위), 108득점(2위), 32홈런(6위)을 기록하는 등 최정상급 활약을 펼치며 건재함을 과시했다. 나도현 kt wiz 단장은 "로하스는 지난 시즌 대부분의 타격 지표에서 상위권을 차지하며 여전한 경쟁력을 보여줬다”며, “실력과 인성을 두루 갖춘 검증된 선수로 내년 시즌에도 팀 타선을 이끌어주길 기대한다"고 밝혔다. 이로써 KT는 2025 시즌 외국인 선수 구성을 마쳤다.',
    date: '2024.12.21',
    views: 69,
  },
];

export const storyItems: StoryType[] = [
  {
    id: 11111,
    title: 'KT WIZ 2024 시즌 하이라이트',
    description:
      '입대를! 명! 받았습니다✨ 논산에서 만난 까까머리 마법사들! 정운과 현인이 준영이에게 해준 조언은...? 00:00 머리 미는 삐약이.',
    date: '2024.11.21',
    thumbnail: 'https://i.ytimg.com/vi/k4RSdq2RKHY/hqdefault.jpg',
  },
  {
    id: 22222,
    title: '선수들의 훈련 현장 스케치',
    date: '2024.11.20',
    description:
      '입대를! 명! 받았습니다✨ 논산에서 만난 까까머리 마법사들! 정운과 현인이 준영이에게 해준 조언은...? 00:00 머리 미는 삐약이.',
    thumbnail: 'https://i.ytimg.com/vi/k4RSdq2RKHY/hqdefault.jpg',
  },
  {
    id: 33333,
    title: '팬들과 함께한 특별한 순간',
    date: '2024.11.19',
    description:
      '입대를! 명! 받았습니다✨ 논산에서 만난 까까머리 마법사들! 정운과 현인이 준영이에게 해준 조언은...? 00:00 머리 미는 삐약이.',
    thumbnail: 'https://i.ytimg.com/vi/k4RSdq2RKHY/hqdefault.jpg',
  },
];

export const photoItems: PhotoType[] = [
  {
    id: 123,
    catetory: '11월 26일 KBO 시상식',
    title: '허경민 선수!',
    date: '2024.11.26',
    thumbnail:
      'https://wizzap.ktwiz.co.kr/files/article/2024/10/14/20241014092430.7a1-b145e8fc3700.jpg',
  },
  {
    id: 241,
    catetory: '2024 스프링캠프',
    title: '선수들의 구슬땀!',
    date: '2024.02.15',
    thumbnail:
      'https://wizzap.ktwiz.co.kr/files/article/2024/10/14/20241014092430.7a1-b145e8fc3700.jpg',
  },
  {
    id: 3123,
    catetory: '팬 페스티벌 현장',
    title: '팬들과 함께한 특별한 순간',
    date: '2024.11.26',
    thumbnail:
      'https://wizzap.ktwiz.co.kr/files/article/2024/10/14/20241014092430.7a1-b145e8fc3700.jpg',
  },
];
