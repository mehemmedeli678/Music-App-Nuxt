<template>
    <div>
        <Loader v-if="loader"/>
        <div class="gallery">
        <div class="back"></div>
            <v-container fluid>
            <div class="title d-flex flex-wrap justify-space-between align-center">
                <h1>Gallery 4 Columns Wide</h1>
                <span>shuffle / gallery </span>
            </div>
            </v-container>
            <div class="image-list d-flex flex-wrap">
                 <v-col   
                v-for="i in data" :key="i"
                 class="d-flex child-flex ma-0 px-4"
                    cols="12"
                    sm='4'
                    xs='6'
                    md='3'>
                 <v-img    aspect-ratio="1"
                 lazy-src='https://i1.wp.com/www.cssscript.com/wp-content/uploads/2016/08/vanillaLazyLoad.png?resize=403%2C302&ssl=1'
                 :src='i.picture'></v-img>
                </v-col>
            </div>
        </div>
    </div>
</template>



<script>
import Loader from '@/components/TheLoading.vue'
export default {
    components:{
        Loader
    },
    data(){
        return{
            data:[
                {id:1,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Amsterdam-August-2016.jpg'},
                {id:2,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Barcelona-May-2016.jpg'},
                {id:3,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Basel-July-2016.jpg'},
                {id:4,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Berlin-May-2016.jpg'},
                {id:5,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Boston-April-2016.jpg'},
                {id:6,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Budapest-June-2016.jpg'},
                {id:7,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Detroit-May-2016.jpg'},
                {id:8,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Helsinki-August-2016.jpg'},
                {id:9,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/London-October-2016.jpg'},
                {id:10,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Madrid-April-2016.jpg'},
                {id:11,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Munich-May-2016.jpg'},
                {id:12,picture:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/10/Oslo-September-2016.jpg'},
            ],
            loader:true
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
