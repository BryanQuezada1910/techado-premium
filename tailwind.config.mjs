/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
	  },
	},
	daisyui: {
	  themes: [
		{
		  mytheme: {
			primary: "#d4af37",
			secondary: "#f5f5f5",
			accent: "#02020d",
			neutral: "#0e0503",
			"base-100": "#1a1a1a",
			info: "#00bde7",
			success: "#00d6b0",
			warning: "#fde047",
			error: "#ea0032",
		  },
		  secondary: {
			primary: "#d4af37",
			secondary: "#1a1a1a",
			accent: "#ededed",
			neutral: "#0e0503",
			"base-100": "#f5f5f5",
			info: "#00bde7",
			success: "#00d6b0",
			warning: "#fde047",
			error: "#ea0032",
		  },
		},
	  ],
	},
	plugins: [require("daisyui")],
  };
  