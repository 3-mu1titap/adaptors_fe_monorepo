import {
  PostCheckSecondAuthenticationCode,
  PostSecondAuthenticationCode,
  PostSettle,
} from '@repo/admin/actions/volt/voltAction';
import { mentorVoltListDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';
import InnerButton from '@repo/admin/components/ui/Button/InnerButton';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Exchange({
  mentorVoltList,
}: {
  mentorVoltList: mentorVoltListDataType;
}) {
  const [exchangeAmount, setExchangeAmount] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [account, setAccount] = useState<string>('');
  const [selectedBank, setSelectedBank] = useState<string>('');

  const banks = [
    { value: 'KOREA_SC', label: 'SC 은행' },
    { value: 'KOREA_SHINHAN', label: '신한은행' },
    { value: 'KOREA_KB', label: 'KB은행' },
    { value: 'KOREA_HANA', label: '하나은행' },
    { value: 'KOREA_IBK', label: 'IBK 은행' },
    { value: 'KOREA_NH_BANK', label: '농협은행' },
  ];

  const sendVerificationEmail = async () => {
    const request = await PostSecondAuthenticationCode();
    if (request) {
      setIsVerificationSent(request);
      Swal.fire({
        title: '인증 메일 발송',
        html: '이메일로 인증 코드가 발송되었습니다. 확인해주세요.',
        icon: 'info',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    }
  };

  const verifyCode = async (code: string) => {
    const request = await PostCheckSecondAuthenticationCode(code);
    console.log(request);
    if (request) {
      setIsVerified(true);
      Swal.fire({
        title: '인증 완료',
        html: '인증이 완료되었습니다.',
        icon: 'success',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    } else {
      Swal.fire({
        title: '인증 실패',
        html: '인증에 실패하였습니다.',
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    }
  };

  const handleExchange = () => {
    if (!isVerified) {
      Swal.fire({
        title: '인증 필요',
        html: '이메일 인증이 필요합니다.',
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
      return;
    }
    if (!mentorVoltList) {
      return Swal.fire({
        title: '볼트 부족',
        html: `보유 볼트가 부족합니다.`,
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    }
    if (
      exchangeAmount &&
      mentorVoltList &&
      mentorVoltList.totalVolt < parseInt(exchangeAmount)
    ) {
      Swal.fire({
        title: '금액 초과',
        html: `${exchangeAmount}Volt는 가지고 있는<br/> ${mentorVoltList.totalVolt}를 초과하는 Volt입니다.<br/> 다시 입력해주세요.`,
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    } else if (
      parseInt(exchangeAmount) > 100 &&
      parseInt(exchangeAmount) % 100 === 0 &&
      isVerified
    ) {
      if (!account || !selectedBank) {
        Swal.fire({
          title: '정보 미입력',
          html: '계좌번호와 은행을 선택해주세요.',
          icon: 'warning',
          confirmButtonText: '확인',
          confirmButtonColor: '#F6D84C',
        });
        return;
      }
      Swal.fire({
        title: '환전',
        html: `${exchangeAmount}Volt 만큼 환전을 진행하시겠습니까?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        confirmButtonColor: '#F6D84C',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const payload = {
            mentorUuid: '',
            points: parseInt(exchangeAmount),
            account,
            bankCode: selectedBank,
          };
          const request = await PostSettle({ payload });
          if (request) {
            Swal.fire({
              title: '정산 완료',
              html: `${exchangeAmount}Volt 정산이 완료되었습니다.`,
              icon: 'success',
              showCancelButton: true,
              confirmButtonText: '확인',
              cancelButtonText: '취소',
              confirmButtonColor: '#F6D84C',
            });
          }
          setExchangeAmount('');
          setAccount('');
          setSelectedBank('');
          setIsVerified(false);
          setIsVerificationSent(false);
        }
      });
    } else if (parseInt(exchangeAmount) < 100) {
      Swal.fire({
        title: '알림',
        html: `100Volt 미만으로는 환전이 불가능합니다.`,
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    } else if (parseInt(exchangeAmount) % 100 !== 0) {
      Swal.fire({
        title: '알림',
        html: `100Volt 단위로만 환전이 가능합니다.`,
        icon: 'info',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    } else {
      Swal.fire({
        title: '환전 불가',
        html: `올바른 환전 금액을 입력해주세요`,
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>
          볼트 환전
          <span className="text-md ml-2 text-gray-300">
            * 100Volt 단위로 환전이 가능합니다.
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isVerificationSent ? (
            <InnerButton
              title="재 인증요청"
              onClick={sendVerificationEmail}
              isDisabled={false}
              colorType="secondary"
              className="w-full !p-2 !text-xl !font-bold"
            />
          ) : (
            <InnerButton
              title="인증요청"
              onClick={sendVerificationEmail}
              isDisabled={false}
              colorType="secondary"
              className="w-full !p-2 !text-xl !font-bold"
            />
          )}
          {isVerificationSent && !isVerified && (
            <div className="flex space-x-4">
              <Input
                type="text"
                placeholder="인증 코드 입력"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="flex-grow !text-xl"
              />
              <InnerButton
                title="확인"
                onClick={() => verifyCode(verificationCode)}
                isDisabled={false}
                colorType="secondary"
                className="text-nowrap"
              />
            </div>
          )}
          {isVerified && (
            <>
              <Input
                type="number"
                step={100}
                placeholder="환전할 볼트 수"
                value={exchangeAmount}
                onChange={(e) => setExchangeAmount(e.target.value)}
                className="flex-grow !text-xl"
              />
              <Input
                type="text"
                placeholder="계좌번호 입력"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="!text-xl"
              />
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger className="!text-xl">
                  <SelectValue placeholder="은행 선택" />
                </SelectTrigger>
                <SelectContent>
                  {banks.map((bankCode) => (
                    <SelectItem key={bankCode.value} value={bankCode.value}>
                      {bankCode.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
          <InnerButton
            title="환전하기"
            onClick={handleExchange}
            isDisabled={!isVerified}
            colorType="secondary"
            className="w-full !p-2 !text-xl !font-bold"
          />
        </div>
      </CardContent>
    </Card>
  );
}
