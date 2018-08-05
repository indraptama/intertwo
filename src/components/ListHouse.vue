<template lang="pug">
  div(class="hover")
    router-link(to='/single-property' class="flex lg:flex-col w-full no-underline text-black")
      div(class="Ratio Ratio--4x3 w-24 lg:w-full bg-cover bg-center lg:rounded" :style="{'background-image':'url('+imgUrl+')'}")
        .RatioInner(class="bg-cover bg-center")
      div(class="flex-1 no-underline text-black block py-2 pl-3 lg:pl-0")
        div(class="flex justify-between items-center w-full mb-1")
          div(class="text-sm flex-1") {{type}}
          div(class="inline-block bg-blue px-2 py-1 text-white rounded-full text-xs font-bold lowercase") {{status}}
        h4.mb-1.leading-tight.no-underline.text-base.text-blue-darker {{title}}
        span.block.text-sm.mb-2.text-grey {{location}}
        span.block {{price}}
</template>

<script>
export default {
  name: 'ListHouse',
  props: {
    title: String,
    price: String,
    location: String,
    imgUrl: String,
    type: String,
    status: String,
  }
}
</script>
