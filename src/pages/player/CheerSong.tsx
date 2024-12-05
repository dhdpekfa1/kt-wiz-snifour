import { Tabs, TabsList, TabsTrigger } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import { Song, SongBoard } from '@/features/song';
import { TabsContent } from '@radix-ui/react-tabs';

const teamSong: Song = {
  title: 'AI 응원곡 everybody clap',
  player: 'team',
  lyrics: `everybody clap 짝짝짝짝 짝짝
리듬에 맞춰 짝짝짝짝 짝짝
승리를 위해 짝짝짝짝 짝짝
케이티 위즈 짝짝짝짝 짝짝


everybody clap 짝짝짝짝 짝짝
리듬에 맞춰 짝짝짝짝 짝짝
승리를 위해 짝짝짝짝 짝짝
케이티 위즈 짝짝짝짝 짝짝


(화이팅!)`,
  copyright: {
    singer: '가수',
    owner: {
      lyrics: '작사가',
      composition: '작곡가',
    },
  },
};

const playerSong: Song = {
  title: '제1응원가: 구단 자작곡',
  player: '강백호',
  lyrics: `kt wiz 강백호(호~)
kt wiz 강백호
승리를(호~)
위하여(호~)
k t wi z 강 백 호
(이상 2회 반복)`,
  copyright: {
    singer: '가수',
    owner: {
      lyrics: '작사가',
      composition: '작곡가',
    },
  },
};

function CheerSong() {
  return (
    <div className="w-[1200px]">
      {/* breadcrumbs */}
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'player', label: 'Player' },
          { key: 'cheer-song', label: '응원가', isActive: true },
        ]}
      />

      {/* tabs - 구단 응원가, 선수 응원가 */}
      <Tabs defaultValue="team" className="w-full flex flex-col items-center">
        <TabsList className="w-fit flex items-center gap-4 my-2">
          <TabsTrigger
            value="team"
            className="text-black text-lg bg-white rounded"
          >
            구단 응원가
          </TabsTrigger>
          <TabsTrigger
            value="player"
            className="text-black text-lg bg-white rounded"
          >
            선수 응원가
          </TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="w-full">
          <SongBoard song={teamSong} />
        </TabsContent>
        <TabsContent value="player" className="w-full">
          <SongBoard song={playerSong} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CheerSong;
