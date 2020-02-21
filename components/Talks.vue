<template lang="pug">
  //- Talks
  section.pt-16.mt-32#talks
    .max-w-4xl
      h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos='fade-up') I do talks & workshops about web and game development as well.

    //- Nuxt talk
    section.mt-10(v-for="talk in data.talks" data-aos="fade-right")
      h3.text-2xl {{ talk.title }}
      .mb-4
        p.text-gray-600 {{ talk.description }}
      section.bg-gray-100.p-2.sm_p-10(v-if="talk.image_url")
        img.w-full(:src="require(`@/assets/images/${talk.image_url}`)")

</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="sass">

</style>
