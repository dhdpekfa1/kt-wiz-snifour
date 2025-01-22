import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z.string().email('유효하지 않은 이메일 형식입니다.'),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
        '비밀번호는 문자와 숫자를 포함해야 합니다.'
      ),
    confirmPassword: z.string(),
    nickname: z
      .string()
      .min(2, '닉네임은 최소 2자 이상이어야 합니다.')
      .max(8, '닉네임은 8자를 초과할 수 없습니다.'),
    agreements: z.object({
      termsOfService: z.boolean(),
      personalInfo: z.boolean(),
      locationInfo: z.boolean(),
      thirdParty: z.boolean(),
      marketing: z.boolean(),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });

// 닉네임
export const nicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, '닉네임은 최소 2자 이상이어야 합니다.')
    .max(8, '닉네임은 8자를 초과할 수 없습니다.'),
});
