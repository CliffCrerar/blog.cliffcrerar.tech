const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addUtilities, addComponents, e, prefix, config})=>{
console.log(addUtilities)
    })
  ],
};
