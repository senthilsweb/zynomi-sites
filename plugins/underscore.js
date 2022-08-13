import { defineNuxtPlugin } from '#app'
import underscore from 'vue-underscore';
import underscorestring from 'underscore.string';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('u', underscore)
    nuxtApp.provide('s', underscorestring)
})
