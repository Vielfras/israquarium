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
          '100%': { transform: 'translateX(100%)' },
        },
        'swim-reverse': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        swimDelay: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'swim-reverse-delay': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: 0.5 },
          '100%': { transform: 'translateY(-100px)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        swim: 'swim 15s linear infinite',
        'swim-reverse': 'swim-reverse 15s linear infinite',
        'swim-delay': 'swimDelay 18s linear infinite',
        'swim-reverse-delay': 'swim-reverse-delay 18s linear infinite',
        bubble: 'bubble 5s linear infinite',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}

