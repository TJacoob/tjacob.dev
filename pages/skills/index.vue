<template>
	<div>
		<h1>My Skills</h1>
		<ul>
			<li v-for="skill of skills" :key="skill.slug">
				<div>
					<h2>{{ skill.title }}</h2>
					<p>{{ skill.description }} ({{ skill.rating }})</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "skills",
	async asyncData({ $content, params }) {
		const skills = await $content('skills', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('createdAt', 'asc')
			.fetch()

		console.log(skills);

		return { skills }
	}
}
</script>

<style scoped>

</style>
