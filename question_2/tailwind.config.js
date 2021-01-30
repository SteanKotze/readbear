module.exports = {
  purge: ['./src/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rb_purple: {
          light: '#6930C3',
          DEFAULT: '#6930C3',
          dark: '#6930C3',
        }
      },
      fontSize: {
        rb_md: ['26px', '48px'],
        rb_lg: ['48px', '48px']
      },
      spacing: {
        '133px': '8.313rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
