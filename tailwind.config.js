const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        inter: "0 3px 3px rgb(0 0 0 / 50%)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        orange: colors.orange,
        back: "#242625",
        textinput: "#131514",
        introback: "#1e201f",
      },
    },
  },
  presets: [require("@vercel/examples-ui/tailwind")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vercel/examples-ui/**/*.js",
  ],
};
