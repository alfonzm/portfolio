<template lang="pug">
  section
    //- Projects
    section.pt-16#projects
      .max-w-4xl
        h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos='fade-up') Here are some projects I worked on.

      section.mt-12(v-for="project in data.projects" data-aos="fade-right")
        h3.text-3xl {{ project.title }}
        p
          template(v-for="(link, index) in project.links")
            a.animated-link.small-link(:href="link.url" target="_blank").text-teal-400 {{ link.label }}
            template(v-if="index < project.links.length - 1")
              |
              | /
              |
        .my-4
          p.text-gray-700(v-html="project.description")

        div
          div.p-4.sm_p-16.bg-gray-100
            img.w-full(:src="require(`@/assets/images/${project.image_url}`)")

      section.mt-12(data-aos="fade-right")
        .text-md.sm_text-xl.text-gray-400
          | ...and
          |
          a.underline(href="https://github.com/alfonzm/repositories" target="_blank") many more
          |
          | but I want to show you other stuff.

    //- Games
    section.pt-16.mt-32#games
      .max-w-4xl
        h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos='fade-up') I’ve also developed a few video games and joined game-making contests.

      section
        .flex.flex-wrap.-mx-4
          div.px-4.mt-12(v-for="game in data.games" class="w-full lg_w-1/2" data-aos="fade-right")
            h3.text-3xl {{ game.title }}
            p.mb-4
              template(v-for="(link, index) in game.links")
                a.animated-link.small-link(:href="link.url" target="_blank").text-teal-400 {{ link.label }}
                template(v-if="index < game.links.length - 1")
                  |
                  | /
                  |
            section.flex.bg-gray-100.p-2.sm_p-4.game-image-wrapper
              .m-auto
                img.shadow-xl(:src="require(`@/assets/images/${game.image_url}`)")

</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="sass">

</style>
