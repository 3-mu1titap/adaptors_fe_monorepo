import { z } from 'zod';

const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/;
export const signUpStep1Schema = z.object({
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

export const signUpStep2Schema = z.object({
  name: z.string().nonempty({ message: '이름을 입력해주세요.' }),
  nickName: z.string().nonempty({ message: '닉네임을 입력해주세요.' }),
  phoneNumber: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, {
    message: '전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)',
  }),
});

export const validateForm1 = (formData1: SignUpFormData1) => {
  try {
    signUpStep1Schema.parse(formData1);
    return true;
  } catch (error) {
    return false;
  }
};
export const validateForm2 = (formData2: SignUpFormData2) => {
  try {
    signUpStep1Schema.parse(formData2);
    return true;
  } catch (error) {
    return false;
  }
};

export type SignUpFormData1 = z.infer<typeof signUpStep1Schema>;
export type SignUpFormData2 = z.infer<typeof signUpStep2Schema>;
