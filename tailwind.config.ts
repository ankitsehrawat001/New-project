import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05050a",
        frost: "rgba(255,255,255,.08)",
        cyanLux: "#37e7ff",
        violetLux: "#a855f7"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 42px rgba(55,231,255,.25), 0 0 92px rgba(168,85,247,.14)",
        glass: "inset 0 1px 0 rgba(255,255,255,.12), 0 24px 80px rgba(0,0,0,.28)"
      },
      backgroundImage: {
        aurora: "radial-gradient(circle at 15% 20%, rgba(55,231,255,.28), transparent 30%), radial-gradient(circle at 85% 10%, rgba(168,85,247,.26), transparent 32%), radial-gradient(circle at 50% 95%, rgba(14,165,233,.14), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
