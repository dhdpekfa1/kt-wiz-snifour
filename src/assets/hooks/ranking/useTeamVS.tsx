import { useEffect, useState } from 'react';
import { TeamVS } from '@/features/game/types/team-ranking';
import { getTeamVS } from '@/features/game/apis/ranking/team';

interface ArrangedTeamVS {
  [key: string]: {
    [vsTeam: string]: { win: number; lose: number; drawn: number };
  };
}

export function useTeamVS() {
  const [vs, setVs] = useState<ArrangedTeamVS>({} as ArrangedTeamVS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 팀(key)이 상대팀(vsTeam)을 상대로 어떤 성적을 얻었는지 객체화 하는 함수
  const arrangeVS = (data: TeamVS[]) => {
    const teamRecords: ArrangedTeamVS = {};

    for (const vs of data) {
      if (!teamRecords[vs.teamCode]) {
        teamRecords[vs.teamCode] = {};
      }
      teamRecords[vs.teamCode][vs.vsTeamCode] = {
        win: vs.win,
        lose: vs.lose,
        drawn: vs.drawn,
      };
    }

    return teamRecords;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeamVS();
        const arrangedVS: ArrangedTeamVS = arrangeVS(data);

        setVs(arrangedVS);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [arrangeVS]);

  return { vs, loading, error };
}
