<template>
	<main class="mx-auto bg-gradient-to-r from-fuchsia-800 via-fuchsia-900 to-fuchsia-800 ... lg:max-w-8xl px-5 lg:px-0 pt-14 lg:pt-12">
		<h1
			class="capitalize font-semibold text-[38px] lg:text-7xl text-center leading-snug text-white"
		>
			Bring ideas to Dance and Music <br />
			<span
				class="font-extrabold bg-clip-text text-fuchsia-500"
				>#withSwaranritya</span
			>
		</h1>
		<p class="mt-10 text-small text-center text-white font-medium">
			We believe dance is the best form of exercise for body and mind <br>so we offer Bollywood Bhangra fitness
		</p>
		<div
			class="text-center p-10 flex items-center justify-center space-x-4"
		>
		<div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button 
	 @click="useNuxtApp().$bus.$emit('evtShowContactSales')" 
	  class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span class="flex items-center space-x-5">
          <span class="pr-6 text-gray-100">Contact us</span>
        </span>
        <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">For new registrations &rarr;</span>
      </button>
    </div>
			
			<!--<NuxtLink
				to="#"
				class="text-sm group overflow-hidden relative bg-gray-50 ring-1 hover:ring-transparent ring-gray-300 rounded-full transition-all duration-300"
			>
				<div
					class="absolute h-full w-0 group-hover:w-full transition-all duration-500 bg-fuchsia-700"
				></div>
				<span
					class="block px-6 py-3 transition-all duration-500 group-hover:text-white relative"
					>Take Tour</span
				>
			</NuxtLink>-->
		</div>
	</main>
</template>
