import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],
	/*
	 ** Plugins to load before mounting the App
	 */

	router: {},
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	publicRuntimeConfig: {
		BASE_URL: process.env.MONGODB_ATLAS_REST_URL,
		MONGODB_ATLAS_REST_TOKEN: process.env.MONGODB_ATLAS_REST_TOKEN,
	},
	privateRunimeConfig: {
		MONGODB_ATLAS_REST_URL: process.env.MONGODB_ATLAS_REST_URL,
		MONGODB_ATLAS_REST_TOKEN: process.env.MONGODB_ATLAS_REST_TOKEN,
	},
	modules: ["@nuxt/content"],
	content: {
		// https://content.nuxtjs.org/api/configuration
	},
});
