import { useCallback, useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Category } from '../../../types/mypages/CategoryTypes/Category';
interface UseFunnelProps {
  steps: Category[];
}

const CategoryuseFunnel = ({ steps }: UseFunnelProps) => {
  const [level, setStepLevel] = useState(0);
  const [sublevel, setStepSubLevel] = useState(0);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    router.push(
      `${pathname}?path=${steps[level].Categoryname}/${steps[level].subcategory[sublevel].name}`
    );
    console.log(pathname);
  }, [level, sublevel]);

  useEffect(() => {
    const prePathname = searchParams.get(`${steps[level]}`);
    if (prePathname) {
      const index = steps.findIndex((s) => s === steps[level]);
      console.log(index, 'index');
      if (index !== -1) {
        setStepLevel(index);
        setStepSubLevel(index);
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

    //카테고리가 바뀌면 sub 카테고리 초기화
    setStepSubLevel(0);
  }, [steps, pathname, router]);

  const onPrevStep = useCallback(() => {
    setStepLevel((prevLevel) => {
      if (prevLevel > 0) {
        const prevStep = prevLevel - 1;
        return prevStep;
      }
      return prevLevel;
    });
    //카테고리가 바뀌면 sub 카테고리 초기화
    setStepSubLevel(sublevel);
  }, [steps, pathname, router]);

  const onSelectStep = useCallback(
    (num: number) => {
      if (num >= 0 && num < steps.length) {
        setStepLevel(num);

        //세부 카테고리를 선택하고 다른 카테고리 이벤트 발생시
        //전에 선택한 세부 카테고리는 초기화
        setStepSubLevel(0);
      }
    },
    [steps, pathname, router]
  );

  //서브 카테고리
  const onNextSubStep = useCallback(() => {
    setStepSubLevel((presublevel) => {
      if (
        steps[level].subcategory &&
        presublevel < steps[level].subcategory.length - 1
      ) {
        const nextsublevel = presublevel + 1;
        return nextsublevel;
      }

      return presublevel;
    });
  }, [steps, pathname, router]);

  const onSubPrevStep = useCallback(() => {
    setStepLevel((prevLevel) => {
      if (prevLevel > 0) {
        const prevStep = prevLevel - 1;
        return prevStep;
      }
      return prevLevel;
    });
  }, [steps, pathname, router]);

  const onSubSelectStep = useCallback(
    (num: number) => {
      if (
        num >= 0 &&
        num < steps[level].subcategory[sublevel].name.length - 1
      ) {
        setStepSubLevel(num);
      }
    },
    [steps, pathname, router]
  );

  return {
    level,
    sublevel,
    step: steps[level],
    substep: steps[level].subcategory[sublevel],
    onNextStep,
    onPrevStep,
    onSelectStep,
    onNextSubStep,
    onSubPrevStep,
    onSubSelectStep,
  };
};

export default CategoryuseFunnel;
