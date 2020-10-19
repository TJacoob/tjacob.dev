<template>
	<div>
		<div class="flex flex-wrap overflow-hidden">
			<div class="h-screen w-1/6 overflow-hidden">
				<Sidebar/>
			</div>
			<div class="h-screen w-5/6 overflow-x-hidden overflow-y-auto bg-gray-200 py-12">
				<Nuxt />
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
	components: {Sidebar}
}
</script>
