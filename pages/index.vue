<template lang="pug">
  .font-sans.text-gray-900.cursor-default
    .container.mx-auto.px-5.lg_px-32
      //- Hi
      section.flex.h-screen
        .m-auto.w-full
          h1.text-4xl.sm_text-6xl.leading-none.font-bold.-mt-8.sm_mt-0(data-aos="fade-up")
            | Hi. I'm
            |
            span.text-teal-400 Alfonz Montelibano
            | —a software engineer who loves clean code and beautiful design.

          //- nav links
          ul.flex.mt-6
            li(v-for="(link, i) in data.links" data-aos="fade-up" :data-aos-delay="String((i+1) * 200)")
              a.big-link.animated-link.capitalize.text-xl.sm_text-3xl.mr-4.sm_mr-12(href='#' v-scroll-to="`#${link}`") {{ link }}

      //- Projects
      section.pt-16#projects
        .max-w-4xl
          h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade-up") Here are some projects I worked on.

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
          h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade-up") I’ve also developed a few video games and joined game-making contests.

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

      //- Talks
      section.pt-16.mt-32#talks
        .max-w-4xl
          h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade-up") I do talks & workshops about web and game development as well.

        //- Nuxt talk
        section.mt-10(v-for="talk in data.talks" data-aos="fade-right")
          h3.text-2xl {{ talk.title }}
          .mb-4
            p.text-gray-600 {{ talk.description }}
          section.bg-gray-100.p-2.sm_p-10(v-if="talk.image_url")
            img.w-full(:src="require(`@/assets/images/${talk.image_url}`)")

      //- Work
      section.pt-16.mt-32#about
        h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade-up") I've been working in the IT industry for almost six years.

        section.companies-section.mt-10.anchor-work(data-aos-offset="150")
          .company(
            v-for="(company, i) in data.companies"
            :class="{ 'pb-10': i < data.companies.length-1 }"
          )
            h3.text-xl.sm_text-2xl.leading-tight(data-aos="fade-right" data-aos-offset="150" data-aos-anchor=".anchor-work" :data-aos-delay="String((i*300)+100)") {{ company.position }}
            p.text-gray-600(data-aos="fade-right" data-aos-offset="150" data-aos-anchor=".anchor-work" :data-aos-delay="String((i*300)+200)") {{ company.name }}
            p.text-gray-600(data-aos="fade-right" data-aos-offset="150" data-aos-anchor=".anchor-work" :data-aos-delay="String((i*300)+300)") {{ company.period }}

      //- Skills/Tools
      section.mt-40
        h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos="fade-up") Here's a list of my skillset and the tools I use.

        template(v-for="(skills, skillCategoryIdx) in data.skills")
          h3.text-2xl.mt-8(data-aos="fade-right" data-aos-offset="150" :class="`anchor-skill-${skillCategoryIdx}`") {{ skills.name }}
          ul.text-gray-600.leading-6
            li(
              v-for="(skill, subSkillIdx) in skills.skills"
              data-aos="fade-right"
              data-aos-offset="150"
              :data-aos-delay="String((subSkillIdx+1) * 150)"
              :data-aos-anchor="`.anchor-skill-${skillCategoryIdx}`"
            ) {{ skill.join(', ') }}

      //- Thank you
      section.mt-8.flex.h-screen.relative#contact
        .m-auto.w-full
          .text-5xl.sm_text-6xl.leading-none.font-bold(data-aos="fade-up") I look forward to working with you soon. 👋
          .mt-3.text-3xl.sm_text-3xl.text-gray-500.leading-none(data-aos="fade-up")
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
  // font-family: 'Karla'

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
    width: 100%

  &.gray-link:after
    background: #9e9e9e

a.animated-link
  &:after
    width: 0
    transition: width 0.4s cubic-bezier(.61,.01,.2,1) 0s, left 0.4s cubic-bezier(.61,.01,.2,1) 0s

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
