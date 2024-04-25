/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#555",
      },
      backgroundImage: {
        "logo-pattern":
          "url('https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB587940754_.png')",
        "flag-pattern":
          "url('https://m.media-amazon.com/images/S/sash/Jls8KSxf2o8RQVi.png')",
      },
    },
  },

  plugins: [],
};
