
/** @type {import('tailwindcss').Config} */

module.exports = {

  mode: 'jit',

  content: [],

  //to apply style your site in dark mode.
  darkMode: 'class',

  purge: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {

    extend: {
      // Customizing my style palette for my project

      container: {
        center: true,
        padding: "1rem",
      },

      screens: {

        //@media (max-width: 1536px) {max-width:0px}
        '2xl': { 'max': '0px' },

      },

      // customize my color
      colors: {

        // customize my background color as object
        bg: {

          DEFAULT: "#f8f9ff",
          card: "#f1f3fa",

        },

        // this color for dark  
        bgDark: {

          DEFAULT: "#20222f",
          card: "#252b43",
          dark: "#1d2029",

        },

        facebook: "#1791f0",
        twitter: "#1da1f5",
        mainGreen: "#3fac8e",
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-flow, minmax(300px, 1fr))',
      }
    },
  },

  plugins: [],

}