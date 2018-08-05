<template lang="pug">
  main
    section(class="px-4 lg:px-16 pt-32 text-blue-darker leading-tight mb-16 lg:mb-24")
      div(class="max-w-5xl mx-auto")
        h1(class="lg:text-5xl mb-6" v-scroll-reveal) Get Touch With Us
        div(class="flex items-center mb-6")
          span(class="block lg:w-24 border-b border-blue-darker lg:mr-6")
          h2(class="text-sm lg:text-2xl" v-scroll-reveal) Here`s how you can get in touch with us.
        
    
    section(class="mb-16 lg:mb-24")
      div(class="flex flex-col-reverse lg:flex-row")
        div(class="lg:w-2/3 bg-blue-darker py-12")
          form(class="max-w-2xl mx-auto text-black" v-scroll-reveal)
            div(class="lg:flex flex-wrap")
              div(class="w-full lg:w-1/2 px-8 py-6")
                h6(class="text-base mb-4 text-white") Your Name
                input(class="w-full border py-3 px-3" placehoder='your Name')
              div(class="w-full lg:w-1/2 px-8 py-6")
                h6(class="text-base mb-4 text-white") Your Company
                input(class="w-full border py-3 px-3" placehoder='your Name')
              div(class="w-full lg:w-1/2 px-8 py-6")
                h6(class="text-base mb-4 text-white") Your E-Mail
                input(class="w-full border py-3 px-3" placehoder='your Name')
              div(class="w-full lg:w-1/2 px-8 py-6")
                h6(class="text-base mb-4 text-white") Your Phone
                input(class="w-full border py-3 px-3" placehoder='your Name')
              div(class="w-full px-8 py-6")
                h6(class="text-base mb-4 text-white") Your Messagess
                textarea(class="w-full border py-3 px-3 h-64" placehoder='your Name')
              div(class="w-full px-8 py-6")
                button(class="block text-center w-full py-4 px-8 rounded bg-green text-white") Send Message
        
        div(class="lg:w-1/3 md:flex")
          div(class="max-w-md mx-auto p-8 leading-loose" v-scroll-reveal)
            div(class="flex items-center text-2xl mb-6 text-blue-darker")
              span(class="block lg:w-8 border-b border-blue-darker lg:mr-4")
              h3(class="leading-tight flex-1") Our Office
            div(class="lg:ml-12 text-sm mb-6")
              ul(class="list-reset leading-loose")
                li.mb-2 Jl. Sei Besitang No.18 B Medan <br> Sumatera Utara, Indonesia
                li.mb-2 TEL. (061) 455 9992 0813 8363 0316
                li.mb-2 EMAIL. admin@internusa.asia
    
    

</template>

<script>


export default {

}
</script>
