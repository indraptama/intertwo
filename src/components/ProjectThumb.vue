<template lang="pug">
  div(class="lg:flex")
    div(class="lg:w-2/3")
      div(class="Ratio Ratio--16x9 bg-blue-darker mb-4")
        div(class="RatioInner bg-center bg-cover" :style="{'background-image':'url('+imgUrl+')'}")
    
    div(class="lg:w-1/3 md:flex items-center")
      div(class="max-w-sm mx-auto p-8 leading-loose")
        div(class="flex items-center text-2xl mb-6 text-blue-darker")
          span(class="block lg:w-8 border-b border-blue-darker lg:mr-4")
          h3(class="leading-tight flex-1") {{title}}
        div(class="lg:ml-12 text-sm mb-6")
          p {{content}}
        div(class="lg:ml-12 text-sm")
          router-link(to='/single-project' class="inline-block px-8 py-2 bg-blue-darker no-underline text-white font-bold uppercase tracking-wide text-xs border border-blue-darker hover:bg-transparent hover:text-blue-darker") Project Details
</template>

<script>
export default {
  name: 'ProjectThumb',
  props: {
    title: String,
    content: String,
    imgUrl: String,
  }
}
</script>
