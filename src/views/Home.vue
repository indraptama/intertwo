<template lang='pug'>
  main
    HeroSlider(class="")
    div.bg-white.z-10.relative
      section(class="px-4 z-20 relative")
        div(class="hero-devider")
        div(class="relative z-10 px-4 py-32 max-w-5xl mx-auto bg-white flex items-center justify-center")
          div(class="max-w-sm leading-loose lg:text-center text-sm lg:text-lg" v-scroll-reveal.reset)
            h2(class="text-xs lg:text-center mb-6 uppercase tracking-wide text-blue-darker") We Are Internusa
            p Internusa Development berdiri pada tahun 2004 adalah perusahan swasta nasional yang bergerak dalam bidang investasi dan developer properti yang akan membangun fasilitas komersial dan kawasan industri di kota-kota urban Indonesia, seperti medan, Jakarta dan Bandung.
      
      section(class="mb-16 lg:mb-24")
        div(class="lg:flex")
          div(class="lg:w-2/3" v-scroll-reveal.reset)
            div(class="Ratio Ratio--16x9 bg-blue-darker mb-4")
              div(class="RatioInner bg-center bg-cover" style="background-image: url('img/project/tower1.jpg')")
          
          div(class="lg:w-1/3 md:flex items-center" v-scroll-reveal.reset)
            div(class="max-w-sm mx-auto p-8 leading-loose")
              h2(class="text-xs mb-6 uppercase tracking-wide text-blue-darker") Our Project
              div(class="flex items-center text-2xl mb-6 text-blue-darker")
                span(class="block lg:w-8 border-b border-blue-darker lg:mr-4")
                h3(class="leading-tight flex-1") Internusa Tower
              div(class="lg:ml-12 text-sm mb-6")
                p Internusa Tower Project merupakan proyek pembangunan gedung perkantoran terbesar di Medan, Sumatera Barat.
              div(class="lg:ml-12 text-sm")
                router-link(to='/project' class="inline-block px-8 py-2 bg-blue-darker no-underline text-white font-bold uppercase tracking-wide text-xs border border-blue-darker hover:bg-transparent hover:text-blue-darker") See Other Project
        
      section(class="mb-16 lg:mb-24")
        div(class="flex flex-col-reverse items-center lg:flex-row-reverse lg:items-stretch")
          div(class="md:w-1/2 lg:w-2/3 lg:flex" v-scroll-reveal.reset)
            ul(class="list-reset flex-1 lg:flex mb-6 lg:mb-0 max-w-sm lg:max-w-full mx-auto")
              li(v-for='items in propertyHome' class="lg:flex flex-1 items-strech justify-end items-end relative")
                ListProperty(:title='items.title' :imgUrl='items.imgUrl' :price='items.price')
            div(class="lg:ml-12 text-sm lg:hidden text-center")
                router-link(to='/project' class="inline-block px-8 py-2 bg-blue-darker no-underline text-white font-bold uppercase tracking-wide text-xs border border-blue-darker hover:bg-transparent hover:text-blue-darker") Lihat Semua Properti

          div(class="md:w-1/2 lg:w-1/3 items-center lg:py-32" v-scroll-reveal.reset)
            div(class="max-w-sm mx-auto p-8 leading-loose")
              div(class="flex items-center text-2xl mb-6 text-blue-darker")
                span(class="block lg:w-8 border-b border-blue-darker lg:mr-4")
                h3(class="leading-tight flex-1") Property
              div(class="lg:ml-12 text-sm mb-0 lg:mb-6")
                p Selain bergerak dalam bidang Perancangan dan Konstruksi Bangunan, kami juga bergerak di bidang Real Estat dengan menyediakan Rumah, Ruko, Rukan, Apartemen atau tanah kosong untuk di jual, di sewa atau dibuat kerja sama.
              div(class="lg:ml-12 text-sm hidden lg:block")
                router-link(to='/property' class="inline-block px-8 py-2 bg-blue-darker no-underline text-white font-bold uppercase tracking-wide text-xs border border-blue-darker hover:bg-transparent hover:text-blue-darker") Lihat Semua Properti
      
      section.pb-16
        div(class="max-w-5xl mx-auto")
          div(class="max-w-sm mx-auto p-8 leading-loose lg:text-center")
            h2(class="text-xs mb-6 uppercase tracking-wide text-blue-darker" v-scroll-reveal.reset) Latest News
          div(class="")
            ul(class="list-reset flex flex-wrap")
              // News JSON
              li(v-for='news in latestNews' class="w-full md:w-1/2 lg:w-1/4 mb-4 md:px-3" v-scroll-reveal.reset)
                ListNews(:title='news.title' :imgUrl='news.imgUrl')

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeroSlider from '@/components/HeroSlider.vue'
import ListProperty from '@/components/ListProperty.vue'
import ListNews from '@/components/ListNews.vue'

// Data
import PropertyData from '@/data/property.js';
import NewsFeed from '@/data/news.js';

export default {
  name: 'home',
  components: {
    HelloWorld,
    HeroSlider,
    ListProperty,
    ListNews
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
