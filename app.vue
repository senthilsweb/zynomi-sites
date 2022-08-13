<template>
	<div>
		<h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
		<NuxtPage />
	</div>
</template>

<script setup>
import { Calendar } from 'v-calendar';
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
