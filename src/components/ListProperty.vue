<template lang="pug">
  router-link(to='/single-property' class="flex items-strech no-underline")
    div(class="w-full flex border-b")
      div(class="w-24")
        div(class="Ratio overflow-hidden lg:absolute pin-l pin-b pin-r pin-t bg-center bg-cover hover:opacity-75" :style="{'background-image':'url('+imgUrl+')'}")
          
      div(class="pl-3 py-4 lg:p-8 z-10 text-black bg-white mb-2")
        div(class="flex items-center mb-2")
          span(class="inline-block pr-3 text-xs font-bold") Medan, Indonesia
          span(class="flex-1 header-line bg-grey")
        div
          h4(class="text-base mb-2") {{title}}
          span(class="block text-sm") {{price}}
</template>

<script>
export default {
  name: 'ListProperty',
  props: {
    title: String,
    price: String,
    imgUrl: String,
  }
}
</script>

