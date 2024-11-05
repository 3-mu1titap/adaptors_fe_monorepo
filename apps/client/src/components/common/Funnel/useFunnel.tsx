import { useCallback, useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface UseFunnelProps {
  steps: string[];
}

const useFunnel = ({ steps }: UseFunnelProps) => {
  const [level, setStepLevel] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    router.push(`${pathname}?path=${steps[level]}`);
  }, [level]);

  useEffect(() => {
    const prePathname = searchParams.get('path');
    if (prePathname) {
      const index = steps.findIndex((s) => s === prePathname);
      if (index !== -1) {
        setStepLevel(index);
      }
    }
  }, [searchParams]);

  const onNextStep = useCallback(() => {
    setStepLevel((prevLevel) => {
      if (prevLevel < steps.length - 1) {
        const nextLevel = prevLevel + 1;
        return nextLevel;
      }
      return prevLevel;
    });
  }, [steps, pathname, router]);

  const onPrevStep = useCallback(() => {
    setStepLevel((prevLevel) => {
      if (prevLevel > 0) {
        const prevStep = prevLevel - 1;
        return prevStep;
      }
      return prevLevel;
    });
  }, [steps, pathname, router]);

  const onSelectStep = useCallback(
    (num: number) => {
      if (num >= 0 && num < steps.length) {
        setStepLevel(num);
      }
    },
    [steps, pathname, router]
  );

  return {
    level,
    step: steps[level],
    onNextStep,
    onPrevStep,
    onSelectStep,
  };
};

export default useFunnel;
