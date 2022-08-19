<template>
    <div class="space-y-4">
        <!-- Active: "ring-1 ring-offset-2 ring-indigo-500" -->
        <label v-for="(location, idx) in locations.locations" :key="idx + '_' + location.name" class="relative flex items-center space-x-3   rounded-lg   shadow-sm px-6 py-4 cursor-pointer  sm:flex sm:justify-between focus:outline-none
		" :class="selected.name == location.name ? 'bg-fuchsia-50 ring-1 ring-offset-0 ring-fuchsia-500 border-2 border-fuchsia-300 hover:border-fuchsia-400' : 'bg-white border border-gray-300 hover:border-gray-400'">
            <input type="radio" @change="onChange($event, location)" :id="'rdo_methodology_' + idx" name="server-size"
                :value="location.name" class="sr-only" aria-labelledby="server-size-0-label"
                aria-describedby="server-size-0-description-0 server-size-0-description-1">
            <!--<img :src="location.icon.img" class="h-12 w-12" :alt="location.name">-->
            <div class="flex-1 items-center">
                <div class="text-sm">
                    <p id="server-size-0-label"
                        :class="selected.name == location.name ? 'font-extrabold text-fuchsia-900' : 'font-medium text-gray-900'">
                        {{ location.name }}
                    </p>
                    <div id="server-size-0-description-0"
                        :class="selected.name == location.name ? 'text-fuchsia-700' : 'text-gray-500'">
                        <p class="sm:inline">{{ location.address.street }}</p>

                    </div>
                </div>
            </div>
            <!-- Checked: "border-indigo-500", Not Checked: "border-transparent" 
	  :class="textColor=='white' ? 'text-white' : 'text-fuchsia-500  hover:text-fuchsia-600  focus:text-fuchsia-600'"
	  -->

        </label>

    </div>
</template>
<script>
import locations from "@/store/locations.json";
export default {
    components: {},
    data() {
        return {
            locations,
            selected: locations.locations[0],
        };
    },
    methods: {
        onChange(event, obj) {
            var optionText = event.target.id;
            console.log(optionText);
            console.log(obj.name);
            this.selected = obj;
            //$nuxt.$emit('evtLocationChange', obj)
            useNuxtApp().$bus.$emit('evtLocationChange', obj)
        }
    }
};
</script>