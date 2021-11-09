<template>
  <div class="">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <h1 class="text-5xl mb-8 text-gray-800 font-extrabold">Articles</h1>
      <ul class="mb-8">
        <li class="mb-8" v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <!-- <img :src="article.img" /> -->
            <div class="group">
              <h2
                class="text-3xl text-gray-800 font-extrabold group-hover:text-blue-500 transition-colors duration-150"
              >
                {{ article.title }}
              </h2>
              <p class="text-gray-600 text-lg mt-4">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("blog")
      .sortBy("date", "desc")
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return { articles };
  }
};
</script>

<style></style>
