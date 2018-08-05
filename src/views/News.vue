<template lang="pug">
  div(class="pt-32")
    section(class="px-4 lg:px-16 text-blue-darker leading-tight mb-16 lg:mb-24")
      div(class="max-w-3xl mx-auto")
        h1(class="lg:text-5xl mb-6 text-center") Latest News
    
    div(class="max-w-3xl mx-auto px-6")
      div(class="")
        ul(class="list-reset flex flex-wrap")
          // News JSON
          li(v-for='post in news' class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 md:px-3")
            div(class="bg-white flex md:block")
              // News Image
              <router-link to='/single-news' class="block Ratio Ratio--2x3 w-32 md:w-auto hover:opacity-75">
                div(class="RatioInner bg-center bg-cover" :style="{'background-image':'url('+post.imgUrl+')'}")
              </router-link>
              div(class="content md:px-4 flex-1")
                div(class="bg-white p-3")
                  h3(class="text-base mb-2 text-black leading-normal") {{ post.title }}
                  p(class="text-xs mb-4 text-grey-darker") {{ post.date }}
                  div(class="hidden md:block leading-loose text-sm") {{ post.content }}
      
       
        
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue';
import NewsFeed from '@/data/news.js';

export default {
  components: {
    SectionHeader,
  },
  data: function() {
    return {
      news: NewsFeed
    }
  },
  
}
</script>
