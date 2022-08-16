<template>
	<div>
		<!--<h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
		<select v-model="$colorMode.preference">
			<option value="system">System</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
			<option value="sepia">Sepia</option>
		</select>-->
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
import { Calendar } from 'v-calendar';
//const colorMode = useColorMode()
//console.log(colorMode.preference)
useHead({
	title: "Advanced Homes",
	meta: [
		{
			name: "description",
			content: "Advanced Homes - Let us help you make the transition",
		},
		{
			property: "og:title",
			content: "Advanced Homes",
		},
		{
			property: "og:description",
			content: "Advanced Homes - Let us help you make the transition",
		},
		{
			property: "og:image",
			content: "/home.jpg",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:site_name",
			content: "Advanced Homes",
		},
	],
});
</script>
