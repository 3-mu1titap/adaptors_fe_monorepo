'use client';
import { useState } from 'react';
import { postUserData } from '../../actions/auth/auth';
import useUserStore from '../../store/uuidStore';
import Funnel from '../common/Funnel/Funnel';
import useFunnel from '../common/Funnel/useFunnel';
import FunnelLevel from '../pages/member/FunnelLevel';
import Account from '../pages/member/JoinField1';
import Information from '../pages/member/JoinField2';
import FileUpload from '../pages/profile/FileUpload';
import HashTag from '../pages/profile/HashTag';
import MenteeProfile from '../pages/profile/MenteeProfile';
import MentorProfile from '../pages/profile/MentorProfile';
import {
  accountFormData,
  accountSchema,
  informationFormData,
  informationSchema,
} from './signUpSchema';

export default function JoinFunnel({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const steps = [
    `account`,
    'information',
    'profileImage',
    'profile',
    'hashTag',
  ];
  const { level, step, onNextStep } = useFunnel({ steps });
  const [confirmId, setConfirmId] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const setUuid = useUserStore((state) => state.setUuid);
  const [account, serAccountData] = useState<accountFormData>({
    accountId: '',
    password: '',
    email: email && email !== 'undefined' ? email : '',
    role: 'MENTEE',
  });
  const [information, serinformationData] = useState<informationFormData>({
    name: name && name !== 'undefined' ? name : '',
    nickName: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof accountFormData | keyof informationFormData, string>>
  >({});
  const handleSubmit = async () => {
    const disable =
      accountSchema.parse(account) && informationSchema.parse(information);
    if (!disable) return;
    const combinedFormData = {
      ...account,
      ...information,
    };
    const result = await postUserData(combinedFormData);
    if (result.httpStatus === 'CONFLICT') {
      alert(`이미 등록된 이메일입니다. 다른 이메일을 등록해주세요.`);
    } else {
      setUuid(result.result.uuid);
      onNextStep();
    }
  };

  const onClickNext = () => {
    const disable =
      confirmId &&
      accountSchema.parse(account) &&
      account.password === confirmPassword;
    if (disable) {
      onNextStep();
    }
  };

  return (
    <>
      <FunnelLevel level={level} />
      <section className="">
        <Funnel step={step}>
          <Funnel.Step name={`account`}>
            <Account
              formData={account}
              setFormData={serAccountData}
              errors={errors}
              setErrors={setErrors}
              setConfirmId={setConfirmId}
              setConfirmPassword={setConfirmPassword}
              confirmPassword={confirmPassword}
              handleButtton={onClickNext}
            />
          </Funnel.Step>
          <Funnel.Step name={`information`}>
            <Information
              formData={information}
              setFormData={serinformationData}
              errors={errors}
              setErrors={setErrors}
              handleButtton={handleSubmit}
            />
          </Funnel.Step>
          <Funnel.Step name="profileImage">
            <FileUpload handleButton={onNextStep} />
          </Funnel.Step>
          <Funnel.Step name="profile">
            {account.role == 'MENTOR' ? (
              <MentorProfile handleButtton={onNextStep} />
            ) : (
              <MenteeProfile handleButton={onNextStep} />
            )}
          </Funnel.Step>
          <Funnel.Step name="hashTag">
            <HashTag />
          </Funnel.Step>
        </Funnel>
      </section>
    </>
  );
}
