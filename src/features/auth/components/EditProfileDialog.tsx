import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/components/ui';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { useUserStore } from '@/store/useUserStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import useUserSession from '../hooks/useUserSession';
import { nicknameSchema } from '../schemas/signupSchema';

export type NicknameValue = z.infer<typeof nicknameSchema>;

const EditProfileDialog = ({
  children,
  isHovered = false,
}: {
  children: ReactNode;
  isHovered?: boolean;
}) => {
  const { setNickname, resetUser } = useUserStore();
  const { email, nickname, sub } = useUserSession();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NicknameValue>({
    resolver: zodResolver(nicknameSchema),
    defaultValues: {
      nickname: nickname || '',
    },
  });

  const handleSave = async (data: NicknameValue) => {
    if (sub && data.nickname !== nickname) {
      const { error } = await supabase.auth.updateUser({
        data: { nickname: data.nickname },
      });
      if (error) {
        alert('닉네임 변경에 실패했습니다.\n다시 시도해주세요.');
        return;
      }
      setNickname(data.nickname);
      alert('닉네임이 변경되었습니다.');
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('로그아웃에 실패했습니다.\n다시 시도해주세요.');
      return;
    }
    resetUser();
    alert('로그아웃되었습니다.');
    navigate('/'); // 홈으로 이동
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={null}
          className={cn(
            '-ml-3 lg:h-10 lg:border-b-2 lg:border-b-wiz-red rounded-sm',
            isHovered ? ' text-wiz-black' : 'text-wiz-white bg-opacity-20'
          )}
        >
          {children} 님
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[360px] bg-wiz-black text-wiz-white border-wiz-red border-opacity-30 rounded-md">
        <DialogHeader>
          <DialogTitle className="text-base md:text-lg">회원 정보</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleSave)}
          className="flex flex-col gap-4 py-4"
        >
          {/* 이메일 (비활성화) */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm md:text-base">
              이메일
            </Label>
            <Input
              disabled
              id="email"
              value={email || '이메일 없음'}
              className="text-xs md:text-sm bg-wiz-black text-wiz-white"
            />
          </div>
          {/* 닉네임 (수정 가능) */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="nickname" className="text-sm md:text-base">
              닉네임
            </Label>
            <Input
              id="nickname"
              type="text"
              autoComplete="off"
              placeholder="닉네임을 입력하세요."
              {...register('nickname')}
              className="text-xs md:text-sm bg-wiz-black text-wiz-white"
            />
            {errors.nickname && (
              <p className="text-red-500 text-xs mt-1">
                * {errors.nickname.message}
              </p>
            )}
          </div>
          <DialogFooter className="flex gap-2">
            <Button
              type="button"
              onClick={handleLogout}
              className="bg-wiz-red bg-opacity-20 hover:bg-wiz-red hover:bg-opacity-30 w-full"
            >
              로그아웃
            </Button>
            <DialogClose asChild>
              <Button
                type="submit"
                className="bg-wiz-white bg-opacity-10 hover:bg-wiz-white hover:bg-opacity-20 w-full"
              >
                저장
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { EditProfileDialog };
