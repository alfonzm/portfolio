<template lang="pug">
  section
    //- Work
    section.pt-16.mt-32#about
      h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos='fade-up') I've been working in the IT industry for almost six years.

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
      h2.text-3xl.sm_text-4xl.font-bold.leading-tight(data-aos='fade-up') Here's a list of my skillset and the tools I use.

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

</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="sass" scoped>

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
