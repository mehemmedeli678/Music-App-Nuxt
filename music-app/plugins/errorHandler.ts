export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, context) => {
      console.error('error');
    }
  })

// export default defineNuxtPlugin((nuxtApp) => {
//   console.log();
// })

// export default defineNuxtPlugin((nuxtApp) => {
//  
// })

  //middleware.ts
// export default defineNuxtRouteMiddleware((to, from) => {
// console.log('defineNuxtRouteMiddleware error var');
// // if (to.params.id === '1') {
// //   return abortNavigation()
// // }
// // return navigateTo('/')
//   })