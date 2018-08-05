<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-75vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-75vh" :style="{'background-image':'url('+`${baseUrl}img/rumah.jpg`+')'}")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-8 lg:mb-20")
      div(class="hero75 mx-auto flex items-end justify-center lg:justify-start")
        div(class="")
          ul(class="list-reset flex pb-3")
            li(class="w-16 mx-1")
              div(class="Ratio bg-blue-darker")
                div(class="RatioInner bg-cover bg-center bg-red" :style="{'background-image':'url('+`${baseUrl}img/rumah-s1.jpg`+')'}")
            li(class="w-16 mx-1")
              div(class="Ratio bg-blue-darker")
                div(class="RatioInner bg-cover bg-center bg-red opacity-50" :style="{'background-image':'url('+`${baseUrl}img/rumah-s2.jpg`+')'}")
            li(class="w-16 mx-1")
              div(class="Ratio bg-blue-darker")
                div(class="RatioInner bg-cover bg-center bg-red opacity-50" :style="{'background-image':'url('+`${baseUrl}img/rumah-s3.jpg`+')'}")
            li(class="w-16 mx-1")
              div(class="Ratio bg-blue-darker")
                div(class="RatioInner bg-cover bg-center bg-red opacity-50" :style="{'background-image':'url('+`${baseUrl}img/rumah-s4.jpg`+')'}")

    // Content
    div(class="max-w-2xl px-6 mx-auto mb-8 lg:mb-8")
      <SectionHeader title="Rumah di Jakarta Pusat"></SectionHeader>
    
    div(class="max-w-2xl px-6 mx-auto mb-16 lg:mb-24 lg:flex flex-row-reverse")
      
      div(class="lg:w-2/5 lg:ml-16 mb-8")
        div(class="border p-4 bg-white lg:shadow-lg")
          div(class="border-b pb-4 mb-4")
            h3(class="text-2xl mb-1") Rp.78.000.000
            span sewa per tahun
          div(class="border-b pb-4 mb-4")
            div(class="Ratio Ratio--4x3")
              div(class="RatioInner bg-cover bg-center bg-red" :style="{'background-image':'url('+`${baseUrl}img/monas.jpg`+')'}")
            div(class="mt-4")
              button(class="text-center w-full py-4 px-8 rounded bg-blue text-white")
                div(class="flex items-center justify-center")
                  img(src="img/assets/map.svg", alt="" class="")
                  span.block Open Google Map
          div
            h4(class="mb-4 text-blue-darker text-blue-darker") Contact
            a(class="block text-center w-full py-4 px-8 rounded bg-green text-white") Chat via Whatsapp



      div(class="lg:w-3/5 leading-loose")
        .content.max-w-md.mx-auto(class="mb-4 lg:mb-12")
          h4(class="mb-4 text-blue-darker text-blue-darker") Deskripsi
          p Rumah dan Tanah berada di pinggir jalan kota, berdekatan dengan perkantoran. Sangat cocok sekali di jadikan Mess ataupun Kantor.
        .content.max-w-md.mx-auto(class="mb-4 lg:mb-12")
          h4(class="mb-4 text-blue-darker") Informasi Detail
          ul(class="list-reset flex flex-wrap")
            li(class="w-1/2")
              h5 Tipe Property
              p Rumah
            li(class="w-1/2")
              h5 Luas Tanah
              p 2.800 m2
            li(class="w-1/2")
              h5 Jenis Hak Atas Tanah
              p Hak Milik
            li(class="w-1/2")
              h5 Luas Bangunan
              p Tanah Kosong
        .content.max-w-md.mx-auto(class="mb-4 lg:mb-12")
          h4(class="mb-4 text-blue-darker") Lokasi
          p Rumah dan Tanah berada di pinggir jalan kota, berdekatan dengan perkantoran. Sangat cocok sekali di jadikan Mess ataupun Kantor.
          
      
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  components: {
    SectionHeader,
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>
