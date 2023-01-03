/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      backgroudImage: {
        logo: "url('/logoSemFundo.png')",
        "footer-gradient":
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(187,96,210,1) 50%, rgba(69,148,252,1) 100%)",
        "h1-gradient":
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(187,96,210,1) 50%, rgba(69,148,252,1) 100%)",
      },
    },
  },
  plugins: [],
};
