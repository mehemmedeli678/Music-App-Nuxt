<template>
     <div class="news my-10">
    <v-container>
    <Title>
        <template #title>
        <h1>LATEST NEWS</h1>
            <h3 class="text-center">Interdum et malesuada fames ac ante ipsum primis</h3>
        </template>
    </Title>
    <div class="d-flex flex-wrap latest-news">
        <!-- <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/blog-masonry-image-16.jpg" alt=""> -->

    <v-col cols="12" xs='12' md='4' sm='6'>
        <v-card>
        <div class="pa-3">
            <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/blog-masonry-image-16.jpg" alt="">
        </div>
        <div class="pa-7">
            <NuxtLink to='/'><h3>Rebirth Album</h3></NuxtLink>
            <span>Sep 28, 2016</span>
            <p class="my-6">Ex error omnium interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit amet, te ridens gloriatur temporibus qui, per enim veritus probatus ad. Quo eu etiam exerci dolore, usu ...</p>
        </div>
        </v-card>
       
        </v-col>
        <v-col cols="12" md='4' sm='6'>
        <v-card>
        <div class="pa-3">
            <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/blog-masonry-image-15.jpg" alt="">
        </div>
        <div class="pa-7">
            <NuxtLink to='/'><h3>Rebirth Album</h3></NuxtLink>
            <span>Sep 28, 2016</span>
            <p class="my-6">Ex error omnium interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit amet, te ridens gloriatur temporibus qui, per enim veritus probatus ad. Quo eu etiam exerci dolore, usu ...</p>
        </div>
        </v-card>
       
        </v-col>
        <v-col cols="12" xs='6' md='4' sm='6'>
        <v-card>
        <div class="pa-3">
            <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Budapest-July-2016.jpg" alt="">
        </div>
        <div class="pa-7">
           <NuxtLink to='/'><h3>Rebirth Album</h3></NuxtLink>
            <span>Sep 28, 2016</span>
            <p class="my-6">Ex error omnium interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit amet, te ridens gloriatur temporibus qui, per enim veritus probatus ad. Quo eu etiam exerci dolore, usu ...</p>
        </div>
        </v-card>
       
        </v-col>
    </div>
    </v-container>
     </div>
</template>
<script>
import Title from '@/components/TheTitle.vue'

export default {
    components:{
        Title
        }
}
</script>