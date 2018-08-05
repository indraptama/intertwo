<template lang="pug">
  footer(class="MainFooter relative z-10 pt-16 pb-16 bg-blue-darker text-white")
    div(class="w-5xl px-6 mx-auto lg:flex items-center justify-between")
      div(class="mb-6")
        img(src="../assets/logo-white.png")
        div(class="mt-4 pl-3")
          ul(class="list-reset leading-loose text-xs")
            li Jl. Sei Besitang No.18 B Medan<br>Sumatera Utara, Indonesia
            li TEL. (061) 455 9992 / 0813 8363 0316
            li EMAIL. admin@internusa.asia
      div(class="text-2xl")
        a(href='#' class="inline-block p-2 no-underline text-white")
          i(class="icon icon-facebook")
        a(href='#' class="inline-block p-2 no-underline text-white")
          i(class="icon icon-twitter")
        a(href='#' class="inline-block p-2 no-underline text-white")
          i(class="icon icon-instagram")
        a(href='#' class="inline-block p-2 no-underline text-white")
          i(class="icon icon-youtube")
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>
