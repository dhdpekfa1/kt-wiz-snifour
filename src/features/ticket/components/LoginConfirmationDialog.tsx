import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';

const LoginConfirmationDialog = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-80 p-6 bg-wiz-white rounded-lg shadow-lg text-center flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-base md:text-lg font-bold mb-1">
            로그인 후 이용 가능합니다.
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-between items-center gap-2 w-full px-6 text-base md:text-lg">
          <button
            type="button"
            className="bg-wiz-red text-wiz-white rounded font-bold w-full py-1 md:py-2 flex items-center justify-center hover:bg-wiz-red hover:bg-opacity-90"
            onClick={() => navigate('/login')}
          >
            로그인
          </button>
          <DialogClose asChild>
            <button
              type="button"
              className="bg-wiz-black text-wiz-white rounded font-bold w-full py-1 md:py-2 flex items-center justify-center hover:bg-wiz-black hover:bg-opacity-90"
            >
              취소
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LoginConfirmationDialog };
