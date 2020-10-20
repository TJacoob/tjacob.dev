<template>
	<div class="flex flex-col h-full bg-gradient-to-bl from-blue to-blue-lighter">
		<div class="w-full mt-20 text-center">
			<div class="px-16 py-4">
				<img src="~/assets/images/profile.png" class="rounded-full border-4 border-white" />
			</div>
			<span class="block text-white text-3xl font-semibold leading-tight">Tomás Jacob</span>
			<span class="block text-white text-xl leading-tight mb-4">Junior Web Developer</span>
			<nav class="">
				<NuxtLink
					:to="{ name: 'aboutme' }"
					class="block text-xl py-2 text-white text-center hover:bg-blue-lighter transition duration-200">
					About Me
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'work' }"
					class="block text-xl py-2 text-white text-center hover:bg-blue-lighter transition duration-200">
					Previous Work
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'skills' }"
					class="block text-xl py-2 text-white text-center hover:bg-blue-lighter transition duration-200">
					Skills
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'education' }"
					class="block text-xl py-2 text-white text-center hover:bg-blue-lighter transition duration-200">
					Education
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'contacts' }"
					class="block text-xl py-2 text-white text-center hover:bg-blue-lighter transition duration-200">
					Get In Touch
				</NuxtLink>
			</nav>
			<div class="py-2 mt-4">
				<a href="#" target="_blank" class="mx-3 text-white">
					<font-awesome-icon :icon="{prefix:'fab',iconName:'linkedin-in'}" size="2x" />
				</a>
				<a href="#" target="_blank" class="mx-3 text-white">
					<font-awesome-icon :icon="{prefix:'fab',iconName:'github'}" size="2x" />
				</a>
				<a href="#" target="_blank" class="mx-3 text-white">
					<font-awesome-icon :icon="{prefix:'fab',iconName:'twitter'}" size="2x" />
				</a>
				<a href="#" target="_blank" class="mx-3 text-white">
					<font-awesome-icon :icon="{prefix:'far',iconName:'envelope'}" size="2x" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
name: "Sidebar"
}
</script>

<style scoped>

</style>
