import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

import scrollbarHide from 'tailwind-scrollbar-hide';

const config: Pick<Config, 'content' | 'presets' | 'plugins'> = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.tsx'],
  presets: [sharedConfig],
  plugins: [
    scrollbarHide, // 스크롤바 숨기기 플러그인 추가
  ],
};

export default config;
