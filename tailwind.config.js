module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
       'w-60': '15rem',
      }
   }
 },
  variants: {
    width: ["responsive", "hover", "focus"]
},
  plugins: [],
}
