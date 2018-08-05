<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh" :style="{'background-image':'url('+`${baseUrl}img/news-hero.jpg`+')'}")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-8 lg:mb-20")
      div(class="h-50vh mx-auto flex items-end justify-center lg:justify-start")
        

    // Content
    div(class="max-w-2xl px-6 mx-auto mb-8 lg:mb-8 leading-normal")
      <SectionHeader title="Internusa Development Adakan Program CSR Rehabilitasi 1 Juta Mangrove"></SectionHeader>
    
    div(class="max-w-2xl px-6 mx-auto mb-16 lg:mb-24 flex flex-col-reverse lg:flex-row-reverse")
      
      div(class="lg:w-2/5 lg:ml-16 mb-8 leading-loose")
        h4(class="mb-4  text-blue-darker") Related
        ul(class="list-reset")
          li(v-for='news in RelatedNews' class="mb-3 pb-3 border-b")
            <NewsListSmall :title='news.title' :imgUrl='news.imgUrl'/>
          



      div(class="lg:w-3/5 leading-loose")
        .article.max-w-md.mx-auto(class="mb-4 lg:mb-12")
          h4(class="mb-4 text-blue-darker  font-normal") Jumat, 3 Agustus 2018
          p Internusa Development terus berusaha hadir sebagai perusahaan yang peduli kepada lingkungan, salah satu aksi nyata yang dilakukan yaitu dengan menyelenggarakan kegiatan Corporate Social Responsibility (CSR) berupa pemberian 1 juta bibit mangrove.
          p Kegiatan ini juga dilakukan dalam rangka acara Kenduri Nelayan dan Pelantikan DPC Himpunan Nelayan Seluruh Indonesia (HNSI) Deli Serdang, pada Senin (24/07/2017). Pemberian 1 juta bibit mangrove ini secara simbolis diterima langsung oleh Bupati Deliserdang, H. Ashari Tambunan.
          blockquote
            p “Kita sangat senang sekali bisa ikut berpartisipasi dalam acara pelestarian lingkungan seperti ini. Kedepannya, Internusa akan terus melaksanakan kegiatan positif semacam ini, khususnya yang bermanfaat langsung kepada masyarakat dan lingkungan” Ujar Manager Internusa Development, Melky.
          p Seperti diketahui, tanaman mangrove atau bakau sangat bermanfaat sekali khususnya bagi pelestarian lingkungan. Beberapa manfaat mangrove ini diantaranya adalah untuk mencegah erosi pantai, menjadi Katalis Tanah dari Air Laut, memperbaiki habitat perikanan, mencegah pemanasan global hingga membantu perekonomian nelayan.
          blockquote
            p “Manfaat mangrove ini memang sangat banyak sekali, baik secara lingkungan maupun ekonomi masyarakat sekitar” kata Melky.
          p Selain mengadakan acara pembagian 1 juta bibit mangrove, para nelayan dan masyarakat yang hadir juga diberikan pemahaman tentang pentingnya menjaga lingkungan, khususnya daerah pinggiran laut.
        
          
      
</template>

<script>
import NewsFeed from '@/data/news.js';
import SectionHeader from '@/components/SectionHeader.vue';
import NewsListSmall from '@/components/NewsListSmall.vue';

const RelatedNews = NewsFeed.slice(2);

export default {
  components: {
    SectionHeader,
    NewsListSmall,
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      RelatedNews,
    }
  }
}
</script>
