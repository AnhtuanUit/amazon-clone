/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#fff",
        "dark-blue": "#131a22",
        "light-blue": "#37475A",
        "hover-light-blue": "#485769",
        "dark-slate-blue": "#232f3e",
        "deep-aqua": "#007185",
        "deep-sky-blue": "#0067c0",
        "Sunset Orange": "#f18806",
        "rust-orange": "#ee981c",
        "dark-yellow": "#e6a401",
        yellow: "#ffc530",
        "light-yellow": "#ffd873",
        "yellow-amazon": "#ffd816",
        "slate-gray": "#565959",
        "teel-gray": "#a7acb2",
        "silver-gray": "#ccc",
        "platinum-gray": "#e6e6e6",
        "very-light-gray": "#e2e6e6",
        green: "#007600",
        "dark-red": "#B12704",
        "red-blood": "#CC0C39",
        "brown-orange": "#c45500",
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
