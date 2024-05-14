/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 52%)",
      },
      width: {
        34: "136px",
        66: "264px",
      },
      height: {
        82: "336px",
      },
      boxShadow: {
        "3xl": "0px 0px 7px 2px #00000008",
      },
      gap: {
        10.5: "42px",
      },
      fontSize: {
        '3.5xl': [
          "2rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
};
