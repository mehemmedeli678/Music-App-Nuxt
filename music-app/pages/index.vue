<template>
<div>
  <Head>
    <title>Shuffle-Home</title>
  </Head>
    <Loader v-if="loader"/>
    <Slider/>
    <latest-album/>
    <latest-news/>
    <image-list/>
    <artist-bio/>
</div>
</template>

<script>
import Slider from '@/components/home/Slider.vue'
import LatestAlbum from '@/components/home/LatestAlbum.vue'
import LatestNews from '@/components/home/LatestNews.vue'
import Loader from '@/components/TheLoading.vue'
import ImageList from '@/components/home/ImageList.vue'
import ArtistBio from '@/components/home/ArtistBio.vue'


definePageMeta({
  layout:'default',
  })
  
export default {
  //  head () {
  //   return {
  //     title: 'Shuffle-Home',
  //   }
  // },
    components:{
     Slider,LatestAlbum,Loader,LatestNews,ImageList,ArtistBio
    },
    setup(){
      const loader=ref(true)
      return {loader}
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