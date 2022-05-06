<template>
    <div>
        <Loader v-if="loader"/>
        <About/>
    </div>
</template>

<script>
import About from '@/components/about/TheAbout.vue'
import Loader from '@/components/TheLoading.vue'
import { ref } from '@vue/reactivity'
export default {
    components:{Loader,About},
    setup() {
        const loader=ref(true)
        return {loader}
    },
    mounted(){
        this.Top()
        setTimeout(() => {
          this.loader=false
      }, 300);
    },
    methods:{
        Top(){
 window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
        }
    }
}
</script>