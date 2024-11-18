'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdaptorsLogoIcon from '@components/assets/icons/AdaptorsLogo';

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
      <div className=""></div>
      <div className="relative flex flex-col items-center justify-center h-full">
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <AdaptorsLogoIcon className="h-[140px]" />
        </motion.div>
        {showButton ? (
          <motion.button
            className="mt-4 w-40 h-12 bg-[#F5F5F5] text-black rounded-xl font-bold flex items-center justify-center"
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
    </>
  );
}

export default Splash;
