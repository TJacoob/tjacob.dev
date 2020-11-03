<template>
	<div>
		<div class="w-full bg-blue md:bg-transparent container pt-12 pb-12 md:mb-3 md:pb-0">
			<h1 class="text-white md:text-blue font-semibold text-3xl pb-2 border-b-2 border-blue">Projects</h1>
		</div>
		<div class="container">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-12 md:mt-5 mb-5">
				<nuxt-link v-for="project of projects" :to="{ name: 'projects-slug', params: { slug: project.slug }}" :key="project.slug"
						   class="block overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200">
					<div class="w-full h-56 overflow-hidden bg-cover bg-center bg-blue flex py-2 px-3 md:px-5" :style="{backgroundImage:'url('+require(`~/static/images/${project.cover}`)+')'}">
						<div class="w-full mt-auto flex flex-wrap -mb-2">
							<div v-for="tech in techsArray(project)"
								 class="rounded-lg px-3 py-1 text-white bg-black bg-opacity-25 hover:bg-opacity-75 transition duration-200  inline text-sm mr-2 mb-2 whitespace-no-wrap"
							>
								{{tech}}
							</div>
						</div>
					</div>
					<div class="py-3 px-3 md:px-5">
						<p class="text-xl font-semibold mb-1">
							{{project.title}}
							<span class="font-light text-gray-600">({{project.year}})</span>
						</p>
						<p class="leading-snug mb-1">{{project.description}}</p>
					</div>
				</nuxt-link>
			</div>
			<p class="leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices quis mi ut tristique. Proin id consectetur lectus. Integer fringilla, orci sit amet elementum auctor, purus justo hendrerit lorem, quis lacinia ipsum eros nec dui. Quisque viverra risus posuere mattis euismod. Praesent vel facilisis dolor.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "projects",
	async asyncData({ $content, params }) {
		const projects = await $content('projects', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.fetch()

		return { projects }
	},
	methods: {
		// Going to make some small js tweaks
		techsArray(project) {
			return project.techs.split(',');
		}
	},
	head: {
		titleTemplate: 'Projects',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },

			// hid is used as unique identifier. Do not use `vmid` for it as it will not work
			{ hid: 'description', name: 'description', content: 'Meta description' }
		]
	}
}
</script>

<style scoped>

</style>
