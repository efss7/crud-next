/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /from-(green|blue|gray)-(400|500|700)/ },
    { pattern: /to-(green|blue|gray)-(400|500|700)/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
