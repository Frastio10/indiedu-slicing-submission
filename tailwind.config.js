module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#092C4C',
        'gray1': '#94A2B3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
