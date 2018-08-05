<template>
  <div id="app">
    <MainHeader />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'

export default {
  components: {
    MainHeader,
  },

}
</script>


<style src="@/assets/inter/inter-ui.css"></style>
<style src="@/assets/icons.css"></style>
<style src="@/style/main.css"></style>
<style>

</style>
