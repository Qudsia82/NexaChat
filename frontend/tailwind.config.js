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
        eczar: ["Eczar", "serif"], // tumhare theme ka font
      },
      colors: {
        chat: {
          dark: '#22223B',      // dark primary background / headings
          secondary: '#4A4E69', // secondary background / form container
          accent: '#9A8C98',    // input borders & subtle accents
          highlight: '#C9ADA7', // soft highlights & secondary text
          light: '#F2E9E4',     // light background for contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [daisyui],
}