import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
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
      <DialogContent className="w-80 p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold mb-1">
            로그인 후 이용 가능합니다.
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          <button
            type="button"
            className="px-4 py-2 bg-wiz-red text-white rounded font-bold mr-8"
            onClick={() => navigate('/login')}
          >
            로그인
          </button>
          <DialogClose asChild>
            <button
              type="button"
              className="px-4 py-2 bg-black text-white rounded font-bold"
            >
              취소
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { LoginConfirmationDialog };
