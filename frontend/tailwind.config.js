import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   fontFamily: {
        eczar: ["Eczar", "serif"], 
      },
      colors: {
        chat: {
          dark: '#22223B',      
          secondary: '#4A4E69',
          accent: '#9A8C98', 
          highlight: '#C9ADA7', 
          light: '#F2E9E4',   
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [daisyui],
}