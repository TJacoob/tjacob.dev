<template>
	<div>
		<div class="flex flex-wrap overflow-hidden">
			<div class="h-screen w-full md:w-1/6 overflow-hidden fixed top-0 left-0 md:relative md:block z-0">
				<Sidebar/>
			</div>
			<div class="h-screen w-full md:w-5/6 overflow-x-hidden overflow-y-auto bg-gray-200 relative z-10 transition duration-300"
				 :class="{'origin-center transform -rotate-6 translate-x-64 scale-90 ml-8 rounded-xl shadow-xl':showNavbarMobile}"
			>
				<div class="md:hidden absolute top-0 left-0 mx-5 my-4 text-white md:text-gray-500 " @click="toggleNavbar()">
					<font-awesome-icon :icon="{prefix:'fas',iconName:'bars'}" size="lg" />
				</div>
				<Nuxt />
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
	components: {Sidebar},
	data() {
		return {
			showNavbarMobile: false,
		}
	},
	methods:{
		toggleNavbar(){
			this.showNavbarMobile = !this.showNavbarMobile;
		}
	}
}
</script>
