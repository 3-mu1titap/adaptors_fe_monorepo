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

  // useEffect(() => {
  //   router.push(`${pathname}?path=${steps[level]}`);
  // }, [level, steps, router, pathname]);

  useEffect(() => {
    const prePathname = searchParams.get('path');
    if (prePathname) {
      const index = steps.findIndex((s) => s === prePathname);
      if (index !== -1) {
        console.log('여기');
        console.log(level, index);
        setStepLevel(index);
      }
    }
  }, [searchParams, steps]);

  const onNextStep = useCallback(() => {
    if (level < steps.length - 1) {
      router.push(`${pathname}?path=${steps[level + 1]}`);
    }
    // setStepLevel((prev) => Math.min(prev + 1, steps.length - 1));
  }, [steps]);

  const onPrevStep = useCallback(() => {
    if (level > 0) {
      router.push(`${pathname}?path=${steps[level - 1]}`);
    }
    // setStepLevel((prev) => Math.max(prev - 1, 0));
  }, []);

  const onSelectStep = useCallback(
    (num: number) => {
      if (num >= 0 && num < steps.length) {
        router.push(`${pathname}?path=${steps[num]}`);
      }
    },
    [steps]
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
