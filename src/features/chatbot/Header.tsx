import { X } from 'lucide-react';

const Header = () => {
  const handleClose = () => {
    return <div>초기 UI</div>;
  };

  return (
    <div className="w-full flex justify-between items-center p-5 bg-wiz-red text-wiz-white">
      <h4 className="font-semibold">KT wiz 챗봇</h4>
      <X onClick={handleClose} />
    </div>
  );
};

export default Header;
