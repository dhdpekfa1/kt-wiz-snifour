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

export interface TeamVS {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
}
