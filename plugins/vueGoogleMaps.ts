import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig().public;
	nuxtApp.vueApp.use(VueGoogleMaps, {
		load: {
			key: `${process.env.GOOGLE_MAP_TOKEN}`,
		},
		autobindAllEvents: true,
	});
});
