import {
  BatterSeasonSummaryBase,
  GameRecord,
  PitcherSeasonSummaryBase,
  PlayerBase,
} from './detail';
import { CoachListItem, PlayerListItem } from './list';

/* 요청 파라미터 타입 */
export interface PlayerDto {
  pcode?: string;
  position?: string;
}

/* 리스트 타입 */
// 코치 리스트 응답 타입
export interface CoachListResponse {
  data: {
    list: CoachListItem[];
  };
}

// 선수 리스트 응답 타입
export interface PlayerListResponse {
  data: PlayerListItem[];
}

/* 디테일 타입 */
// 코치 디테일 타입
export interface CoachItem extends CoachListItem {
  engName: string;
}

// 선수 디테일 타입
export interface PlayerItem {
  gameplayer: PlayerBase;
  recentgamerecordlist: GameRecord[];
  recentgamerecordlistfutures: GameRecord[];
  seasonsummary: PitcherSeasonSummaryBase | BatterSeasonSummaryBase;
  seasonsummaryfutures: PitcherSeasonSummaryBase | BatterSeasonSummaryBase;
  yearrecordlist: (PitcherSeasonSummaryBase | BatterSeasonSummaryBase)[];
}

// 코치 디테일 응답 타입
export interface CoachDetailResponse {
  data: {
    coachstep: CoachItem;
  };
}

// 선수 디테일 응답 타입
export interface PlayerDetailResponse {
  data: PlayerItem;
}
