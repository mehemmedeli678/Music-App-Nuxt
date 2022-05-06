import {createStore} from 'vuex'

export default defineNuxtPlugin(NuxtApp=>{
    NuxtApp.vueApp.use(createStore({
        state:{
            loader:true
           },
           getters:{
               _loader(state){
                   return state.loader
               }
           }
    }))
})