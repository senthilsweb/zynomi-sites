<template>
	<main class="mx-auto bg-gradient-to-r from-fuchsia-800 via-fuchsia-900 to-fuchsia-800 ... lg:max-w-8xl px-5 lg:px-0 pt-14 lg:pt-12">
		<h1
			class="capitalize font-semibold text-[38px] lg:text-7xl text-center leading-snug text-white"
		>
			Bring ideas to life <br />
			<span
				class="font-extrabold bg-clip-text text-fuchsia-500"
				>#withZynomi</span
			>
		</h1>
		<p class="mt-10 text-small text-center text-white font-medium">
			From tasks and workflows to apps and systems, build and automate anything in one <br> powerful visual platform.
		</p>
		<div
			class="text-center p-10 flex items-center justify-center space-x-4"
		>
			<NuxtLink
				to="#"
				class="px-6 py-3 text-sm bg-fuchsia-700 text-white rounded-full hover:bg-fuchsia-800 transition-all duration-300"
				>Get started free</NuxtLink
			>
			<NuxtLink
				to="#"
				@click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="text-sm group overflow-hidden relative bg-gray-50 ring-1 hover:ring-transparent ring-gray-300 rounded-full transition-all duration-300"
			>
				<div
					class="absolute h-full w-0 group-hover:w-full transition-all duration-500 bg-fuchsia-700"
				></div>
				<span
					class="block px-6 py-3 transition-all duration-500 group-hover:text-white relative"
					>Take Tour</span
				>
			</NuxtLink>
		</div>
	</main>
</template>
