import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	publicRuntimeConfig: {},

	privateRunimeConfig: {
		MONGODB_ATLAS_REST_URL: process.env.MONGODB_ATLAS_REST_URL,
		MONGODB_ATLAS_REST_TOKEN: process.env.MONGODB_ATLAS_REST_TOKEN,
	},
});
