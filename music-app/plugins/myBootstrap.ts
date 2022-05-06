import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

export default defineNuxtPlugin(NuxtApp=>{
    NuxtApp.vueApp.use(BootstrapIconsPlugin)
})