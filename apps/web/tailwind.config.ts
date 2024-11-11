import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontSize: {
        bigTextSize: '110px',
        text18: '18px',
      },
    },
  },
};

export default config;
