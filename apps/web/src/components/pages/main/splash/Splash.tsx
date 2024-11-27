'use client';
import AdaptorsLogoIcon from '@components/assets/icons/AdaptorsLogo';
import FitImage from '@components/ui/image/fit-image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Splash() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  const handleStart = () => {
    router.replace('/login');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hidden md:block"></div>
      <div className="relative flex flex-col items-center justify-center h-full md:mb-[5rem]">
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <AdaptorsLogoIcon className="h-[8rem] md:h-[12rem] 3xl:h-[18rem]" />
        </motion.div>
        {showButton ? (
          <motion.button
            className="mt-4 w-40 h-12 bg-[#F5F5F5] text-black rounded-xl font-bold flex items-center justify-center invisible md:visible"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            onClick={handleStart}
          >
            시작하기
          </motion.button>
        ) : (
          <button className="mt-4 w-40 h-12 invisible"></button>
        )}
      </div>
      <div className="flex flex-row justify-center items-start md:block">
        <div className="w-[12rem] pb-[6rem] md:w-[30rem] md:ml-[10rem] md:mb-[8rem] xl:ml-[16rem] 3xl:ml-[20rem] 3xl:w-[40rem] ">
          <FitImage
            src="/assets/images/adaptorsIntroImage.svg"
            alt="adaptorsImage"
          />
        </div>
        <button
          onClick={handleStart}
          className="mt-[4rem] w-40 h-12 ml-4 bg-[#F5F5F5] text-black rounded-xl font-bold block md:hidden"
        >
          시작하기
        </button>
      </div>
    </>
  );
}

export default Splash;
