<template>
  <div class="bg-gray-100 flex flex-col min-h-screen font-inter selection:bg-yellow-200">
      <Nav />
      <nuxt class="flex-grow w-full" />
      <Footer class="flex-shrink-0" />
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

<style>
</style>
