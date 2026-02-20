/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./*.html", "./src/**/*.{html,js}", "./projects/*.html"],

  theme: {
    extend: {
      colors: {
        "blue-purple": {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },

      keyframes: {
        typingLoop: {
          "0%": { width: "0%" },
          "40%": { width: "100%" },
          "60%": { width: "100%" },
          "100%": { width: "0%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        typingFull:
          "typingLoop 8s steps(22) infinite, blink 1s step-end infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
    },
  },

  plugins: [],
};
