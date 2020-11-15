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
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
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
						<img :src="require(`~/static/images/placeholder_h.jpg`)" class="h-full w-auto mx-auto"/>
					</div>
					<div id="slide-2" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/placeholder_v.jpg`)" class="h-full w-auto mx-auto"/>
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
			slides: 2,
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
