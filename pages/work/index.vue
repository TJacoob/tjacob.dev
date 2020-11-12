<template>
	<div>
		<div class="w-full bg-blue md:bg-transparent container pt-12 pb-12 md:mb-3 md:pb-0 md:pt-8">
			<h1 class="text-white md:text-blue font-semibold text-3xl pb-2 border-b-2 border-blue">Previous Work</h1>
		</div>
		<div class="container">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices quis mi ut tristique. Proin id consectetur lectus. Integer fringilla, orci sit amet elementum auctor, purus justo hendrerit lorem, quis lacinia ipsum eros nec dui. Quisque viverra risus posuere mattis euismod. Praesent vel facilisis dolor.</p>
			<div v-for="work of works" :key="work.slug" class="flex bg-white rounded-3xl shadow-md ml-12 mt-8">
				<img class="inline w-32 h-32 mt-5 rounded-full border-2 border-blue-lighter -ml-12 bg-white" src="https://via.placeholder.com/150"  />
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

		return { works }
	}
}
</script>

<style scoped>

</style>
