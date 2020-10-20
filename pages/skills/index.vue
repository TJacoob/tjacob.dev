<template>
	<div class="container">
		<h1 class="text-blue font-semibold text-3xl">Skills</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices quis mi ut tristique. Proin id consectetur lectus. Integer fringilla, orci sit amet elementum auctor, purus justo hendrerit lorem, quis lacinia ipsum eros nec dui. Quisque viverra risus posuere mattis euismod. Praesent vel facilisis dolor.</p>
		<div class="flex mt-5 -mr-5">
			<div v-for="skill of topSkills" :key="skill.slug"
				 class="w-1/6 flex mb-5 mr-5 bg-white text-blue border-blue h-24 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-blue hover:to-blue-lighter hover:text-white transition duration-200 shadow-md">
				<div class="mr-auto mb-auto">
					<span class="font-semibold text-5xl leading-snug">{{ skill.rating }}</span>
					<span class="text-gray-500 group-hover:text-gray-300 text-md">/10</span>
				</div>
				<span class="ml-auto font-regular text-lg self-center mt-auto">{{ skill.title }}</span>
			</div>
		</div>
		<div class="flex mt-5">
			<div v-for="skill of otherSkills" :key="skill.slug"
				 class="w-1/6 flex mb-5 mr-5 bg-white text-blue border-blue h-24 px-5 py-3 rounded-lg bg-gradient-to-bl hover:from-blue hover:to-blue-lighter hover:text-white transition duration-200 shadow-md">
				<div class="mr-auto mb-auto">
					<span class="font-semibold text-5xl leading-snug">{{ skill.rating }}</span>
					<span class="text-gray-500 text-md">/10</span>
				</div>
				<span class="ml-auto font-regular text-lg self-center mt-auto">{{ skill.title }}</span>
			</div>
		</div>
	</div>
</template>

<!-- Alternative Skill Card
<div class="bg-white border-blue border-2 rounded-full w-24 h-24 flex justify-center items-center z-10 mx-auto">
	<span class="text-blue font-semibold text-4xl">{{ skill.rating }}</span>
	<span class="text-gray-600 text-md">/10</span>
</div>
<div class="bg-white border-blue border-b-2 text-center p-4 px-12 pt-8 -mt-6 rounded-lg z-0 ">
	<span class="text-blue font-semibold text-lg">{{ skill.title }}</span>
</div>
-->

<script>
export default {
	name: "skills",
	async asyncData({ $content, params }) {
		const skills = await $content('skills', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('rating', 'desc')
			.fetch()

		const topSkills = skills.slice(0,6)
		const otherSkills = skills.slice(6,skills.length)

		return { topSkills, otherSkills }
	}
}
</script>

<style scoped>

</style>
