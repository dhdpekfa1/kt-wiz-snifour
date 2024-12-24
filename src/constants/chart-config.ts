const colorSet = [
  '#d60c0c',
  '#fb8500',
  '#ffb703',
  '#386641',
  '#a2d2ff',
  '#0077b6',
  '#8338ec',
  '#ffddd2',
  '#a7c957',
  '#f27059',
];

export const recentPitcherConfig = {
  hit: {
    label: '피안타',
    color: colorSet[0],
    isActive: true,
  },
  hr: {
    label: '피홈런',
    color: colorSet[1],
    isActive: false,
  },
  bb: {
    label: '볼넷',
    color: colorSet[2],
    isActive: false,
  },
  hp: {
    label: '사구',
    color: colorSet[3],
    isActive: false,
  },
  kk: {
    label: '탈삼진',
    color: colorSet[4],
    isActive: false,
  },
  r: {
    label: '실점',
    color: colorSet[5],
    isActive: false,
  },
  er: {
    label: '자책점',
    color: colorSet[6],
    isActive: false,
  },
};

export const yearPitcherConfig = {
  era: {
    label: '평균자책점',
    color: colorSet[0],
    isActive: true,
  },
  gamenum: {
    label: '경기',
    color: colorSet[1],
    isActive: false,
  },
  wra: {
    label: '승률',
    color: colorSet[2],
    isActive: false,
  },
  sv: {
    label: '세이브',
    color: colorSet[3],
    isActive: false,
  },
  hold: {
    label: '홀드',
    color: colorSet[4],
    isActive: false,
  },
  kk: {
    label: '탈삼진',
    color: colorSet[5],
    isActive: false,
  },
  hit: {
    label: '피안타',
    color: colorSet[6],
    isActive: false,
  },
  hr: {
    label: '피홈런',
    color: colorSet[7],
    isActive: false,
  },
  r: {
    label: '실점',
    color: colorSet[8],
    isActive: false,
  },
};

// TODO: 해당 데이터 맞는지 확인 후 수정 필요(ab, bb9 등)
export const TeamRankingPitcherConfig = {
  ab: {
    label: '희타',
    color: colorSet[0],
    isActive: true,
  },
  bb9: {
    label: '희비',
    color: colorSet[1],
    isActive: false,
  },
  bb: {
    label: '볼넷',
    color: colorSet[2],
    isActive: false,
  },
  bbhp: {
    label: '고의 4구',
    color: colorSet[3],
    isActive: false,
  },
  hp: {
    label: '사구',
    color: colorSet[4],
    isActive: false,
  },
  kk: {
    label: '탈삼진',
    color: colorSet[5],
    isActive: false,
  },
  wp: {
    label: '폭투',
    color: colorSet[6],
    isActive: false,
  },
  bk: {
    label: '보크',
    color: colorSet[7],
    isActive: false,
  },
  r: {
    label: '실점',
    color: colorSet[8],
    isActive: false,
  },
  er: {
    label: '자책점',
    color: colorSet[9],
    isActive: false,
  },
  bs: {
    label: '블론세이브',
    color: colorSet[0],
    isActive: false,
  },
  whip: {
    label: 'WHIP',
    color: colorSet[1],
    isActive: false,
  },
  hit: {
    label: '피안타율',
    color: colorSet[2],
    isActive: false,
  },
  qs: {
    label: 'QS',
    color: colorSet[3],
    isActive: false,
  },
};

// TODO: 해당 데이터 맞는지 확인 후 수정 필요(ab, bb9 등)
export const TeamRankingBatterConfig = {
  ab: {
    label: '타율',
    color: colorSet[0],
    isActive: true,
  },
  hit: {
    label: '안타',
    color: colorSet[1],
    isActive: false,
  },
  h2: {
    label: '2루타',
    color: colorSet[2],
    isActive: false,
  },
  h3: {
    label: '3루타',
    color: colorSet[3],
    isActive: false,
  },
  hr: {
    label: '홈런',
    color: colorSet[4],
    isActive: false,
  },
  rbi: {
    label: '타점',
    color: colorSet[5],
    isActive: false,
  },
  sb: {
    label: '도루',
    color: colorSet[6],
    isActive: false,
  },
  bb: {
    label: '볼넷',
    color: colorSet[7],
    isActive: false,
  },
  ibr: {
    label: '고의 4구',
    color: colorSet[8],
    isActive: false,
  },
  hp: {
    label: '사구',
    color: colorSet[9],
    isActive: false,
  },
  kk: {
    label: '삼진',
    color: colorSet[0],
    isActive: false,
  },
  gd: {
    label: '병살',
    color: colorSet[1],
    isActive: false,
  },
  slg: {
    label: '장타율',
    color: colorSet[2],
    isActive: false,
  },
  bra: {
    label: '출루율',
    color: colorSet[3],
    isActive: false,
  },
  err: {
    label: '실책',
    color: colorSet[4],
    isActive: false,
  },
  ops: {
    label: 'OPS',
    color: colorSet[5],
    isActive: false,
  },
};
