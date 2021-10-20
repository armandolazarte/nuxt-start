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
    <div class="mt-8 mx-auto prose prose-2xl">
      <h2>Путин объявил нерабочими дни с 30 октября по 7 ноября</h2>
      <p>Президент России Владимир Путин объявил о введении в стране <span class="bg-yellow-200">с 30 октября по 7 ноября</span> нерабочих дней с сохранением заработной платы. Об этом он заявил во время совещания с членами правительства, трансляцию которого ведет телеканал «360» на YouTube.</p>
      <blockquote><p>«Сейчас особенно важно сбить пик новой волны эпидемии», — сказал он.</p></blockquote>
      <p>Глава государства также не исключил, что нерабочие дни придется продлить, и призвал регионы при необходимости ввести их уже с 23 октября.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
