import { useCallback, useState } from 'react';

interface UseFunnelProps {
  steps: string[];
}

const useFunnel = ({ steps }: UseFunnelProps) => {
  const [level, setStepLevel] = useState(0);

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
    setStepLevel(num);
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
