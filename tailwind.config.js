/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        redrose: ['"Red Rose"', 'sans-serif'],
        rough: ['Rochester', 'cursive'],
        poppins: ['Poppins', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cookie:['Cookie','serif'],
        bebasneu:['Bebas Neue','sans-serif'],
      },

      colors: {
        brand: {
          back: '#0068CD',
          light: '#ffff',
          btn: 'black',
          block: '#EEC64A',
          brandstart: '#FF7F50',
          brandend: '#FF4500',
        }
      }
      
    },

  },
  plugins: [],
}

