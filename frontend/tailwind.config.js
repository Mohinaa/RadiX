// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      darkred:'#B90B0B',
      white:'#FFFFFF'
    },
    extend: {
      fontFamily: {
        graffiti: ['Graffiti font', 'sans-serif'],
        ten: ['Tengah Wengi','sans-serif'],
        robinez: ['Robienz', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
     }
    },
  },
  plugins: [],
}

