<template>
	<div class="h-full bg-blue">
		<nav class="my-auto">
			<NuxtLink :to="{ name: 'aboutme' }">About Me</NuxtLink>
			<NuxtLink :to="{ name: 'work' }">Previous Work</NuxtLink>
			<NuxtLink :to="{ name: 'skills' }">Skills</NuxtLink>
			<NuxtLink :to="{ name: 'education' }">Education</NuxtLink>
			<NuxtLink :to="{ name: 'contacts' }">Get In Touch</NuxtLink>
		</nav>
	</div>
</template>

<script>
export default {
name: "Sidebar"
}
</script>

<style scoped>

</style>
