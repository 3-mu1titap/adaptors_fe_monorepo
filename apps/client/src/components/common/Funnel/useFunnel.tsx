import { useCallback, useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
interface UseFunnelProps {
  steps: string[];
}

const useFunnel = ({ steps }: UseFunnelProps) => {
  const [level, setStepLevel] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searhparams = useSearchParams();

  //히스토리 쌓기
  useEffect(() => {
    router.push(`${pathname}/?path=${steps[level]}`);
  }, [level, pathname, router]);

  //뒤로가기, 앞으로 가기 누를 시 인덱스 상태관리
  useEffect(() => {
    const PrePathname = searhparams.get('path');
    if (PrePathname) {
      const index = steps.findIndex((s) => s === PrePathname);

      //페이지 넘어가기
      if (index !== -1) {
        setStepLevel(index);
      }
    }

    //현재 파라미터의 값과 인덱스 값이
    //계속 바뀌는 steps 배열을 가져와야됨
  }, [searhparams, steps]);

  const onNextStep = useCallback(
    (num: number) => {
      setStepLevel((prev) => {
        if (prev >= steps.length - 1) {
          return prev;
        }
        return prev + num;
      });
    },
    [steps]
  );

  const onPrevStep = useCallback(() => {
    setStepLevel((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }, []);

  const onSelectStep = useCallback((num: number) => {
    if (num === 9999) {
      alert('로그아웃 하시겠습니까?');
    } else {
      setStepLevel(num);
    }
  }, []);

  return {
    level,
    step: steps[level],
    onNextStep,
    onPrevStep,
    onSelectStep,
  };
};

export default useFunnel;
