<template>
  <div class="bg-gray-100 min-h-screen font-inter">
    <div class="relative">
      <Nav />
      <nuxt />
    </div>
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
