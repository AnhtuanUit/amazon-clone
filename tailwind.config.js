/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        me: {
          white: "#fff",
          gray: {
            100: "#e2e6e6",
            200: "#e6e6e6",
            250: "#ddd",
            300: "#ccc",
            400: "#a7acb2",
            430: "#999",
            450: "#6f7373",
            500: "#565959",
          },
          darkblue: {
            100: "#485769",
            200: "#37475A",
            300: "#232f3e",
            400: "#131a22",
            500: "#131921",
          },
          blue: {
            100: "#0067c0",
            200: "#007185",
          },
          orange: {
            50: "#febd69",
            60: "#f3a847",
            100: "#ee981c",
            200: "#f18806",
          },
          yellow: {
            100: "#ffd873",
            200: "#ffd816",
            300: "#ffc530",
            400: "#e6a401",
          },
          green: {
            100: "#007600",
          },
          red: {
            100: "#CC0C39",
            200: "#B12704",
          },
        },
      },
      backgroundImage: {
        "logo-pattern":
          "url('https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB587940754_.png')",
        "flag-pattern":
          "url('https://m.media-amazon.com/images/S/sash/Jls8KSxf2o8RQVi.png')",
        "flag-sprite": "url('/images/flag-sprite-global.png')",
        "global-sprite": "url('/images/nav-sprite-global.png')",
      },
    },
  },

  plugins: [],
};
