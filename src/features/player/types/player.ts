interface BasePlayer {
  backnum: string;
  gyear: string;
  hittype: string;
  playerName: string;
  position: string;
  teamName: string;
  playerPrvwImg: string;
}

// 코치 타입
export interface Coach extends BasePlayer {
  career: string;
  height: string;
  heightWeight: string;
  playerPrvwImg2?: string;
  playerPrvwImg3?: string;
}

// 선수 타입
export interface Player extends BasePlayer {
  energybar: number;
  energybarName: string;
  rank: number;
  rankName: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  hasFanpage: string; // "Y" 또는 "N"
}
