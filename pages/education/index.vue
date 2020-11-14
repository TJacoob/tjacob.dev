<template>
	<div>
		<div class="w-full bg-blue md:bg-transparent container pt-12 pb-12 md:mb-3 md:pb-0 md:pt-8">
			<h1 class="text-white md:text-blue font-semibold text-3xl pb-2 border-b-2 border-blue">Education</h1>
		</div>
		<div class="container">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-12 md:mt-5 mb-5">
				<div v-for="course of courses" :key="course.slug"
						   class="flex flex-col overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 group">
					<div class="w-full h-56 overflow-hidden bg-cover bg-center bg-blue flex py-2 px-3 md:px-5" :style="{backgroundImage:'url('+require(`~/static/images/${course.cover}`)+')'}">
						<div class="w-full mt-auto flex flex-wrap -mb-2">

						</div>
					</div>
					<div class="pt-4 pb-5 px-4 md:px-5">
						<p class="text-xl font-semibold mb-2 md:mb-1 leading-tight md:leading-normal">
							{{course.degree}}
						</p>
						<p class="leading-snug">
							{{course.university}}
							<span class="font-light text-gray-600">({{course.startYear}} - {{course.endYear}} )</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "education",
	async asyncData({ $content, params }) {
		const courses = await $content('education', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('endYear', 'desc')
			.fetch()

		return { courses }
	},
}
</script>

<style scoped>

</style>
