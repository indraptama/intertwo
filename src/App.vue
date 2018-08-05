<template>
  <div id="app">
    <MainHeader />
    <router-view/>
    <MainFooter />
  </div>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MainHeader,
    MainFooter
  },

}
</script>


<style src="@/assets/inter/inter-ui.css"></style>
<style src="@/assets/icons.css"></style>
<style src="@/style/main.css"></style>
<style>

</style>
