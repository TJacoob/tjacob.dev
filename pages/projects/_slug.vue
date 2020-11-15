<template>
	<div class="">
		<nuxt-link :to="{ name: 'projects'}" class="block w-full bg-blue md:bg-transparent container pt-12 pb-16 md:mb-6 md:pb-0 group">
			<div class="text-white md:text-gray-500 text-md font-semibold pb-2 border-b border-white md:border-gray-500 uppercase">
				<font-awesome-icon :icon="{prefix:'fas',iconName:'chevron-left'}" class="mr-2" />
				<div class="inline-block group-hover:transform group-hover:translate-x-1 transition duration-200">All Projects</div>
			</div>
		</nuxt-link>
		<article class="container">
			<div class="flex flex-col md:flex-row -mr-4">
				<!-- Slider -->
				<div class="md:w-3/5 h-64 md:h-96 pattern-diagonal flex overflow-hidden shadow-lg rounded-t-lg md:rounded-lg relative z-20 md:z-10 -mt-12 md:my-8 ">
					<!-- Controls -->
					<div @click="slideLeft" v-show="moreThanOneSlide" class="absolute z-20 text-blue-lighter w-10 h-full flex inset-y-0 left-0 group cursor-pointer md:ml-2">
						<font-awesome-icon id="slideLeft"  :icon="{prefix:'fas',iconName:'chevron-left'}" size="2x"
										   class="mx-auto my-auto transition duration-200 group-hover:transform group-hover:-translate-x-2 opacity-25"
						/>
					</div>
					<div @click="slideRight" v-show="moreThanOneSlide" class="absolute z-20 text-blue w-10 h-full flex inset-y-0 right-0 group cursor-pointer md:mr-6">
						<font-awesome-icon id="slideRight" :icon="{prefix:'fas',iconName:'chevron-right'}" size="2x"
										   class="mx-auto my-auto transition duration-200 group-hover:transform group-hover:translate-x-2"
						/>
					</div>
					<!-- Slides -->
					<div id="slide-1" v-show="project.image_1 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
						<img :src="require(`~/static/images/${project.image_1}`)" class="h-full w-auto mx-auto"/>
					</div>
					<div id="slide-2" v-show="project.image_2 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/${project.image_2}`)" class="h-full w-auto mx-auto"/>
					</div>
					<div id="slide-3" v-show="project.image_3 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/${project.image_3}`)" class="h-full w-auto mx-auto"/>
					</div>
					<div id="slide-4" v-show="project.image_4 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/${project.image_4}`)" class="h-full w-auto mx-auto"/>
					</div>
				</div>
				<div class="md:w-2/5 bg-blue-lighter text-white rounded-b-md md:rounded-md py-8 px-6 md:px-8 md:-ml-4 z-10 md:z-20 shadow-md flex flex-col -mt-4 md:mt-0">
					<h1 class="text-3xl font-semibold mb-5 pb-3 border-b-2 border-white ">
						{{ project.title }}
						<span class="font-normal text-gray-300 text-xl">({{ project.year }})</span>
					</h1>
					<div class="mb-1">
						<div v-for="tech in techsArray(project)"
							 class="rounded-lg cursor-default px-3 py-1 text-white bg-blue transition duration-200 inline-block text-sm mr-2 mb-2 whitespace-no-wrap"
						>
							{{tech}}
						</div>
					</div>
					<div class="mb-5">
						{{project.description}}
					</div>
					<div class="flex mt-auto">
						<a v-if="project.github!==undefined" :href="project.github" target="_blank" class="bg-blue text-white w-1/2 inline-flex items-center rounded-md p-3 group mr-2">
							<font-awesome-icon :icon="{prefix:'fab',iconName:'github'}" size="lg" />
							<div class="ml-3 mr-1 font-semibold group-hover:transform group-hover:-translate-x-1 transition duration-200">Github</div>
						</a>
						<a v-if="project.website!==undefined" :href="project.website" target="_blank" class="bg-blue text-white w-1/2 items-center inline-flex rounded-md p-3 group mr-2">
							<font-awesome-icon :icon="{prefix:'fas',iconName:'external-link-alt'}" size="md" />
							<div class="ml-3 mr-1 font-semibold group-hover:transform group-hover:-translate-x-1 transition duration-200">Website</div>
						</a>
					</div>
				</div>
			</div>
			<div class="flex text-gray-800 mt-6">
				<nuxt-content :document="project" />
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: "slug",
	data() {
		return {
			activeSlide: 1,
		}
	},
	async asyncData({$content, params}) {
		const project = await $content('projects', params.slug).fetch()
		let slides = 0;
		for (var i = 1; i <= 4; i++) {
			project['image_'+i]!==undefined ? slides += 1 :'';
		}
		return {project, slides}
	},
	methods: {
		techsArray(project) {
			return project.techs.split(',');
		},
		slideLeft(){
			let activeSlide = document.querySelector('#slide-'+this.activeSlide);
			if( this.activeSlide > 1 ){
				activeSlide.classList.remove('translate-x-0');
				activeSlide.classList.add('translate-x-full');
				let previousSlide = document.querySelector('#slide-'+(this.activeSlide-1));
				previousSlide.classList.remove('-translate-x-full');
				previousSlide.classList.add('translate-x-0');
				this.activeSlide = this.activeSlide-1;
				if ( this.activeSlide === 1 )
					document.querySelector('#slideLeft').classList.add('opacity-25');
				if ( this.activeSlide !== this.slides )
					document.querySelector('#slideRight').classList.remove('opacity-25');
			}
		},
		slideRight(){
			let activeSlide = document.querySelector('#slide-'+this.activeSlide);
			if( this.activeSlide < this.slides ){
				activeSlide.classList.remove('translate-x-0');
				activeSlide.classList.add('-translate-x-full');
				let nextSlide = document.querySelector('#slide-'+(this.activeSlide+1));
				nextSlide.classList.remove('translate-x-full');
				nextSlide.classList.add('translate-x-0');
				this.activeSlide = this.activeSlide+1;
				if ( this.activeSlide === this.slides )
					document.querySelector('#slideRight').classList.add('opacity-25');
				if ( this.activeSlide !== 1 )
					document.querySelector('#slideLeft').classList.remove('opacity-25');

			}
		}
	},
	computed:{
		moreThanOneSlide(){
			return this.slides > 1;
		},
	},
}
</script>

<style scoped>

</style>
