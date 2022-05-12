<template>
    <div>
        <Loader v-if="loader"/>
        <blog/>
        <recent-posts/>
    </div>
</template>

<script>

import Blog from '@/components/blog/BlogSlider.vue'
import RecentPosts from '@/components/blog/RecentPosts.vue'
import Loader from '@/components/TheLoading.vue'

export default {
     components: {
    Blog,
    RecentPosts,
    Loader
  },
  data(){
      return{
          loader:false
      }
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