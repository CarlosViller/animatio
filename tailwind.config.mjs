import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#F8CE6B', 600: '#FFF', 900: '#FFF', 950: '#23272a' };
const gray = { 100: '#FFF', 200: '#FFF', 300: '#c0c2c4', 400: '#FFF', 500: '#FFF', 700: '#35393b', 800: '#23272a', 900: '#2F2F2F' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};