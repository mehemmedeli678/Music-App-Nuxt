<template>
     <v-col cols="12" md='4' sm='6'>
 <v-img class="parent-cover" width="100%" :src=album_list.img>
                  <div class="black-cover">
                <h4>{{album_list.full_name}}</h4>
                <h2>{{album_list.album_name}}</h2>
            </div>
            </v-img>
          
            </v-col>
</template>

<script>
export default {
    props:{
        album_list:Object
    }
}
</script>