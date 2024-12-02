import { z, ZodSchema } from 'zod';

export const validateForm = <T>(formData: T, schema: ZodSchema<T>): boolean => {
  try {
    schema.parse(formData);
    return true;
  } catch (error) {
    return false;
  }
};

const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/;
export const accountSchema = z.object({
  accountId: z
    .string()
    .min(5, { message: '아이디는 최소 5자 이상이어야 합니다.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .regex(specialCharRegex, '비밀번호에 특수문자가 포함되어야 합니다.'),
  email: z.string().email({ message: '유효한 이메일을 입력해주세요.' }),
  role: z.enum(['MENTOR', 'MENTEE'], { message: '역할을 선택해주세요.' }),
});

export const informationSchema = z.object({
  name: z.string().nonempty({ message: '이름을 입력해주세요.' }),
  nickName: z.string().nonempty({ message: '닉네임을 입력해주세요.' }),
  phoneNumber: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, {
    message: '전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)',
  }),
});

// const validateForm1 = (account: accountFormData) => {
//   try {
//     accountSchema.parse(account);
//     return true;
//   } catch (error) {
//     return false;
//   }
// };
// export const validateForm2 = (information: informationFormData) => {
//   try {
//     informationSchema.parse(information);
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

export type accountFormData = z.infer<typeof accountSchema>;
export type informationFormData = z.infer<typeof informationSchema>;
