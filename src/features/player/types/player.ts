interface BasePlayer {
  backnum: string;
  birth: string;
  career: string;
  career2?: string;
  engName: string;
  gyear: string;
  height: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  playerName: string;
  playerPrvwImg: string;
  playerPrvwImg1: string;
  playerPrvwImg2?: string;
  playerPrvwImg3?: string;
  position: string;
  teamCode: string;
  teamName: string;
  weight: string;
  hittype: string;
  pcode: string;
}

// 코치 타입
export interface Coach extends BasePlayer {
  heightWeight: string;
}

export interface Player extends BasePlayer {
  energybar: number;
  energybarName: string;
  money: string;
  promise: string;
  rank: number;
  rankName: string;
}
