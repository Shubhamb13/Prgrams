/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '  #292B32', 
        customColor2: ' #3B3E47',
        customColor3: ' #DFDFDF',
        customColor4: ' #221A2C',
        customGradient: 'linear-gradient(180deg, #18282A 100%, #221A2C 100%)',
        customColorT: '#525965',
        lightcolor:'#F7F7F8',
        lightcolor2:'#FFFFFF',


      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '169': '169px',
        '-1801': '-1801px',
      },
      borderWidth: {
        '0.96': '0.96px',
      },
      opacity: {
        '0': '0',
      },
      screens: {
        'custom': {'max': '320px'}, 
      }
    },
  },
  plugins: [],
}
