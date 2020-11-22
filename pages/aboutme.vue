<template>
	<div>
		<div class="w-full bg-blue md:bg-transparent container pt-12 pb-12 md:mb-6 md:pb-0 md:pt-8">
			<h1 class="text-white md:text-blue font-semibold text-3xl pb-2 border-b-2 border-blue">About Me</h1>
		</div>
		<div class="container">
			<div class="flex flex-col md:flex-row -mr-4 w-full ">
				<!-- Slider -->
				<div class="md:w-2/5 bg-blue-lighter text-white rounded-t-md md:rounded-md py-8 px-6 md:px-8 z-10 md:z-20 shadow-md flex flex-col -mt-12 md:mt-0">
					<div class="mb-5">
						<p class="mb-2">During business hours I am a Junior Web Developer. Why? I believe in creating things, whatever they are, and Web Development is a way to create: websites, stores, management platforms, you name it. Through careful design and implementation, it is possible to make pretty much any tool a new reality for anyone around the world.</p>
						<p class="mb-2">Tech-wise, I am an enthusiast of frontend frameworks, such as Vue or React, as they enable developers to build quickly and easily. Either proofs-of-concept or full-blown applications.</p>
						<p>After hours, I am a huge fan of concerts, travelling and sports. Pick either one of these topics and we can talk about it for hours, over beer or coffee.</p>
					</div>

				</div>
				<div class="md:w-3/5 h-64 md:h-96 pattern-diagonal flex overflow-hidden shadow-lg rounded-b-lg md:rounded-lg relative z-20 md:z-10 -mt-4 md:my-8 md:-mx-4 ">
					<!-- Controls -->
					<div @click="slideLeft" v-show="moreThanOneSlide" class="absolute z-20 text-blue-lighter w-10 h-full flex inset-y-0 left-0 group cursor-pointer md:ml-6">
						<font-awesome-icon id="slideLeft"  :icon="{prefix:'fas',iconName:'chevron-left'}" size="2x"
										   class="mx-auto my-auto transition duration-200 group-hover:transform group-hover:-translate-x-2 opacity-25"
						/>
					</div>
					<div @click="slideRight" v-show="moreThanOneSlide" class="absolute z-20 text-blue w-10 h-full flex inset-y-0 right-0 group cursor-pointer md:mr-2">
						<font-awesome-icon id="slideRight" :icon="{prefix:'fas',iconName:'chevron-right'}" size="2x"
										   class="mx-auto my-auto transition duration-200 group-hover:transform group-hover:translate-x-2"
						/>
					</div>
					<!-- Slides -->
					<div id="slide-1" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
						<img :src="require(`~/static/images/self_1.webp`)" class="w-full h-auto mx-auto"/>
					</div>
					<div id="slide-2" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/self_2.webp`)" class="w-full h-auto mx-auto"/>
					</div>
					<div id="slide-3" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/self_3.webp`)" class="w-full h-auto mx-auto"/>
					</div>
					<div id="slide-4" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/self_4.webp`)" class="w-full h-auto mx-auto"/>
					</div>
					<div id="slide-5" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/self_5.webp`)" class="w-full h-auto mx-auto"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "aboutme",
	data() {
		return {
			activeSlide: 1,
			slides: 5,
		}
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
