'use client';
import AdaptorsLogoIcon from '@repo/web/components/assets/icons/AdaptorsLogo';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { SessionContext } from 'src/app/context/SessionContext';
function Splash() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const { isAuth } = useContext(SessionContext);

  const handleStart = () => {
    if (isAuth) {
      router.replace('/home');
    } else {
      router.replace('/login');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 500);
  }, []);

  return (
    <>
      {/* <div className="hidden md:block"></div> */}
      <div className="relative flex flex-col items-start justify-start h-full md:mb-[5rem] p-10 md:p-20">
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AdaptorsLogoIcon className="h-[6rem] md:h-[6rem] xl:h-[10rem]" />
        </motion.div>
        {showButton && (
          <motion.button
            className="mt-10 w-40 h-10 md:w-40 md:h-12 bg-[#F5F5F5] text-black rounded-xl font-bold flex items-center justify-center"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleStart}
          >
            시작하기
          </motion.button>
        )}
      </div>
    </>
  );
}

export default Splash;
