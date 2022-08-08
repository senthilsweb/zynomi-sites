<template>
	<div class="min-h-screen relative">
		<div class="h-full relative">
			<Header />
			<Hero />
      <Blog :articles="articles" />
      <Footer />
      <ContactSales/>
		</div>
	</div>
</template>

<script setup>
const { data: articles }  = await useAsyncData('articles-list', () => queryContent('casestudy')
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