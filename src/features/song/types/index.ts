export interface Song {
  title: string;
  player: string;
  lyrics: string;
  copyright: {
    singer?: string;
    owner: {
      lyrics: string;
      composition: string;
    };
  };
}
