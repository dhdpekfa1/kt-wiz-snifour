import { useParams } from 'react-router';
import CoachPage from './CoachPage';
import PitcherPage from './PitcherPage';
import BatterPage from './BatterPage';
import CheerSongPage from './CheerSongPage';
import CheerleaderPage from './CheerleaderPage';

function PlayerListPage() {
  const { position } = useParams();

  switch (position) {
    case 'coach':
      return <CoachPage />;
    case 'pitcher':
      return <PitcherPage />;
    case 'catcher':
    case 'infielder':
    case 'outfielder':
      return <BatterPage />;
    case 'cheer':
      return <CheerleaderPage />;
    case 'song':
      return <CheerSongPage />;
    default:
      return <div>Position not found</div>;
  }
}

export default PlayerListPage;
