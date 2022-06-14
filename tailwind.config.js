module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        aBeeZee: ['aBeeZee', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#1E2331',
        'bg-second': '#142a41',
        'bg-third': '#2e3085',
        '3red': '#FE5A6A',
        '3blue': '#0141FF',
        '3green': '#0FD5A5',
      },
      boxShadow: {
        box: '0px 0px 5px 2px rgba(255, 255, 255, 0.5)',
        red: '0px 4px 20px 1px #FE5A6A',
        blue: '0px 4px 20px 1px #0141FF',
        green: '0px 4px 20px 1px #0FD5A5',
        red1: '0px 4px 50px 1px #FE5A6A',
        blue1: '0px 4px 50px 1px #0141FF',
        green1: '0px 4px 50px 1px #0FD5A5',
      },
    },
    textShadow: {
      xl: '0px 1px 5px 3px rgba(255, 255, 255, 0.5)',
    },
    paintOrder: {
      fsm: { paintOrder: 'fill stroke markers' },
      fms: { paintOrder: 'fill markers stroke' },
      sfm: { paintOrder: 'stroke fill markers' },
      smf: { paintOrder: 'stroke markers fill' },
      mfs: { paintOrder: 'markers fill stroke' },
      msf: { paintOrder: 'markers stroke fill' },
    },
  },
  variants: {
    // all the following default to ['responsive']
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
  },
  plugins: [require('tailwindcss-text-fill-stroke')()],
}
