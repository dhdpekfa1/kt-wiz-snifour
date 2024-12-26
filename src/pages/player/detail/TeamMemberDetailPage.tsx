import { useParams } from 'react-router';
import CoachDetailPage from './CoachDetailPage';
import PlayerDetailPage from './PlayerDetailPage';

function TeamMemberDetailPage() {
  const { position } = useParams();

  switch (position) {
    case 'coach':
      return <CoachDetailPage />;
    case 'pitcher':
    case 'catcher':
    case 'infielder':
    case 'outfielder':
      return <PlayerDetailPage />;
    default:
      return <div>Position not found</div>;
  }
}

export default TeamMemberDetailPage;
