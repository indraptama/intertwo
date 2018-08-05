<template lang='pug'>
  main
    div(class="home bg-blue-darker relative pin-t pin-l pin-r vh-90 overflow-hidden z-10")
      // Slider
      div(class="fixed pin-t pin-l pin-r pin-b h-screen w-full vh-90 h-screen bg-cover bg-center" style="background-image: url('img/hero/project.jpg')") 
      div(class="absolute pin-t pin-l pin-r pin-b h-screen w-full vh-90 h-screen bg-cover bg-center bg-blue-darker opacity-50")
      // Content
      div(class="relative px-6 max-w-5xl vh-90 flex items-end lg:items-center mx-auto pb-16 lg:pb-0 z-10 text-white")
        div(class="hero-devider")
        div(class="w-full mx-auto")
          h1(class="lg:text-5xl mb-6") Redefining Norms<br/>Through Innovative Design
          div(class="flex items-center mb-6")
            span(class="block lg:w-24 border-b border-white lg:mr-6")
            h2(class="text-sm lg:text-2xl") Make New Design, Make New Future
    
    div.bg-white.z-10.relative.pb-32 
      section(class="")
        ul(class="list-reset project-list")
          li(v-for='item in ProjectList' class="pt-8 lg:pt-32")
            ProjectThumb(:title='item.title' :imgUrl='item.images[0]' :content='item.desc')
        
        
      

</template>

<script>
// @ is an alias to /src
import ProjectThumb from '@/components/ProjectThumb.vue'


// Data
import ProjectList from '@/data/project.js';

export default {
  name: 'home',
  components: {
    ProjectThumb,
  },
  data: function() {
    return {
      ProjectList,
    }
  }
}
</script>
