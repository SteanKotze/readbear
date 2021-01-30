module.exports = {
  purge: ['./src/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        rb_md_header: '0px 8px 4px 0px rgba(105, 48, 195, 0.06)',
        rb_sm_input: '3px 3px 3px 3px rgba(105, 48, 195, 0.62)'
      },
      colors: {
        rb_purple: {
          DEFAULT: '#6930C3'
        },
        rb_light_purple: {
          DEFAULT: 'rgba(105, 48, 195, 0.05)'
        },
        rb_gray: {
          DEFAULT: '#7B7B7B'
        }
      },
      fontSize: {
        '22px': ['22px', '22px'],
        '26px': ['26px', '48px'],
        '48px': ['48px', '48px']
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
