import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
        schibstedGrotesk: ["var(--font-schibsted-grotesk)", "sans-serif"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#21005D",
          "50": "#E9E6EF",
          "100": "#BAB0CD",
          "200": "#998AB4",
          "300": "#6A5492",
          "400": "#4D337D",
          "500": "#21005D",
          "600": "#1E0055",
          "700": "#170042",
          "800": "#120033",
          "900": "#0E0027"
        },
        secondary: {
          DEFAULT: "#7200CC",
          "50": "#F1E6FA",
          "100": "#D3B0EF",
          "200": "#BE8AE8",
          "300": "#A154DD",
          "400": "#8E33D6",
          "500": "#7200CC",
          "600": "#6800BA",
          "700": "#510091",
          "800": "#3F0070",
          "900": "#300056"
        },
        success: {
          DEFAULT: "#00A63B",
          "50": "#E6F6EB",
          "100": "#B0E3C2",
          "200": "#8AD6A5",
          "300": "#54C37C",
          "400": "#33B862",
          "500": "#00A63B",
          "600": "#009736",
          "700": "#00762A",
          "800": "#005B20",
          "900": "#004619"
        },
        error: {
          DEFAULT: "#DB000E",
          "50": "#FBE6E7",
          "100": "#F4B0B4",
          "200": "#EE8A90",
          "300": "#E7545E",
          "400": "#E2333E",
          "500": "#DB000E",
          "600": "#C7000D",
          "700": "#9B000A",
          "800": "#780008",
          "900": "#5C0006"
        },
        warning: {
          DEFAULT: "#EB801D",
          "50": "#FDF2E8",
          "100": "#F9D8B9",
          "200": "#F6C597",
          "300": "#F2AA68",
          "400": "#EF994A",
          "500": "#EB801D",
          "600": "#D6741A",
          "700": "#A75B15",
          "800": "#814610",
          "900": "#63360C"
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
