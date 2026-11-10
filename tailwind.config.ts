import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // Zero Radii Standard: every radius utility resolves to 0px.
    borderRadius: {
      none: "0px",
      DEFAULT: "0px",
      sm: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "0px",
    },
    extend: {
      colors: {
        ink: "#4A3F34",
        sand: "#EAE4D6",
        base: "#F5F2EA",
        charcoal: "#3B3229",
        amber: { thermal: "#6E8B5E" },
        safety: "#8A6A4A",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
