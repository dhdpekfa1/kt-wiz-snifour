import { StartingPitcher } from '../types/watch-point';

const calcRate = (
  home: {
    value: string | number;
    game?: number;
  },
  visit: {
    value: string | number;
    game?: number;
  }
) => {
  const homeStat = home.game
    ? Number(home.value) / home.game
    : Number(home.value);
  const visitStat = visit.game
    ? Number(visit.value) / visit.game
    : Number(visit.value);

  const max =
    homeStat > 1 && visitStat > 1
      ? Math.ceil(Math.max(homeStat, visitStat) / 10) * 10
      : Math.ceil(Math.max(homeStat, visitStat));

  return {
    home: `${(homeStat / max) * 100}%`,
    visit: `${(visitStat / max) * 100}%`,
    win: homeStat > visitStat ? 'h' : 'v',
  };
};

export const getWatchPointChartData = (
  homePitcher: StartingPitcher,
  visitPitcher: StartingPitcher
) => [
  {
    label: '평균자책점',
    ...calcRate({ value: homePitcher.era }, { value: visitPitcher.era }),
  },
  {
    label: '승률',
    ...calcRate({ value: homePitcher.wra }, { value: visitPitcher.wra }),
  },
  {
    label: '피안타',
    ...calcRate(
      { value: homePitcher.hit, game: homePitcher.gamenum },
      { value: visitPitcher.hit, game: visitPitcher.gamenum }
    ),
  },
  {
    label: '피홈런',
    ...calcRate(
      { value: homePitcher.hr, game: homePitcher.gamenum },
      { value: visitPitcher.hr, game: visitPitcher.gamenum }
    ),
  },
  {
    label: '볼넷',
    ...calcRate(
      { value: homePitcher.bb, game: homePitcher.gamenum },
      { value: visitPitcher.bb, game: visitPitcher.gamenum }
    ),
  },
  {
    label: '사구',
    ...calcRate(
      { value: homePitcher.hp, game: homePitcher.gamenum },
      { value: visitPitcher.hp, game: visitPitcher.gamenum }
    ),
  },
  {
    label: '삼진',
    ...calcRate(
      { value: homePitcher.kk, game: homePitcher.gamenum },
      { value: visitPitcher.kk, game: visitPitcher.gamenum }
    ),
  },
  {
    label: '실점',
    ...calcRate(
      { value: homePitcher.r, game: homePitcher.gamenum },
      { value: visitPitcher.r, game: visitPitcher.gamenum }
    ),
  },
  {
    label: '자책점',
    ...calcRate(
      { value: homePitcher.er, game: homePitcher.gamenum },
      { value: visitPitcher.er, game: visitPitcher.gamenum }
    ),
  },
];
