<template lang="pug">
  .font-sans.text-gray-900.cursor-default
    .container.mx-auto.px-32
      //- Hi
      section.flex.h-screen
        .m-auto
          h1.text-6xl.leading-none.font-bold
            | Hi. I'm
            |
            span.text-teal-400 Alfonz Montelibano
            | —a software engineer who loves clean code and beautiful design.
          ul.flex.mt-6
            li
              a.big-link.animated-link.text-3xl.mr-12(href='#') About
              a.big-link.animated-link.text-3xl.mr-12(href='#') Projects
              a.big-link.animated-link.text-3xl.mr-12(href='#') Contact

      //- Projects
      section.mt-16
        .max-w-4xl
          h2.text-4xl.font-bold.leading-snug Here are some projects I worked on.

        section.mt-12(v-for="project in data.projects")
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

          section.bg-gray-100.p-20
            img.w-full.rounded-lg(:src="require(`@/assets/images/${project.image_url}`)")

        section.mt-12
          .text-xl.text-gray-400
            | ...and
            |
            a.underline(href="https://github.com/alfonzm/repositories" target="_blank") many more
            |
            | but I want to show you other stuff.

      //- Games
      section.mt-56
        .max-w-4xl
          h2.text-4xl.font-bold.leading-snug I’ve also developed a few video games and joined game-making contests.

        section
          .flex.flex-wrap.-mx-4
            div.px-4.mt-12(v-for="game in data.games" class="w-1/2")
              h3.text-3xl {{ game.title }}
              p.mb-4
                template(v-for="(link, index) in game.links")
                  a.animated-link.small-link(:href="link.url" target="_blank").text-teal-400 {{ link.label }}
                  template(v-if="index < game.links.length - 1")
                    |
                    | /
                    |
              section.flex.bg-gray-100.p-4.game-image-wrapper
                .m-auto
                  img.shadow-xl.rounded-lg(:src="require(`@/assets/images/${game.image_url}`)")

      //- Talks
      section.mt-56
        .max-w-4xl
          h2.text-4xl.font-bold.leading-snug I do talks & workshops about web and game development as well.

        //- Nuxt talk
        section.mt-10(v-for="talk in data.talks")
          h3.text-2xl {{ talk.title }}
          .mb-4
            p.text-gray-600 {{ talk.description }}
          section.bg-gray-100.p-24(v-if="talk.image_url")
            img.w-full(:src="require(`@/assets/images/${talk.image_url}`)")

      //- Blogs
      //- section.mt-56
      //-   h2.text-4xl.font-bold.leading-snug I also maintain and write for several blogs.

      //-   //- Ragna Mobile Guide
      //-   section.mt-10
      //-     h3.text-2xl Ragna Mobile Guide
      //-     p.mb-4
      //-       a.text-teal-400 Website
      //-       |
      //-       | /
      //-       |
      //-       a.text-teal-400 Facebook Page
      //-     section
      //-       img(src="https://placekitten.com/200/200")

      //- Work
      section.mt-40
        h2.text-4xl.font-bold.leading-snug I've been working in the IT industry for almost six years.

        section.mt-10(v-for="company in data.companies")
          h3.text-2xl {{ company.position }}
          p.text-gray-600 {{ company.name }}
          p.text-gray-600 {{ company.period }}

      //- Skills/Tools
      section.mt-40
        h2.text-4xl.font-bold.leading-snug Here's a list of my skillset and the tools I use.
        span insert skills/tools...

      //- Thank you
      section.mt-40.flex.h-screen.relative
        .m-auto
          .text-6xl.leading-none.font-bold I look forward to working with you soon. 👋
          .text-3xl.text-gray-600
            | I can be reached at
            |
            a.underline(href="mailto:m.alfonz@gmail.com") m.alfonz@gmail.com

        .footer.absolute.bottom-0.w-full.text-center.pb-4.text-gray-500.text-xs Alfonz Montelibano. 2020.


</template>

<script>
import Logo from '~/components/Logo.vue'
import StaticData from '~/static/data'

export default {
  components: {
    Logo
  },
  asyncData() {
    return {
      data: StaticData
    }
  }
}
</script>

<style lang="sass">

$teal: #4fd1c5

html
  background-color: $teal

body
  background-color: white
  font-family: 'Circular Std'

.game-image-wrapper
  height: 500px

a.animated-link,
  position: relative

  &:after
    background: none repeat scroll 0 0 transparent
    bottom: -5px
    content: ""
    display: block
    height: 3px
    left: 0%
    position: absolute
    background: #222222
    transition: width 0.4s ease 0s, left 0.4s ease 0s
    width: 0

  &.small-link:after
    background: $teal
    height: 2px

  &:hover:after
    width: 100%
    left: 0

</style>
