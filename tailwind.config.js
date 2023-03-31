/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d6990c",

          "secondary": "#adffce",

          "accent": "#4cff70",

          "neutral": "#2B1E2F",

          "base-100": "#3B385C",

          "info": "#7B8CDB",

          "success": "#1F9384",

          "warning": "#B99204",

          "error": "#F14E3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}