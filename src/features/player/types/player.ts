// 공통 속성만 포함하는 기본 인터페이스
interface PlayerItemBase {
  backnum: string;
  gyear: string;
  hittype: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  position: string;
  teamName: string;
}

// 감독 리스트 아이템
export interface CoachListItem extends PlayerItemBase {
  birth: string;
  career: string;
  height: string;
  heightWeight: string;
  orderSeq: string;
  playerPrvwImg2: string;
  playerPrvwImg3: string;
  teamCode: string;
  weight: string;
}

export interface CoachItem extends CoachListItem {
  engName: string;
}

// 선수
export interface PlayerListItem extends PlayerItemBase {
  energybar: number;
  energybarName: string;
  hasFanpage: string;
  mobilePlayerImg: string;
  rank: number;
  rankName: string;
}
export interface PlayerDto {
  pcode?: string;
}

export interface PlayerListResponse {
  data: {
    list: CoachListItem[] | PlayerListItem[];
  };
}

export interface CoachDetailResponse {
  data: {
    coachstep: CoachItem;
  };
}
