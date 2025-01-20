/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#1a2238", // Add your desired color code here
        },
      },
    },
  },
  plugins: [],
}

