import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./pages/**/*.{ts,tsx}"
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "#050510",
        foreground: "#F8FAFC",
        accent: {
          teal: "#4de8d0",
          purple: "#9b5cff"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans]
      },
      borderRadius: {
        xl: "1.5rem"
      },
      boxShadow: {
        glow: "0 25px 50px -12px rgba(77, 232, 208, 0.35)",
        card: "0 20px 45px -20px rgba(99, 102, 241, 0.45)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(77, 232, 208, 0.45)" },
          "70%": { boxShadow: "0 0 0 12px rgba(77, 232, 208, 0)" }
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s infinite",
        gradient: "gradient 12s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;
