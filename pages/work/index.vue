<template>
	<div class="container">
		<h1 class="text-blue font-semibold text-3xl">Previous Work</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices quis mi ut tristique. Proin id consectetur lectus. Integer fringilla, orci sit amet elementum auctor, purus justo hendrerit lorem, quis lacinia ipsum eros nec dui. Quisque viverra risus posuere mattis euismod. Praesent vel facilisis dolor.</p>
		<div v-for="work of works" :key="work.slug" class="flex bg-white rounded-3xl border-b-2 border-blue ml-12 mt-8">
			<img class="inline w-32 h-32 mt-5 rounded-full border-4 border-white -ml-12" src="https://via.placeholder.com/150"  />
			<div class="py-5 px-5">
				<h2 class="inline text-blue font-semibold text-xl">
					{{ work.position }}
					<a :href="work.website" target="_blank" class="font-light hover:text-blue-lighter transition duration-200">@ {{ work.company }}</a>
				</h2>
				<span class="ml-1 text-gray-600">( {{ work.started }} - {{ work.ended }} )</span>
				<nuxt-content :document="work" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "work",
	async asyncData({ $content, params }) {
		const works = await $content('work', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('started', 'desc')
			.fetch()

		console.log(works);
		return { works }
	}
}
</script>

<style scoped>

</style>
