'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AdaptorsLogoIcon from '../../../assets/icons/AdaptorsLogo';

function Landing() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2 }}
      >
        <AdaptorsLogoIcon className="h-[100px]" />
      </motion.div>
      {showButton ? (
        <motion.button
          className="mt-4 w-40 h-12 bg-[#F5F5F5] text-black rounded-xl font-bold flex items-center justify-center"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          시작하기
        </motion.button>
      ) : (
        <button className="mt-4 w-40 h-12 invisible"></button>
      )}
    </div>
  );
}

export default Landing;
