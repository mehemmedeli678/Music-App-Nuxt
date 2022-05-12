import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives  from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

export default defineNuxtPlugin(NuxtApp=>{
  const vuetify=createVuetify({
     components,
     directives,
     icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    
    defaults: {
      global: {
        ripple: false,
      },
      VSheet: {
        elevation: 4,
      },
    },
  })
  NuxtApp.vueApp.use(vuetify);
})