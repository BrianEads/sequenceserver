/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../shared-ui/**/*.{erb,html}",
    "../sequence_server_extensions/views/**/*.{erb,html}",
    "./views/**/*.{erb,html}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        seqblue: "#00BCFF",
        seqgreen: "#89D329",
      }
    },
  },
  plugins: [],
};
