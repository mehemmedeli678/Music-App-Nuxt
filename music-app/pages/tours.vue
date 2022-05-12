<template>
    <div>
        <Loader v-if="loader"/>
    <Tours/>
    </div>
</template>

<script>
import Tours from '@/components/tours/TheTour.vue'
import Loader from '@/components/TheLoading.vue'
import { ref } from '@vue/reactivity'

export default {
      head () {
    return {
      title: 'Shuffle-tours',
    }
  },
    components:{Tours,Loader},
    setup() {
        const loader=ref(true)
        return{loader}
    },
    mounted(){
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
         });
        setTimeout(() => {
            this.loader=false
        }, 300);
    }
}
</script>