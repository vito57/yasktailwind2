/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "-0.006em",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "-0.011em",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
           letterSpacing: "-0.017em",
        },
      ],
      "2xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "-0.022em",
        },
      ],
      "3xl": [
        "3.75rem",
        {
          lineHeight: "5rem",
          letterSpacing: "-0.022em",
        },
      ],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1152px",
      //xxl: "1320px"
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
      serif: ["var(--font-ssp)"],
      mono: ["var(--font-roboto-mono)"],
    },
    extend: {
      colors: {
        yask: "#050884",
        ybg: "#FAFAFD",
        yred: "#FF2423",
        ylime: "#D6F47C",
      },
    },
  },
  plugins: [],
};
