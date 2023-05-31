/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dayBlue: {
          500: "#4d62e5",
        },
        nobleBlack: {
          700: "#131619",
          300: "#9b9c9e",
          400: "#686b6e",
          500: "#363a3d",
          600: "#1a1d21",
          800: "#0d0f10",
        },
        steamGreen: {
          500: "#b6f09c",
          700: "#739f5f",
        },
      },
    },
  },
  plugins: [],
};
