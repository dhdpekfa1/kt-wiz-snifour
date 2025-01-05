import { TeamVS } from '../types/ranking';
export interface TeamVSResult {
  win: number;
  lose: number;
  drawn: number;
}
export interface ArrangedTeamVS {
  teamName: string;
  teamCode: string;
  [vsTeamCode: string]: TeamVSResult | string;
}

// 팀(key)이 상대팀(vsTeam)을 상대로 어떤 성적을 얻었는지 객체화 하는 함수
export const arrangeVS = (data: TeamVS[]): Map<string, ArrangedTeamVS> => {
  const teamRecords = new Map<string, ArrangedTeamVS>();

  for (const vs of data) {
    if (!teamRecords.get(vs.teamCode)) {
      teamRecords.set(vs.teamCode, {
        teamName: vs.teamName,
        teamCode: vs.teamCode,
      });
    }

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const teamRecord = teamRecords.get(vs.teamCode)!;
    teamRecord[vs.vsTeamCode] = {
      win: vs.win,
      lose: vs.lose,
      drawn: vs.drawn,
    };
  }

  return teamRecords;
};
