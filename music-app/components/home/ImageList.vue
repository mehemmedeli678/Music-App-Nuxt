<template>
  <v-row class="ma-0 pa-0">
    <v-col
      v-for="n in data"
      :key="n"
      class="d-flex child-flex ma-0 pa-0"
      cols="6"
      sm='4'
      xs='6'
      md='3'
    >
      <v-img
        :src="n?.image"
        lazy-src="https://i1.wp.com/www.cssscript.com/wp-content/uploads/2016/08/vanillaLazyLoad.png?resize=403%2C302&ssl=1"
        aspect-ratio="1"
        class="grey lighten-2 ma-0 pa-0"
      >
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
ssr: true,
    data(){
       return{
           data:null
       }
    },
    created(){
      this.data=[
          {id:1,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Brusels-May-2016.jpg'},
              {id:2,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Budapest-July-2016.jpg'},
              {id:3,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Berlin-June-2016.jpg'},
              {id:4,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Munich-June-2016.jpg'},
              {id:5,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Amsterdam-June-2016.jpg'},
              {id:6,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Madrid-May-2016.jpg'},
              {id:7,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Paris-August-2016.jpg'},
              {id:8,image:'https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/Basel-April-2016.jpg'},
      ]
    },
    mounted(){
      
    },
    setup() {
        
    },
}
</script>

