import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { TeamVS } from '@/features/game/types/team-ranking';

interface ArrangedTeamVS {
  [key: string]: {
    [vsteam: string]: { win: number; lose: number; drawn: number };
  };
}

function TeamVSTable() {
  const [vs, setVs] = useState<TeamVS[]>([]);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const vsOrder = ['KT', 'SS', 'OB', 'LG', 'WO', 'LT', 'SK', 'NC', 'HT', 'HH'];
  const teamName: { [key: string]: string } = {
    KT: 'KT',
    SS: '삼성',
    OB: '두산',
    LG: 'LG',
    WO: '키움',
    LT: '롯데',
    SK: 'SSG',
    NC: 'NC',
    HT: 'KIA',
    HH: '한화',
  };

  const arrangeVS = (data: TeamVS[]) => {
    const teamRecords: {
      [key: string]: {
        [vsteam: string]: { win: number; lose: number; drawn: number };
      };
    } = {};

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

  const arrangedVS: ArrangedTeamVS = useMemo(
    () => arrangeVS(vs),
    [vs, arrangeVS]
  );

  useEffect(() => {
    const getTeamVS = async () => {
      try {
        const { data, status } = await axios.get(`${API_URL}/game/rank/teamvs`);

        if (status === 200 && data) {
          setVs(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTeamVS();
  }, []);

  if (Object.keys(arrangedVS).length === 0) {
    return <div>로딩 중...</div>;
  }

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="font-semibold border-none">
          <TableHead className="text-center bg-wiz-white bg-opacity-30">
            팀명
          </TableHead>
          {vsOrder.map((teamCode) => (
            <TableHead
              key={`th-${teamCode}`}
              className={`text-center ${
                teamCode === 'KT'
                  ? 'bg-wiz-red bg-opacity-70'
                  : 'bg-wiz-white bg-opacity-30'
              } `}
            >
              {teamName[teamCode]}
              <br />
              (승-패-무)
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {vsOrder.map((teamCode) => (
          <TableRow
            key={`tr-${teamCode}`}
            className={`${
              teamCode === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            } border-b-wiz-white border-opacity-10`}
          >
            <TableCell>{teamName[teamCode]}</TableCell>
            {arrangedVS[teamCode] &&
              vsOrder.map((vsTeamCode, index) => {
                return (
                  <TableCell
                    key={`${teamCode}-${vsTeamCode}`}
                    className={`${
                      index === 0
                        ? teamCode === 'KT'
                          ? undefined
                          : 'bg-wiz-red bg-opacity-70 font-bold'
                        : undefined
                    }`}
                  >
                    {teamCode === vsTeamCode
                      ? null
                      : `${arrangedVS[teamCode][vsTeamCode]?.win || 0}-${
                          arrangedVS[teamCode][vsTeamCode]?.lose || 0
                        }-${arrangedVS[teamCode][vsTeamCode]?.drawn || 0}`}
                  </TableCell>
                );
              })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TeamVSTable };
