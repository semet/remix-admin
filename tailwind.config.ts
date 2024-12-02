import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#405189',
        secondary: '#3577f1',
        success: '#0ab39c',
        info: '#299cdb',
        warning: '#f7b84b',
        danger: '#f06548'
      },
      fontSize: {
        xxs: '0.625rem'
      }
    }
  },
  plugins: []
} satisfies Config
