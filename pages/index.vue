<template>
	<div class="container h-full">
		<div class="flex pt-12 pb-12 md:mb-3 md:pb-0 md:pt-8 h-full">
			<div class="w-3/5 bg-white rounded-lg p-5 shadow-md md:mr-10 my-auto">
				<h2 class="text-2xl text-blue font-semibold">Hello!</h2>
			</div>
			<div class="w-2/5 mb-auto">
				<div class="rounded-lg py-5 px-6 shadow-md bg-gradient-to-tr from-blue to-blue-lighter mb-6">
					<h2 class="text-2xl text-white font-semibold">Projects</h2>
				</div>
				<a href="/files/CV_2020.pdf" target="_blank" class="flex rounded-lg py-5 px-6 shadow-md bg-gradient-to-tr from-blue to-blue-lighter text-white hover:bg-white hover:from-white hover:to-white hover:text-blue transition duration-200">
					<font-awesome-icon :icon="{prefix:'far',iconName:'file-alt'}" size="4x" class="my-auto mr-5" />
					<div>
						<h2 class="text-2xl font-semibold leading-tight mb-1">Curriculum</h2>
						<div class="text-md leading-snug">If you prefer a short resume, you can download my Curriculum Vitae here.</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>

</style>
