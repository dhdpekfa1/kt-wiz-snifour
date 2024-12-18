// 공통 속성만 포함하는 기본 인터페이스
interface PlayerBase {
  backnum: string;
  energybar: number;
  energybarName: string;
  gyear: string;
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  position: string;
  teamName: string;
}

// 감독 (hasFanpage 제외)
export interface Coach extends PlayerBase {
  position: '감독';
  height: string;
  heightWeight: string;
  career: string;
  birth: string;
}

// 선수
export interface Player extends PlayerBase {
  position: string;
  rank: number;
  rankName: string;
  hasFanpage: string;
}
