<template lang="pug">
  main
    section(class="vh-50 px-4 lg:px-16 pt-32 text-blue-darker leading-tight mb-16 lg:mb-24")
      div(class="max-w-5xl mx-auto")
        h1(class="lg:text-5xl mb-6 max-w-xl" v-scroll-reveal.reset='scrollRevealOptions') Sejak 2004, Kami Membangun dan Berinvestasi di bidang Properti
        div(class="flex items-center mb-6" v-scroll-reveal.reset='scrollRevealOptions')
          span(class="block lg:w-24 border-b border-blue-darker lg:mr-6")
          h2(class="text-sm lg:text-2xl") Sukses Bersama Internusa
        div(class="text-black leading-loose max-w-lg lg:ml-24 lg:pl-6 text-sm lg:text-base article" v-scroll-reveal.reset='scrollRevealOptions')
          p Internusa Development berdiri pada tahun 2004 adalah perusahaan swasta nasional yang bergerak dalam bidang investasi dan developer properti yang telah berpengalaman membangun beberapa kawasan industri dan properti di Indonesia.
          p Didukung oleh beberapa profesional yang ahli di bidangnya, Internusa Development telah berhasil menumbuhkan kepercayaan publik dengan membangun dan merancang beberapa proyek terkemuka diantaranya adalah Internusa Tower, Internusa 800, Kawasan Industri Percut, Kawasan Wisata dan Edukasi Kopi, dan lain sebagainya.
          p Melalui motto “Sukses Bersama Internusa” kami juga senantiasa mengundang beberapa investor untuk turut serta membangun Indonesia melalui proyek – proyek pembangunan strategis di beberapa daerah.
    
    
    section(class="mb-16 lg:mb-24")
      div(class="lg:flex")
        div(class="lg:w-2/3" v-scroll-reveal.reset='scrollRevealOptions')
          div(class="Ratio Ratio--16x9 bg-blue-darker mb-4")
            div(class="RatioInner bg-center bg-cover" style="background-image: url('img/hero/about.jpg')")
        
        div(class="lg:w-1/3 md:flex items-center" v-scroll-reveal.reset='scrollRevealOptions')
          div(class="max-w-sm mx-auto p-8 leading-loose")
            div(class="flex items-center text-2xl mb-6 text-blue-darker")
              span(class="block lg:w-8 border-b border-blue-darker lg:mr-4")
              h3(class="leading-tight flex-1") Our Mission
            div(class="lg:ml-12 text-sm mb-6")
              p Sukses Bersama Internusa & berperan serta dan mewujudkan pembangunan ekonomi dan industri yang positif bagi Indonesia.
    
    section(class="px-4 lg:px-16 text-blue-darker leading-tight mb-16 lg:mb-24")
      div(class="max-w-3xl mx-auto")
        h1(class="lg:text-5xl mb-6" v-scroll-reveal.reset='scrollRevealOptions') Direksi &<br/>Dewan Komisaris
        div(class="flex items-center mb-6" v-scroll-reveal.reset='scrollRevealOptions')
          span(class="block lg:w-24 border-b border-blue-darker lg:mr-6")
          h2(class="text-sm lg:text-2xl") Profesional
        div(class="text-black leading-loose lg:ml-24 lg:pl-6 text-sm lg:text-base article")
          ul(class="list-reset md:flex flex-wrap")
            li(class="md:w-1/2 lg:w-1/3 px-3 mb-4" v-scroll-reveal.reset='scrollRevealOptions')
              ListNews(imgUrl="img/user/1.jpg" title="John Travolta" date="Director")
            li(class="md:w-1/2 lg:w-1/3 px-3 mb-4" v-scroll-reveal.reset='scrollRevealOptions')
              ListNews(imgUrl="img/user/2.jpg" title="John Travolta" date="Director")
            li(class="md:w-1/2 lg:w-1/3 px-3 mb-4" v-scroll-reveal.reset='scrollRevealOptions')
              ListNews(imgUrl="img/user/3.jpg" title="John Travolta" date="Director")
            li(class="md:w-1/2 lg:w-1/3 px-3 mb-4" v-scroll-reveal.reset='scrollRevealOptions')
              ListNews(imgUrl="img/user/4.jpg" title="John Travolta" date="Director")
            li(class="md:w-1/2 lg:w-1/3 px-3 mb-4" v-scroll-reveal.reset='scrollRevealOptions')
              ListNews(imgUrl="img/user/5.jpg" title="John Travolta" date="Director")
            li(class="md:w-1/2 lg:w-1/3 px-3 mb-4" v-scroll-reveal.reset='scrollRevealOptions')
              ListNews(imgUrl="img/user/6.jpg" title="John Travolta" date="Director")

</template>

<script>
import ListNews from '@/components/ListNews.vue'

export default {
  components: {
    ListNews,
  },
  data() {
      return {
        scrollRevealOptions: {
          delay: 250,
        },
      };
    },
    mounted() {
      setTimeout(() => {
        this.scrollRevealOptions.delay = 0;
      }, 250);
    },
}
</script>
