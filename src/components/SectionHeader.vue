<template lang="pug">
  header(class="mb-4 lg:mb-8 text-black flex items-center")
    h2(class="text-xl inline-block lg:text-3xl mr-8 capitalize text-blue-darker") {{title}}
    div(class="header-line  lg:block flex-1 bg-blue-darker")
</template>

<script>
export default {
  name:'SectionHeader',
  props: {
    title: String,
  }
}
</script>

