<template>
	<div>
		<div class="w-full bg-blue md:bg-transparent container pt-12 pb-12 md:mb-3 md:pb-0 md:pt-8">
			<h1 class="text-white md:text-blue font-semibold text-3xl pb-2 border-b-2 border-blue">Previous Work</h1>
		</div>
		<div class="container">
			<div class="grid grid-cols-1 gap-24 md:gap-10 mt-8 md:mt-8 mb-4">
				<div v-for="work of works" :key="work.slug" class="flex flex-col md:flex-row bg-white rounded-3xl shadow-md md:ml-12">
					<img class="inline w-32 h-32 rounded-full border-2 border-blue-lighter bg-white mx-auto -mt-20 md:-ml-16 md:my-auto" :src="require(`~/static/images/${work.logo}`)"  />
					<div class="px-5 pt-3 pb-8 md:pt-5 md:pb-6">
						<h2 class="inline text-blue font-semibold text-xl">
							{{ work.position }}
							<a :href="work.website" target="_blank" class="font-light hover:text-blue-lighter transition duration-200">@ {{ work.company }}</a>
						</h2>
						<span class="block md:inline md:ml-1 text-gray-600 mb-3 md:mb-0">( {{ work.started }} - {{ work.ended }} )</span>
						<nuxt-content :document="work" />
					</div>
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
