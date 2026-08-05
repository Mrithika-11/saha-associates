/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#EAF0FA",
          100: "#C7D6EE",
          400: "#274D7D",
          600: "#132A4D",
          700: "#0B1F3A",
          900: "#060F1D",
        },
        royal: {
          DEFAULT: "#14509E",
          light: "#2E6FC4",
          dark: "#0F3C78",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C77E",
          dark: "#9C7A2E",
        },
        surface: {
          light: "#F4F6F9",
          dark: "#0B1F3A",
        },
        ink: {
          DEFAULT: "#23262B",
          soft: "#5B6270",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(201,162,75,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: 1000 },
          "100%": { strokeDashoffset: 0 },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "draw-line": "draw-line 2.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
