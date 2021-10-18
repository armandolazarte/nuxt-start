<template>
  <div class="relative">
    <Nav />
    <nuxt />
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
