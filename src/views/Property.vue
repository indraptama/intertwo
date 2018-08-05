<template lang='pug'>
  main(class="bg-grey-lighter pt-16")
    div(class="max-w-5xl mx-auto px-4")
      ul(class="list-reset md:flex flex-wrap")
        li(v-for='item in PropertyData' class="lg:w-1/4 xl:w-1/5 p-2")
          ListHouse(:imgUrl='item.imgUrl' :title='item.title' :price='item.price' location='Bandung' :status="item.status" :type="item.type")
      

</template>

<script>
// @ is an alias to /src

import ListHouse from '@/components/ListHouse.vue'


// Data
import PropertyData from '@/data/property.js';
import NewsFeed from '@/data/news.js';

export default {
  name: 'home',
  components: {
    ListHouse,
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
