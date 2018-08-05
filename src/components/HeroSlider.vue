<template lang="pug">
  div(class="home bg-blue-darker relative pin-t pin-l pin-r vh-90 overflow-hidden z-10")
    // Slider
    
    div(class="fixed pin-t pin-l pin-r pin-b h-screen w-full vh-90 h-screen bg-cover bg-center bg-blue-darker" style="background-image: url('https://source.unsplash.com/1600x900/?architecture,building')") 
    
    div(class="absolute pin-t pin-l pin-r pin-b h-screen w-full vh-90 h-screen bg-cover bg-center bg-blue-darker opacity-50")
      
    // Content
    div(class="relative px-6 max-w-5xl vh-90 flex items-end lg:items-center mx-auto pb-16 lg:pb-0 z-10")
      div
        h1(class="text-xl lg:text-5xl lg:w-4/5 text-white mb-4 lg:mb-8 font-bold") Since 2004<br>We have built commercial facilities and industrial parks in urban cities of Indonesia
        <router-link to='/project' class="inline-block text-white no-underline lg:text-xl border-b-2 py-3">See Our Project</router-link>
</template>