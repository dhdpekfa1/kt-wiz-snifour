import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('유효하지 않은 이메일 형식입니다.'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
});
