<template lang="pug">
  div(class="bg-white flex md:block")
    // News Image
    <router-link to='/single-news' class="block Ratio Ratio--2x3 w-32 md:w-auto hover:opacity-75">
      div(class="RatioInner bg-center bg-cover" :style="{'background-image':'url('+imgUrl+')'}")
    </router-link>
    div(class="content md:px-4 flex-1")
      div(class="bg-white p-3")
        h3(class="text-base mb-2 text-black leading-normal") {{ title }}
        p(class="text-xs mb-4 text-grey-darker") {{ date }}
        div(class="hidden md:block leading-loose text-sm") {{ content }}  
</template>

<script>
export default {
  name: 'ListNews',
  props: {
    title: String,
    date: String,
    imgUrl: String,
    content: String,
  }
}
</script>


<style>

</style>
