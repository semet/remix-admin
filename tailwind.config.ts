import TailwindForms from '@tailwindcss/forms'
import Typography from '@tailwindcss/typography'
import ScrollBar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      spacing: {
        sm: '32px',
        md: '43px',
        lg: '48px'
      },
      colors: {
        primary: {
          DEFAULT: '#405189',
          50: '#3B4B7E',
          100: '#374574',
          200: '#323F6A',
          300: '#2D3961',
          400: '#293457',
          500: '#242E4D'
        },
        secondary: {
          DEFAULT: '#3577f1',
          50: '#236BF0',
          100: '#105EED',
          200: '#0F56D9',
          300: '#0E4EC6',
          400: '#0C46B2',
          500: '#0B3E9E'
        },
        success: {
          DEFAULT: '#0ab39c',
          50: '#0AA691',
          100: '#099986',
          200: '#088C7B',
          300: '#077F6F',
          400: '#077364',
          500: '#066659'
        },
        info: {
          DEFAULT: '#299cdb',
          50: '#2392CF',
          100: '#2087BF',
          200: '#1E7CAF',
          300: '#1B719F',
          400: '#18658F',
          500: '#165A7F'
        },
        warning: {
          DEFAULT: '#f7b84b',
          50: '#F5AF35',
          100: '#F4A61F',
          200: '#F19D0B',
          300: '#DB8F0A',
          400: '#DB8F0A',
          500: '#C58009'
        },
        danger: {
          DEFAULT: '#f06548',
          50: '#EE5232',
          100: '#ED401E',
          200: '#E23512',
          300: '#CE3011',
          400: '#B92B0F',
          500: '#A4270D'
        }
      },
      fontSize: {
        xxs: '0.625rem'
      }
    }
  },
  plugins: [ScrollBar, Typography, TailwindForms]
} satisfies Config
