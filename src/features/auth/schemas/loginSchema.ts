import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('유효하지 않은 이메일 형식입니다.'),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
      '비밀번호는 문자와 숫자를 포함해야 합니다.'
    ),
});
