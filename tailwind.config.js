/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#F0F6FE',
            100: '#E1EDFD',
            200: '#C3DCFC',
            500: '#005CE6',
            600: '#0047AB',
            700: '#003685',
            800: '#00255D',
            900: '#00173B',
          },
          red: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
          }
        }
      },
      fontFamily: {
        sans: ['Heebo', 'Rubik', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ecg': 'ecg-move 2.5s linear infinite',
      },
      keyframes: {
        'ecg-move': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
