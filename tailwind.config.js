/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.js",
  "./templates/**/*.html.twig",],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url(images/hero.jpg)",
      },
      colors:{
        "navbar-color": "#F5E5CC",
      }
    },
  },
  plugins: [],
}

