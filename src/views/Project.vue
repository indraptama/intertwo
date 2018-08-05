<template lang='pug'>
  main
    div(class="home bg-blue-darker relative pin-t pin-l pin-r vh-90 overflow-hidden z-10")
      // Slider
      div(class="fixed pin-t pin-l pin-r pin-b h-screen w-full vh-90 h-screen bg-cover bg-center bg-red" style="background-image: url('https://source.unsplash.com/1600x900/?architecture,building')") 
      div(class="absolute pin-t pin-l pin-r pin-b h-screen w-full vh-90 h-screen bg-cover bg-center bg-blue-darker opacity-50")
      // Content
      div(class="relative px-6 max-w-5xl vh-90 flex items-end lg:items-center mx-auto pb-16 lg:pb-0 z-10 text-white")
        div(class="hero-devider")
        div(class="w-full mx-auto")
          h1(class="lg:text-5xl mb-6") Redefining Norms<br/>Through Innovative Design
          div(class="flex items-center mb-6")
            span(class="block lg:w-24 border-b border-white lg:mr-6")
            h2(class="text-sm lg:text-2xl") Make New Design, Make New Future
    
    div.bg-white.z-10.relative      
      section(class="")
        ul(class="list-reset project-list")
          li(v-for='item in propertyHome' class="pt-8 lg:pt-32")
            ProjectThumb(:title='item.title' :imgUrl='item.imgUrl' :content='item.content')
        
        
      

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeroSlider from '@/components/HeroSlider.vue'
import ProjectThumb from '@/components/ProjectThumb.vue'


// Data
import PropertyData from '@/data/property.js';
import NewsFeed from '@/data/news.js';

export default {
  name: 'home',
  components: {
    HelloWorld,
    HeroSlider,
    ProjectThumb,
  },
  data: function() {
    return {
      PropertyData,
      propertyHome: PropertyData.slice(0,3),
      latestNews: NewsFeed.slice(0,4),
    }
  }
}
</script>
