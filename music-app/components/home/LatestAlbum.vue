<template>
    <v-container class="my-10">
        <Title>
        <template #title>
        <h1>LATEST ALBUMS</h1>
            <h3 class="text-center">Interdum et malesuada fames ac ante ipsum primis</h3>
        </template>
    </Title>
        <div  class="album-list d-flex flex-wrap">
           <AlbumList v-for="i in albums_list" :album_list="i" :key="i"/>
        </div>
    </v-container>
</template>

<script>
import AlbumList from '@/components/home/AlbumList.vue'
import Title from '@/components/TheTitle.vue'
export default {
    components:{
      AlbumList,
      Title
    },
    data(){
        return {
            albums_list:[
            {
                id:1,img:"https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/album-cover-image-7.jpg",
                album_name:"THE NOWING",full_name:"ADAM MARTIN"
            },
            {
                id:2,img:"https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/album-cover-image-17.jpg",
                album_name:"SHUFFLE",full_name:"ADAM MARTIN"
            },
            {
                id:3,
                img:"https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/album-cover-image-18.jpg",
                album_name:"EASY GAMES",full_name:"ADAM MARTIN"
            }
        ]
        }
    },
    mounted(){
    }
}
</script>