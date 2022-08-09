<template>
	<header
		class="flex items-center bg-fuchsia-900  justify-between h-20 lg:max-w-8xl mx-auto px-5 lg:px-5 sticky top-0 z-50"
	>
		<!-- Logo -->
		<NuxtLink to="/">
			<IconLogo class="w-14 h-14" />
		</NuxtLink>
		<!-- Nav Starts-->
		
		


                            <!--Main Menu (Start)-->
                            <div class="hidden  space-x-8 md:flex md:ml-10">
                                <div
                                    v-for="(menu,idx) in nav"
                                    @mouseover="showMenu(idx)"
                                    :key="'mnu_' + idx + '_' + menu.link"
                                >
                                    <div
                                        class="relative"
                                        v-if="menu.children"
                                    >
                                        <button
                                            type="button"
                                            class="group inline-flex items-center space-x-2 font-bold text-xl leading-6 focus:outline-none transition ease-in-out duration-150"
                                            :class="textColor=='white' ? 'text-white' : 'text-white  hover:text-white  focus:text-white'"
                                        >
                                            <span>{{menu.title}}</span>
                                            <!-- Item active: "text-white", Item inactive: "text-white-400" -->
                                            <svg
                                                class="transition ease-in-out duration-150"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                :class="textColor=='white' ? 'text-white h-5 w-5 group-hover:text-white group-focus:text-white' : 'text-white h-5 w-5 group-hover:text-white group-focus:text-white'"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                                </svg>
                                                </button>
                                                <!--Main Menu (End)-->
                                                 <!--Flyout Menu (Start)-->
                                                <div class="absolute z-10 inset-x-0 transform shadow-lg">
                                                   
                                                <div
                                                    @focus="showMenu(idx)"
                                                    @mouseleave="hideMenu(idx)"
                                                    v-if="isVisible[idx]"
                                                    :id="'cmenu_'+idx"
                                                    class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 z-50"
                                                >
                                                    <div class="rounded-lg shadow-lg">
                                                        <div class="rounded-lg shadow-xs overflow-hidden">
                                                            <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                <a
                                                                    :href="childmenu.link"
                                                                    v-for="(childmenu,idx) in menu.children"
                                                                    :key="'mnu_' + idx + '_' + childmenu.link"
                                                                    class="-m-3 p-3 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150"
                                                                >
                                                                    <div v-if="childmenu.img">

                                                                        <img
                                                                            :src="childmenu.img"
                                                                            width="30"
                                                                            height="30"
                                                                            :alt="childmenu.title"
                                                                        >
                                                                    </div>
                                                                    <div v-else>
																	<!--<span  class="rounded-full bg-indigo-50 inline-flex p-3 text-indigo-700 ring-4 ring-white" :class="`bg-${childmenu.spancolor}-50`">-->
                                                                        <svg
                                                                            class="flex-shrink-0 h-6 w-6 fill-fuchsia-500"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                :d="childmenu.icon"
                                                                            />
                                                                            </svg>
																			<!--</span>-->
                                                                    </div>
                                                                    <div class="space-y-1">
                                                                        <p class="leading-6 font-bold hover:text-fuchsia-900">
                                                                            {{childmenu.title}}
                                                                        </p>
                                                                    </div>
                                                                    </a>
                                                            </div>
                                                        </div>
                                                    </div>
                            </div>
                    </div>
                    <!--Flyout Menu (End)-->
                    </div>
                    <div v-else>
                        <a
                            :href="menu.link"
                            class="text-xl leading-6 font-bold  focus:outline-none transition ease-in-out duration-150"
                            :class="textColor=='white' ? 'text-white' : 'text-white  hover:text-white  focus:text-white'"
                        >
                            {{menu.title}}
                            </a>
                    </div>
                    </div>
                    </div>
                    <!--Main Menu (End)-->





		<!--Nav Action button start-->
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
		<!--Nav action button end-->
<!--Nav Ends-->
	</header>
</template>
<script setup>
import { ref } from 'vue';
	
const nav = [
	{
		"img": "https://res.cloudinary.com/nathansweb/image/upload/v1630897884/zicons/layers_g8nilb.svg",
		"icon": "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
		"title": "Classes",
		"link": "/",
		"children": [
			{
				"img": "",
				"icon": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
				"spancolor" : "fuchsia",
				"title": "Odissi",
				"link": "/"
			},
			{
				"img": "",
				"icon": "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
				"spancolor" : "sky",
				"title": "Carnatic Music",
				"link": "/"
			},
	
			{
				"img": "",
				"icon": "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
				"spancolor" : "yellow",
				"title": "Bharathanatiyam",
				"link": "/"
			},
			{
				"img": "",
				"icon": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
				"spancolor" : "pink",
				"title": "Bollywood",
				"link": "/"
			},
		
			{
				"img": "",
				"icon": "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                "spancolor" : "fuchsia",
				"title": "Yoga for children",
				"link": "/"
			}
		]
	},
	{
		"img": "https://res.cloudinary.com/nathansweb/image/upload/v1630956425/zicons/holding-hands_q6hb0k.svg",
		"icon": "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
		"title": "Workshops",
		"link": "/casestudy"
	},
	{
		"img": "https://res.cloudinary.com/nathansweb/image/upload/v1630956425/zicons/holding-hands_q6hb0k.svg",
		"icon": "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
		"title": "Dance",
		"link": "/casestudy"
	},
	{
		"img": "https://res.cloudinary.com/nathansweb/image/upload/v1630897884/zicons/layers_g8nilb.svg",
		"icon": "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
		"title": "Gallery",
		"link": "/",
		"children": [
			{
				"img": "",
				"icon": "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
				"spancolor" : "fuchsia",
				"title": "Photo",
				"link": "/about"
			},
			{
				"img": "",
				"icon": "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
				"spancolor" : "sky",
				"title": "Videos",
				"link": "/methodology"
			}
		]
	},
	{
		"img": "https://res.cloudinary.com/nathansweb/image/upload/v1630956425/zicons/holding-hands_q6hb0k.svg",
		"icon": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
		"title": "About Us",
		"link": "/about"
	}
];
const isVisible = ref(new Array(20).fill(false));//https://www.netlify.com/blog/understanding-defineprops-and-defineemits-in-vue-3.2/
let textColor = "indigo";
function showMenu(idx) {
		
	this.isVisible.forEach((value, index) => {
		this.isVisible[index] = true;
		if (index!=idx)
			this.isVisible[index] = false;
		});
};
function hideMenu(index) {
	this.isVisible[index] = false;
}
function toggleMobileMenu() {
	this.mobileMenuVisiblity = !this.mobileMenuVisiblity;
	$nuxt.$emit("evtMobilemenu");
};
</script>
