<template>
    <div class="py-6 px-4 sm:px-6">
        <div class="prose prose-lg">
        <h1>{{ article.title }}</h1>
            <nuxt-content :document="article" />
        </div>
    </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    return {
      article
    };
  }
};
</script>

<style></style>
