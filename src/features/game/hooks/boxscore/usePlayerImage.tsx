import { useEffect, useState } from 'react';
import { getPlayerImage } from '../../apis/boxscore/player-image';

const usePlayerImage = (team: string | undefined, name: string) => {
  const [playerImage, setPlayerImage] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!team || !name) return;
    const fetchData = async () => {
      try {
        const data = await getPlayerImage(team, name);

        setPlayerImage(data);
      } catch (err) {
        console.error(err);
        setError('오류!');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [team, name]);

  return { playerImage, loading, error };
};

export default usePlayerImage;
