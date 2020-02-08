<template lang="pug">
  .font-sans.text-gray-900.cursor-default
    .container.mx-auto.px-5.lg_px-32
      //- Hi
      section.flex.h-screen
        .m-auto.w-full
          h1.text-4xl.sm_text-6xl.leading-none.font-bold.-mt-8.sm_mt-0
            | Hi. I'm
            |
            span.text-teal-400 Alfonz Montelibano
            | —a software engineer who loves clean code and beautiful design.

          //- nav links
          ul.flex.mt-6
            li(v-for="link in data.links")
              a.big-link.animated-link.capitalize.text-xl.sm_text-3xl.mr-4.sm_mr-12(href='#' v-scroll-to="`#${link}`") {{ link }}

      //- Projects
      section.pt-16#projects
        .max-w-4xl
          h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade") Here are some projects I worked on.

        section.mt-12(v-for="project in data.projects")
          h3.text-3xl(data-aos="fade") {{ project.title }}
          p(data-aos="fade")
            template(v-for="(link, index) in project.links")
              a.animated-link.small-link(:href="link.url" target="_blank").text-teal-400 {{ link.label }}
              template(v-if="index < project.links.length - 1")
                |
                | /
                |
          .my-4(data-aos="fade")
            p.text-gray-700(v-html="project.description")

          section.bg-gray-100.p-2.sm_p-10(data-aos="fade")
            img.w-full(:src="require(`@/assets/images/${project.image_url}`)")

        section.mt-12(data-aos="fade")
          .text-md.sm_text-xl.text-gray-400
            | ...and
            |
            a.underline(href="https://github.com/alfonzm/repositories" target="_blank") many more
            |
            | but I want to show you other stuff.

      //- Games
      section.pt-16.mt-32#games
        .max-w-4xl
          h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade") I’ve also developed a few video games and joined game-making contests.

        section
          .flex.flex-wrap.-mx-4
            div.px-4.mt-12(v-for="game in data.games" class="w-full lg_w-1/2")
              h3.text-3xl(data-aos="fade") {{ game.title }}
              p.mb-4(data-aos="fade")
                template(v-for="(link, index) in game.links")
                  a.animated-link.small-link(:href="link.url" target="_blank").text-teal-400 {{ link.label }}
                  template(v-if="index < game.links.length - 1")
                    |
                    | /
                    |
              section.flex.bg-gray-100.p-2.sm_p-4.game-image-wrapper(data-aos="fade")
                .m-auto
                  img.shadow-xl(:src="require(`@/assets/images/${game.image_url}`)")

      //- Talks
      section.pt-16.mt-32#talks
        .max-w-4xl
          h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade") I do talks & workshops about web and game development as well.

        //- Nuxt talk
        section.mt-10(v-for="talk in data.talks")
          h3.text-2xl(data-aos="fade") {{ talk.title }}
          .mb-4
            p.text-gray-600(data-aos="fade") {{ talk.description }}
          section.bg-gray-100.p-2.sm_p-10(v-if="talk.image_url" data-aos="fade")
            img.w-full(:src="require(`@/assets/images/${talk.image_url}`)")

      //- Work
      section.pt-16.mt-32#about
        h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade") I've been working in the IT industry for almost six years.

        section.companies-section.mt-10
          .company(v-for="(company, index) in data.companies" :class="{ 'pb-10': index < data.companies.length-1 }")
            h3.mb-1.text-xl.sm_text-2xl.leading-tight(data-aos="fade-right") {{ company.position }}
            p.text-gray-600(data-aos="fade-right") {{ company.name }}
            p.text-gray-600(data-aos="fade-right") {{ company.period }}

      //- Skills/Tools
      section.mt-40
        h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade-right") Here's a list of my skillset and the tools I use.

        template(v-for="skills in data.skills")
          h3.text-2xl.mt-8(data-aos="fade-right") {{ skills.name }}
          ul.text-gray-600.leading-6
            li(v-for="skill in skills.skills" data-aos="fade-right") {{ skill.join(', ') }}

      //- Thank you
      section.mt-8.flex.h-screen.relative#contact
        .m-auto.w-full
          .text-5xl.sm_text-6xl.leading-none.font-bold I look forward to working with you soon. 👋
          .mt-3.text-3xl.sm_text-3xl.text-gray-500.leading-none
            | I can be reached at
            |
            a.underline.gray-link(href="mailto:m.alfonz@gmail.com") m.alfonz@gmail.com

        .footer.absolute.bottom-0.w-full.text-center.pb-4.text-gray-500.text-xs
          | &copy; {{ new Date().getFullYear() }}. Made with Nuxt.js by Alfonz Montelibano.
          br.visible.md_invisible
          a.underline(href="https://github.com/alfonzm/portfolio" target="_blank") Source code
          | .


</template>

<script>
import StaticData from '~/static/data'

export default {
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
  @media (min-width: 1024px)
    height: 500px

a.underlined, a.animated-link
  position: relative

  &:after
    background: none repeat scroll 0 0 transparent
    bottom: -5px
    content: ""
    display: block
    height: 3px
    left: 0
    position: absolute
    background: #222222
    transition: width 0.4s ease 0s, left 0.4s ease 0s
    width: 100%

  &.gray-link:after
    background: #9e9e9e

a.animated-link,
  &:after
    width: 0

  &.small-link:after
    background: $teal
    height: 2px

  &:hover:after
    width: 100%

.companies-section
  border-left: 1px solid #aaa
  position: relative

.company
  position: relative
  padding-left: 25px

  @media (min-width: 1024px)
    padding-left: 30px

  &:before
    position: absolute
    left: 0
    top: 8px
    transform: translateX(-50%)
    content: ''
    display: inline-block
    width: 14px
    height: 14px
    -moz-border-radius: 7px
    -webkit-border-radius: 7px
    border-radius: 7px
    border: 1px solid #888
    background: white

</style>
