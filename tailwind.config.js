/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        darkgreen: "#006400",         // dark green - header background
        lightgreen: "#0B7F0B",        // light green - section background
        cyanCustom: "#00CFFF",        // cyan - buttons, links, hover, highlights
        cyanDark: "#00A6CC",          // dark cyan - hover state for accent buttons
        gold: "#D4AF37",              // gold - headings, icons, borders
        lightGray: "#EDEDED",         // light gray - paragraph on dark background
        veryLightGray: "#F2F2F2",     // very light gray - background for clean sections
        darkGray: "#333333",          // dark gray - text on light background
        footer: "#004B00",            // footer background
        dark: "#003300",              // dark green - text on dark background
        section: "#F7F8F7",           // light neutral for clean sections
        greenGray: "F5F7F5",          // green tinted gray
        neutral: "F8F8F8",            // neutral gray
      },
    },
  },
  plugins: [],
};
