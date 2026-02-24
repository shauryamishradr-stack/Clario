import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matte: '#090909',
        carbon: '#121212',
        graphite: '#1A1A1A',
        gold: {
          300: '#B8954E',
          400: '#A88745',
          500: '#95773E'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(184,149,78,0.25), 0 8px 24px rgba(0,0,0,0.32)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
