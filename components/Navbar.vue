<template>
	<div>
		<p>Navbar</p>
		<NuxtLink :to="{ name: 'aboutme' }">About Me</NuxtLink>
		<NuxtLink :to="{ name: 'work' }">Previous Work</NuxtLink>
		<NuxtLink :to="{ name: 'skills' }">Skills</NuxtLink>
		<NuxtLink :to="{ name: 'education' }">Education</NuxtLink>
		<NuxtLink :to="{ name: 'contacts' }">Get In Touch</NuxtLink>
	</div>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>
