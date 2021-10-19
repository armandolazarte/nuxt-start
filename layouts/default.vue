<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="relative">
      <Nav />
      <nuxt />
    </div>
    
    <!-- <a
      href="_tailwind"
      class="absolute p-8 text-gray-300 hover:text-gray-500 text-xs tracking-widest font-semibold leading-none top-36 right-3 transition duration-150 ease-in-out"
      >TAILWIND</a
    > -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: "canonical", href: "http://localhost:3000" + this.$route.path }
      ]
    };
  }
};
</script>

<style></style>
