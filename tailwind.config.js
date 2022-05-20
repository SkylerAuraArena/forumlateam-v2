module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        whiteColor: 'var(--whiteColor)',
        whiteColorBg: 'var(--whiteColorBg)',
        whiteColorBgModal: 'var(--whiteColorBgModal)',
        greyColor: 'var(--greyColor)',
        borderGreyColor: 'var(--borderGreyColor)',
        borderSideBarGreyColor: 'var(--borderSideBarGreyColor)',
        purpleColor: 'var(--purpleColor)',
        blueColor: 'var(--blueColor)',
        yellowColor: 'var(--yellowColor)',
        blackColor: 'var(--blackColor)',
      },
      minHeight: {
        msgHeight: '7rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}