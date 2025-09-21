import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom cyberpunk theme colors
        cyber: {
          primary: "#00ffff", // Cyan
          secondary: "#9933ff", // Purple
          accent: "#00ff00", // Neon Green
          dark: "#0a0a1a", // Dark background
          darker: "#050510", // Darker background
          terminal: {
            green: "#33ff33", // Terminal green
            text: "#cccccc", // Terminal text
            dark: "#000000", // Terminal background
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glitch: {
          "0%": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translate(-2px, 2px)",
          },
          "40%": {
            transform: "translate(-2px, -2px)",
          },
          "60%": {
            transform: "translate(2px, 2px)",
          },
          "80%": {
            transform: "translate(2px, -2px)",
          },
          "100%": {
            transform: "translate(0)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px var(--glow-color), 0 0 10px var(--glow-color)",
          },
          "50%": {
            boxShadow: "0 0 20px var(--glow-color), 0 0 30px var(--glow-color)",
          },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        "matrix-rain": {
          "0%": { top: "-50%" },
          "100%": { top: "110%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glitch": "glitch 0.5s infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink-caret": "blink 0.75s step-end infinite",
        "matrix-rain": "matrix-rain 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, #1a1a2e66 1px, transparent 1px), linear-gradient(to bottom, #1a1a2e66 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-cyan": "0 0 5px #00ffff, 0 0 10px #00ffff",
        "neon-purple": "0 0 5px #9933ff, 0 0 10px #9933ff",
        "neon-green": "0 0 5px #00ff00, 0 0 10px #00ff00",
      },
    },
  },
  plugins: [],
};

export default config;