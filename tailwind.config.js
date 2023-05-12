/** @type {import('tailwindcss').Config} */

import {fontFamily}  from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        demo: {
          dark: '#1c2026',
          primary: 'blue',
          secondary: 'green',
          error: 'red',
          warning: 'orange'
        }
      },
      fontFamily: {
        demo: ['var(--font-demo)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
