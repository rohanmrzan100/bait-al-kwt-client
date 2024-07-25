/** @type {import('tailwindcss').Config} */
module.exports = {
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
          'toxic': 'linear-gradient(90deg, #BFF098, #6FD6FF)',
          'cleanMirror': 'linear-gradient(90deg, #93A5CF, #E4EfE9)',
          'noMans': 'linear-gradient(90deg, #A9F1DF, #FFBBBB)',
          'navbarBottom': 'linear-gradient(to right, #09203F, #537895)',
          
      },
    },
  },
  plugins: [],
}
