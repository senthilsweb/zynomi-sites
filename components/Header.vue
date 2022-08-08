<template>
	<header
		class="flex items-center bg-fuchsia-900  justify-between h-20 lg:max-w-8xl mx-auto px-5 lg:px-5"
	>
		<!-- Logo -->
		<NuxtLink to="/">
			<IconLogo class="w-14 h-14" />
		</NuxtLink>
		<!-- Nav -->
		<ul class="md:flex items-center space-x-3 hidden">
			<template :key="`Navitem${i}`" v-for="(n, i) in nav">
				<li>
					<NuxtLink
						class="inline-block px-3 py-2  text-white hover:text-fuchsia-500 transition-all duration-300 text-sm"
						to="#"
						>{{ n.text }}</NuxtLink
					>
				</li>
			</template>
		</ul>
		<div class="hidden md:flex md:items-center md:space-x-6">
		<NuxtLink
			to="#"
			class="px-5 py-2 text-sm text-fuchsia-500 ring-2 ring-fuchsia-500 ring-inset text-white rounded-full transition-all duration-300"
			>Sign in</NuxtLink
		>
		<NuxtLink
			to="#"
			@click="useNuxtApp().$bus.$emit('evtShowContactSales')"
			class="px-5 py-2 text-sm bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-700 transition-all duration-300"
			>Contact us</NuxtLink
		>
		</div>
		

	</header>
</template>
<script setup>
	const nav = [
		{
			text: "Home",
			link: "#",
		},
		{
			text: "About",
			link: "#",
		},
		{
			text: "Contact",
			link: "#",
		},
		{
			text: "Reviews",
			link: "#",
		},
	];
</script>
