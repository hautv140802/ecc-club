import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue-light':
          'linear-gradient(to right, #BADCFF 0%, #86ABF9 53%, #527CC6 100%)',
        'gradient-bule-light-text':
          'linear-gradient(to right, #FFFFFF 0%, #F0F5FF 28%, #C9DAFF 97%, #527CC6 100%)',
      },
      screens: {
        sm: '460px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
