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
        "flag-sprite": "url('/images/flag-sprite-global.png')",
        "global-sprite": "url('/images/nav-sprite-global.png')",
        "global-sprite-1x":
          "url('https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB587940754_.png')",
        "big-arrow-sprites":
          "url('https://m.media-amazon.com/images/S/sash/ydDD9hnRfziI$y7.png')",
        "medium-icon-sprites":
          "url('https://m.media-amazon.com/images/S/sash/g3Ux380Nnt6-OWJ.png')",
        "sm-icon-sprites":
          "url('https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png')",
        "stars-icon-sprites":
          "url('https://m.media-amazon.com/images/S/sash/fe7v9cZH5dQOFva.png')",
      },
    },
  },

  plugins: [],
};
