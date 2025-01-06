import { ReactNode, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Button,
} from '@/components/ui';
import { useUserStore } from '@/store/useUserStore';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router';

const EditProfileDialog = ({ children }: { children: ReactNode }) => {
  const { sub, email, nickname, setNickname, setSub, setEmail } =
    useUserStore();
  const [localNickname, setLocalNickname] = useState<string | null>(nickname);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (sub && localNickname !== nickname) {
      const { data, error } = await supabase.auth.updateUser({
        data: { nickname: localNickname },
      });
      if (error) {
        alert('닉네임 변경에 실패했습니다.\n다시 시도해주세요.');
      }
      if (data && localNickname && localNickname !== nickname) {
        setNickname(localNickname);
        setIsOpen(false);
        alert('닉네임이 변경되었습니다.');
      }
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('로그아웃에 실패했습니다.\n다시 시도해주세요.');
    }
    setIsOpen(false);
    setSub(null);
    setEmail(null);
    setNickname(null);
    alert('로그아웃되었습니다.');
    navigate('/'); // 홈으로 이동
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-wiz-black text-wiz-white border-wiz-red border-opacity-30">
        <DialogHeader>
          <DialogTitle>회원 정보 수정</DialogTitle>
          <DialogDescription>닉네임을 변경할 수 있습니다.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* 이메일 (비활성화) */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              이메일
            </Label>
            <Input
              disabled
              id="email"
              value={email || '이메일 없음'}
              className="col-span-3"
            />
          </div>
          {/* 닉네임 (수정 가능) */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nickname" className="text-right">
              닉네임
            </Label>
            <Input
              id="nickname"
              value={localNickname || ''}
              onChange={(e) => setLocalNickname(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={handleLogout}
            className="bg-wiz-red bg-opacity-20 hover:bg-wiz-red hover:bg-opacity-30"
          >
            로그아웃
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            className="bg-wiz-white bg-opacity-10 hover:bg-wiz-white hover:bg-opacity-20"
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { EditProfileDialog };
