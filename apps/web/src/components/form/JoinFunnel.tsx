'use client';
import { useState } from 'react';
import { postUserData } from '../../actions/auth/auth';
import useUserStore from '../../store/uuidStore';
import Funnel from '../common/Funnel/Funnel';
import useFunnel from '../common/Funnel/useFunnel';
import FunnelLevel from '../pages/member/FunnelLevel';
import JoinField1 from '../pages/member/JoinField1';
import JoinField2 from '../pages/member/JoinField2';
import FileUpload from '../pages/profile/FileUpload';
import HashTag from '../pages/profile/HashTag';
import MenteeProfile from '../pages/profile/MenteeProfile';
import MentorProfile from '../pages/profile/MentorProfile';
import {
  SignUpFormData1,
  SignUpFormData2,
  signUpStep1Schema,
  signUpStep2Schema,
} from './signUpSchema';

export default function JoinFunnel() {
  const steps = [
    'joinStep1',
    'joinStep2',
    'profileImage',
    'profile',
    'hashTag',
  ];
  const { level, step, onNextStep, onPrevStep } = useFunnel({ steps });
  const [confirmId, setConfirmId] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const setUuid = useUserStore((state) => state.setUuid);
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
  const handleSubmit = async () => {
    const disable =
      signUpStep1Schema.parse(formData1) && signUpStep2Schema.parse(formData2);
    console.log(disable);
    if (disable) {
      const combinedFormData = {
        ...formData1,
        ...formData2,
      };
      const data = await postUserData(combinedFormData);
      setUuid(data);
      console.log(data);
      if (data) {
        onNextStep();
      }
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
      <section className="max-w-[400px] mx-auto h-[100vh] sm:h-[65vh]">
        <Funnel step={step}>
          <Funnel.Step name="joinStep1">
            <JoinField1
              formData={formData1}
              setFormData={setFormData1}
              errors={errors}
              setErrors={setErrors}
              setConfirmId={setConfirmId}
              setConfirmPassword={setConfirmPassword}
              confirmPassword={confirmPassword}
              handleButtton={onClickNext} //onClickNext
            />
          </Funnel.Step>
          <Funnel.Step name="joinStep2">
            <JoinField2
              formData={formData2}
              setFormData={setFormData2}
              errors={errors}
              setErrors={setErrors}
              handleButtton={handleSubmit} //handleSubmit
            />
          </Funnel.Step>
          <Funnel.Step name="profileImage">
            <FileUpload handleButton={onNextStep} />
          </Funnel.Step>
          <Funnel.Step name="profile">
            {formData1.role === 'MENTOR' ? (
              <MentorProfile handleButtton={onNextStep} />
            ) : (
              <MenteeProfile handleButton={onNextStep} />
            )}
          </Funnel.Step>
          <Funnel.Step name="hashTag">
            <HashTag handleButton={onNextStep} />
          </Funnel.Step>
        </Funnel>
      </section>
    </div>
  );
}
