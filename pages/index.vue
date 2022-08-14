<template>
  <div class="min-h-screen relative">
    <div class="h-full relative">
      <Header />
      <Hero />

      <Blog :articles="articles" />
      <Testimonials />
      <Footer />
      <ContactSales />
      <SignUp />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  //colorMode: 'system',
})
const { data: color } = ref('white')
const { data: articles } = await useAsyncData('articles-list', () => queryContent('casestudy')
  .only([
    "title",
    "description",
    "coverimage",
    "author",
    "date",
    "slug",
    "tags",
    "type",
  ])
  .find())
</script>