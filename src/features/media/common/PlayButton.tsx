import { PlayIcon } from 'lucide-react';

const PlayButton = () => {
  return (
    <div className="bg-wiz-red/80 rounded-lg p-2">
      <PlayIcon
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 fill-wiz-white"
      />
    </div>
  );
};

export default PlayButton;
