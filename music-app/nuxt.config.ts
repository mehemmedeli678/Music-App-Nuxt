import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css:[
        'vuetify/lib/styles/main.sass',
    // '@mdi/font/css/materialdesignicons.css',
    // 'material-design-icons-iconfont/dist/material-design-icons.css',
    '@/assets/scss/style.scss',
    'swiper/css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  head: {
    titleTemplate: '%s - Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    
  },
  build:{
    transpile:['vuetify'],
  },
  vite:{
  define:{
    "process.env.DEBUG":false
  }
  },
})
