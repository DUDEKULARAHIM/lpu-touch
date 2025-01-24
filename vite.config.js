import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";






const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "lpu.png", "lpu.png"],
	manifest: {
		name: "LPUTouch",
		short_name: "LPUTouch",
		description: "lovely professional university",
		icons: [
			{
				src: "/lpu.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/lpu.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/lpu.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/lpu.png",
				sizes: "225x225",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};

// export default defineConfig({
//   plugins: [react(), 
//     VitePWA({
//     registerType: 'autoUpdate',
//     manifest: manifestForPlugin,
//   }),
//   ],
// })

export default defineConfig({
	base: './',
	plugins: [
	  react(),
	  VitePWA(manifestForPlugin, {
		registerType: 'autoUpdate',
	  }),
	],
  });