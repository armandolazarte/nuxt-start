<template>
  <div class="">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div class="prose prose-lg mt-14 mx-auto">
        <h1>{{ article.title }}</h1>
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "~/plugins/prism";

export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    return {
      article
    };
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style></style>
