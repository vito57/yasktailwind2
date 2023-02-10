/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1152px",
    },
    container: {
      center: true,
    },
    // colors: {
    //   blue: "#1fb6ff",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    // },
    fontFamily: {
      sans: ["var(--font-inter)"],

      mono: ["var(--font-roboto-mono)"],
    },
    extend: {
      colors: {
        yask: "#050884",
        yred: "#FF2423",
        ylime: "#D6F47C",
      },
    },
  },
  plugins: [],
};
