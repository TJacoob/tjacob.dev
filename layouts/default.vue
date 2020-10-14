<template>
	<div>
		<Navbar/>
		<div class="content">
			<Nuxt />
		</div>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
	components: {Navbar}
}
</script>
