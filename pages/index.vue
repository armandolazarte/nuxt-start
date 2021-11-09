<template>
  <div class="">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
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
      <div class="my-8 mx-auto prose">
        <h2>Путин объявил нерабочими дни с 30 октября по 7 ноября</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
