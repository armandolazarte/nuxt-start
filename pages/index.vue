<template>
  <div class="max-w-screen-2xl mx-auto pt-6 px-4 sm:px-6">
    <h1
      class="invisible text-sky-300 text-9xl font-extrabold"
      v-gsap.from="{
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)'
      }"
    >
      Hi!
    </h1>
  </div>
</template>

<script>
export default {};
</script>
