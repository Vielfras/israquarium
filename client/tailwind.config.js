/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        swim: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(110%)' }, 
        },
        'swim-reverse': {
          '0%': { transform: 'translateX(110%)' }, 
          '100%': { transform: 'translateX(-110%)' }, 
        },
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: 0.7 },
          '100%': { transform: 'translateY(-100px)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        swim: 'swim 20s linear infinite',
              'swim-reverse': 'swim-reverse 20s linear infinite',
        bubble: 'bubble 5s linear infinite',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}
