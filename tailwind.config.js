/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#51E9EF",
        secondary:"#252b42",
        lightGray:"#fafafa",
        darkGray:"#737373",
        },

        fontFamily:{
          poppins:['Poppins','san-serif']
        },
       

        fontSize:{
          huge:'clamp(2rem,6vw,3rem)',
        },


    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       
      },
    }
  },
  plugins: [],
}
