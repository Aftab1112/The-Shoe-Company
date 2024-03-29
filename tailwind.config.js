/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media560: "560px",
        media500: "500px",
        media430: "430px",
      },
      backgroundImage: {
        testimonials: "url('/images/background-image-testimonials.png')",
      },
    },
  },
  plugins: [],
};
