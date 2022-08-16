<template>
  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ article.title
          }}
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:mt-0">
        <article class="prose md:prose-md">
          <ContentDoc />
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})
const { path } = useRoute()
const { data: article } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>