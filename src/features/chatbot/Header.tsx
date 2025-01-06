import { ArrowLeft, X } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-5 bg-wiz-red text-wiz-white">
      <ArrowLeft />
      <h4>KT wiz 챗봇</h4>
      <X />
    </div>
  );
};

export default Header;
