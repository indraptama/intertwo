<template lang="pug">
  div
    div(class="z-50 px-6 bg-white fixed pin-l pin-t pin-r w-100 shadow-lg")
      div(class="MainHeader flex items-center justify-between h-16 lg:px-4 mx-auto max-w-5xl")
        div(class="")
          img(src="../assets/logo.png" class="h-12")
        nav(class="MainNav hidden lg:flex items-center justify-between")
          <router-link to='/' class="inline-block no-underline black capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b-2 border-transparent hover:border-dark-blue">Home</router-link>
          <router-link to='/project' class="inline-block no-underline black capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b-2 border-transparent hover:border-dark-blue">project</router-link>
          <router-link to='/property' class="inline-block no-underline black capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b-2 border-transparent hover:border-dark-blue">property</router-link>
          <router-link to='/news' class="inline-block no-underline black capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b-2 border-transparent hover:border-dark-blue">news</router-link>
          <router-link to='/about' class="inline-block no-underline black capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b-2 border-transparent hover:border-dark-blue">about</router-link>
          <router-link to='/contact' class="inline-block no-underline black capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b-2 border-transparent hover:border-dark-blue">contact</router-link>
        div(class="lg:hidden")
          button( @click='toggle' class="icon icon-menu text-3xl" href="#")
    div(id="smMenu" :class="open ? 'SlideIn lg:hidden' : 'SlideOut lg:hidden' ")
      div(class="pt-16")
        nav(class="h-full")
          <router-link @click.native='toggle' to='/' class="smMenu-item w-100 block no-underline capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b">Home</router-link>
          <router-link @click.native='toggle' to='/project' class="smMenu-item w-100 block no-underline capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b">project</router-link>
          <router-link @click.native='toggle' to='/property' class="smMenu-item w-100 block no-underline capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b">property</router-link>
          <router-link @click.native='toggle' to='/news' class="smMenu-item w-100 block no-underline capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b">news</router-link>
          <router-link @click.native='toggle' to='/about' class="smMenu-item w-100 block no-underline capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b">about</router-link>
          <router-link @click.native='toggle' to='/contact' class="smMenu-item w-100 block no-underline capitalize text-black tracked-loose lh-16 mx-4 px-2 border-b">contact</router-link>
</template>

<script>
export default {
  name: 'MainHeader',
  data: function() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>
 
 #smMenu {
   position: fixed;
   left: 0;
   bottom: 0;
   top: 0;
   right: 0;
   background-color: red;
   height: 100%;
   z-index: 40;
  }

  .SlideIn {
    transform: translate3d(0,0,0);
    transition: all 250ms ease-in-out;
  }

  .SlideOut {
    transform: translate3d(100vw,0,0);
    transition: all 250ms ease-in-out;
  }

</style>

