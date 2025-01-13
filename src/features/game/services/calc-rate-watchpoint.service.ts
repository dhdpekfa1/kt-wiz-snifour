import { Pitcher } from '../types/watch-point';

const calcRate = (
  home: {
    value: string | number;
    game: number;
  },
  visit: {
    value: string | number;
    game: number;
  }
) => {
  const homeStat = Number(home.value) / home.game;
  const visitStat = Number(visit.value) / visit.game;

  const max =
    homeStat > 1 && visitStat > 1
      ? Math.ceil(Math.max(homeStat, visitStat) / 10) * 10
      : Math.max(homeStat, visitStat);

  return {
    home: `${(homeStat / max) * 100}%`,
    visit: `${(visitStat / max) * 100}%`,
    win: homeStat > visitStat ? 'h' : 'v',
  };
};

export const getWatchPointChartData = (
  homePitcher: Pitcher,
  visitPitcher: Pitcher
) => [
  {
    label: '평균자책점',
    ...calcRate(
      { value: homePitcher.era, game: homePitcher.gamenum },
      { value: visitPitcher.era, game: visitPitcher.gamenum }
    ),
  },
  {
    label: '승률',
    ...calcRate(
      { value: homePitcher.wra, game: homePitcher.gamenum },
      { value: visitPitcher.wra, game: visitPitcher.gamenum }
    ),
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
