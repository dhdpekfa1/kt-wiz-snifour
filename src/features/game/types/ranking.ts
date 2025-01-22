import { OverallBatterRank, OverallPitcherRank } from '@/features/common';

// 랭킹 정보 요청을 할 때 필요한 파라미터 타입
export interface RankingDto {
  gyear?: string;
  pname?: string;
  sortKey?: string;
}

/* 팀 랭킹 */
// 팀 랭킹 데이터 타입
export interface TeamStats {
  ab: number; // 타수
  bra: string; // 출루율
  continue1: string; // 연속
  drawn: number; // 무
  er: number; // 자책점
  era: string; // 평균 자책점
  game: number; // 경기 수
  gameFlag: number; //
  gb: string; // 게임 차
  gyear: string; // 경기 연도(시즌)
  hr: number; // 홈런
  hra: string; // 타율
  lastrank: number; // 지난 시즌 순위
  lose: number; // 패
  lra: string; // 장타율
  r: number; // 실점
  rank: number; // 순위
  run: number; // 득점
  sb: number; // 도루
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  teamNameEng: string; // 팀 이름(영어)
  win: number; // 승
  wra: string; // 승률
}

// 팀 간 승패 성적 데이터 타입
export interface TeamVS {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
}

// 팀 랭킹 응답 타입
export interface TeamRankingResponse {
  data: {
    list: TeamStats[];
  };
}

// 팀 간 승패 성적 응답 타입
export interface TeamVSResponse {
  data: {
    list: TeamVS[];
  };
}

/* 투수 순위 */
// 투수 순위 응답 타입
export interface PitcherRankingResponse {
  data: {
    list: OverallPitcherRank[];
  };
}

/* 타자 순위 */
// 타자 순위 응답 타입
export interface BatterRankingResponse {
  data: {
    list: OverallBatterRank[];
  };
}

/* 관중 현황 */
// 관중 현황 데이터 타입
export interface CrowdRank {
  crowd: number;
  game: number;
  teamCode: string;
  teamName: string;
}

// 관중 현황 순위 응답 타입
export interface CrowdRankingResponse {
  data: {
    list: CrowdRank[];
  };
}
