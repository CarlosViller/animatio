import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#e9c285",
  600: "#8e6200",
  900: "#442d00",
  950: "#322000",
};
const gray = {
  100: "#f4f7f9",
  200: "#e9eef3",
  300: "#bdc3c8",
  400: "#828d97",
  500: "#4f5963",
  700: "#303942",
  800: "#1f2830",
  900: "#14191d",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray, primary: "#e9c285" },
    },
  },
  plugins: [starlightPlugin()],
};
