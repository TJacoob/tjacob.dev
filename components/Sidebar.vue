<template>
	<div class="flex flex-col h-full bg-gradient-to-tr from-blue to-blue-lighter">
		<div class="w-full text-left px-10 py-4 md:py-20 my-auto md:my-0">
			<div class="py-4 pr-48 md:pr-24">
				<img src="~/assets/images/profile.png" class="rounded-full border-4 border-white" />
			</div>
			<span class="block text-white text-3xl font-semibold leading-tight">Tomás Jacob</span>
			<span class="block text-white text-xl leading-tight pb-2">Junior Web Developer</span>
			<nav class="my-4 py-4 border-t border-b">
				<NuxtLink
					:to="{ name: 'aboutme' }"
					class="block text-lg md:text-xl py-2 text-white hover:bg-blue-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					About Me
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'work' }"
					class="block text-lg md:text-xl py-2 text-white hover:bg-blue-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Previous Work
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'projects' }"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-blue-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Projects
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'skills' }"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-blue-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Skills
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'education' }"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-blue-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Education
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'contacts' }"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-blue-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Get In Touch
				</NuxtLink>
			</nav>
			<div class="flex py-2">
				<a href="https://www.linkedin.com/in/tjacoob/" target="_blank" class="mr-3 text-white">
					<font-awesome-icon :icon="{prefix:'fab',iconName:'linkedin-in'}" size="2x" />
				</a>
				<a href="https://github.com/TJacoob" target="_blank" class="mx-3 text-white">
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
