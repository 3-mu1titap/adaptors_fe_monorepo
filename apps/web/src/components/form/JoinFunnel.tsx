'use client';
import { useState } from 'react';
import { postUserData } from '../../actions/auth/auth';
import Funnel from '../common/Funnel/Funnel';
import useFunnel from '../common/Funnel/useFunnel';
import FunnelLevel from '../pages/member/FunnelLevel';
import JoinField1 from '../pages/member/JoinField1';
import JoinField2 from '../pages/member/JoinField2';
import MenteeProfile from '../pages/profile/MenteeProfile';
import MentorProfile from '../pages/profile/MentorProfile';
import ProfileImage from '../pages/profile/ProfileImage';
import {
  SignUpFormData1,
  SignUpFormData2,
  signUpStep1Schema,
  signUpStep2Schema,
  validateForm1,
  validateForm2,
} from './signUpSchema';

export default function JoinFunnel() {
  const steps = ['step1', 'step2', 'setp3', 'setp4', 'setp5'];
  const { level, step, onNextStep, onPrevStep } = useFunnel({ steps });
  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmId, setConfirmId] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');

  const [formData1, setFormData1] = useState<SignUpFormData1>({
    accountId: '',
    password: '',
    email: '',
    role: 'MENTEE',
  });
  const [formData2, setFormData2] = useState<SignUpFormData2>({
    name: '',
    nickName: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpFormData1 | keyof SignUpFormData2, string>>
  >({});

  //폼 제출 (회원가입 api 요청)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const disable =
      signUpStep1Schema.parse(formData1) && signUpStep2Schema.parse(formData2);
    if (disable) {
      const combinedFormData = {
        ...formData1,
        ...formData2,
      };
      const data = await postUserData(combinedFormData);
      console.log('회원가입 요청 응답:', data.result);
    }
  };

  const onClickNext = () => {
    const disable =
      confirmId &&
      signUpStep1Schema.parse(formData1) &&
      formData1.password === confirmPassword;
    if (disable) {
      onNextStep();
    }
  };

  return (
    <div>
      <FunnelLevel level={level} />
      <form className="max-w-[400px] mx-auto">
        <Funnel step={step}>
          <Funnel.Step name="step1">
            <JoinField1
              formData={formData1}
              setFormData={setFormData1}
              errors={errors}
              setErrors={setErrors}
              confirmId={confirmId}
              setConfirmId={setConfirmId}
              setConfirmPassword={setConfirmPassword}
              confirmPassword={confirmPassword}
            />
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
              onClick={onClickNext}
              disabled={!validateForm1(formData1)}
            >
              다음
            </button>
          </Funnel.Step>
          <Funnel.Step name="step2">
            <JoinField2
              formData={formData2}
              setFormData={setFormData2}
              errors={errors}
              setErrors={setErrors}
            />
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448] mb-2"
              onClick={onPrevStep}
            >
              이전
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
              onClick={handleSubmit} //handleSubmint 으로 변경
              disabled={!validateForm2(formData2)}
            >
              다음
            </button>
          </Funnel.Step>
          <Funnel.Step name="setp3">
            <ProfileImage />
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F8D448] 
                bg-[#F8D448] text-white hover:bg-[#e5c340]"
              onClick={onNextStep}
            >
              다음
            </button>
          </Funnel.Step>
          <Funnel.Step name="setp4">
            {formData1.role === 'MENTOR' ? (
              <MentorProfile />
            ) : (
              <MenteeProfile />
            )}
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
              onClick={handleSubmit} //handleSubmint 으로 변경
              // disabled={!isFormValid}
            >
              다음
            </button>
          </Funnel.Step>
          <Funnel.Step name="setp5">
            해시태그
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
              onClick={onClickNext} //handleSubmint 으로 변경
              // disabled={!isFormValid}
            >
              다음
            </button>
          </Funnel.Step>
        </Funnel>
      </form>
    </div>
  );
}
