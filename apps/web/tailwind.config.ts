import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontSize: {
        bigSize: '50px',
      },
      boxShadow: {
        textShadow: '2px',
      },
    },
  },
};

export default config;
