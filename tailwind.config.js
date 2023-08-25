/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',

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
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.019em",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.021em",
        },
        
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "-0.022em",
        },
      ],
    },
    screens: {
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1152px",
      // xxl: "1320px"
     // xs: 0,
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1152px",
    // xxl: "1520px"
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

    },
    extend: {
      colors: {
        yask: "#050884",
        ybg: "#FAFAFD",       
        ylightblue: "#080BD0",
        yred: "#FF2423",
        ylime: "#D6F47C",
        ygrey:"#CFD6DF"
      },
    },
  },
  plugins: [],
};
