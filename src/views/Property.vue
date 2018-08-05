<template lang='pug'>
  main(class="bg-grey-lighter pt-32 mt-8")
    div(class="fixed pin-l pin-r pin-t bg-white w-100 mt-16 px-6 z-10 h-16 shadow-lg")
    div(class="fixed pin-l pin-r pin-t bg-white w-100 mt-16 px-6 z-50 h-16 border-t border-b flex items-center")
      nav(class="max-w-5xl mx-auto w-full")
        a(href="#" class="inline-block border px-3 py-3 text-grey-darker no-underline rounded mr-4") Kategori
        a(href="#" class="inline-block border px-3 py-3 text-grey-darker no-underline rounded mr-4") Rentang Harga
        a(href="#" class="inline-block border px-3 py-3 text-grey-darker no-underline rounded mr-4") Lokasi
    div(class="max-w-5xl mx-auto px-6 pb-16")
      ul(class="list-reset md:flex flex-wrap")
        li(v-for='item in PropertyData' class="lg:w-1/4 xl:w-1/5 p-2")
          ListHouse(:imgUrl='item.imgUrl' :title='item.title' :price='item.price' location='Bandung' :status="item.status" :type="item.type")
      

</template>

<script>
// @ is an alias to /src

import ListHouse from '@/components/ListHouse.vue'


// Data
import PropertyData from '@/data/property.js';


export default {
  name: 'home',
  components: {
    ListHouse,
  },
  data: function() {
    return {
      PropertyData,
      propertyHome: PropertyData.slice(0,3),
    }
  }
}
</script>
