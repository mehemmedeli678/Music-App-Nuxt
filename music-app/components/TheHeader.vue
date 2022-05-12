<template>
<div>
   <div @click="Up()" v-if="up" class="up">
      <div class="svg">
   <b-icon-caret-up-fill></b-icon-caret-up-fill>
      </div>
   </div>
   <div @click="Close()" v-if="black" class="black"></div>
   <div class="right-nav d-none d-sm-none d-md-block "  :class="{'show':!isSticky}">
      <div class="close-icon d-flex justify-end">
   <b-icon-x-lg @click="Show()"></b-icon-x-lg>
      </div>
      <div class="d-flex flex-column align-center">
   <h2>Latest Album</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus risus mauris, et commodo lectus hendrerit ac.</p>
   <ul class="icons d-flex">
            <li>
                <b-icon-instagram></b-icon-instagram>
            </li>
            <li>
                <b-icon-spotify></b-icon-spotify>
            </li>
            <li>
                <b-icon-youtube></b-icon-youtube>
            </li>
   </ul>
   <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/sidebar-album.jpg" alt="">
   <h4>Dara Lewis</h4>
      </div>
</div>
   
   <div v-if="search" class="search">
      <div class="center">
         <div class="d-flex justify-end my-10">
        <b-icon-x-lg @click="Search()"></b-icon-x-lg>
         </div>
         <div class="inp">
   <input placeholder="Musiqi adini qeyd edin" type="text">
           <b-icon-search />
         </div>
      </div>
   </div>
<div class="desctop-header d-none d-sm-none d-md-block" :class="{'fixed':fixed,'absolute':!fixed}">
   <header>
<v-container  fluid class="my-0 py-4 px-15">
      <div class="d-flex justify-space-between align-center ma-0 pa-0">
         <v-col class="pa-0" cols="2"
        lg="2"
        md="2"
        >
            <div class="black-logo">
               <NuxtLink to='/'>
             <v-img
                  src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/logo-dark-a.png"
                  width="60%"
                  height="min-width"
               ></v-img>
               </NuxtLink>
            </div>
            <div  class="white-logo">
               <NuxtLink to="/">
                <v-img
                  src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/logo-loght-a.png"
                  width="60%"
                  height="min-width"
               ></v-img>
               </NuxtLink>
            </div>
            </v-col>
            <div class="d-flex align-center">
            <ul class="menu d-flex">
               <li><NuxtLink :class="{'text-red' : pageColor=='index'}" to="/">Home</NuxtLink></li>
               <li><NuxtLink :class="{'text-red' : pageColor=='discography'}" to="/discography">DISCOGRAPHY</NuxtLink></li>
               <li><NuxtLink :class="{'text-red' : pageColor=='tours'}" to="/tours">TOURS</NuxtLink></li>
               <li><NuxtLink :class="{'text-red' : pageColor=='Home'}" to="/">PAGES</NuxtLink></li>
               <li><NuxtLink :class="{'text-red' : pageColor=='gallery'}" to="/gallery">GALERY</NuxtLink></li>
               <li><NuxtLink :class="{'text-red' : pageColor=='blog'}" to="/blog">BLOG</NuxtLink></li>
               <li><NuxtLink :class="{'text-red' : pageColor=='about'}" to="/about">About</NuxtLink></li>
            </ul>
            <div class="buttons">
            <b-icon-search @click="Search()"/>
            <b-icon-list @click="Show" />
            </div>
            </div>
           
      </div>
      <div>
      </div>
</v-container>
   </header>
</div>
<div class="mobile-header d-xs-block d-sm-block d-md-none">
<v-container class="pt-6">
   <div class="d-flex align-center justify-space-between ">
 <b-icon-list @click="MobileShow()"/>
 <v-col class="d-flex justify-center">
    <v-col cols="3" md="1" sm="2" class="ma-0 pa-0">
       <NuxtLink to='/'>
   <v-img
      src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/logo-dark-a.png"
   ></v-img>
       </NuxtLink>
    </v-col>
 </v-col>
   <b-icon-search @click="Search()" />
   </div>
   <div class="bottom-bar" :class="{'mobile':!mobile}">
        <ul class="menu d-flex flex-column">
               <li><NuxtLink to="/">Home</NuxtLink></li>
               <li><NuxtLink to="/discography">Disgography</NuxtLink></li>
               <li><NuxtLink to="/tours">Tours</NuxtLink></li>
               <li><NuxtLink to="/">Pages</NuxtLink></li>
               <li><NuxtLink to="/gallery">Galery</NuxtLink></li>
               <li><NuxtLink to="/blog">Blog</NuxtLink></li>
               <li><NuxtLink to="/about">About</NuxtLink></li>
            </ul>
   </div>
</v-container>
</div>
</div>
</template>
<script>
import { ref  } from '@vue/reactivity'
export default {
   setup(){
       let black=ref(false)
       let isSticky= ref(false)
       let mobile=ref(false)
       let search=ref(false)
       let fixed=ref(false)
       let up=ref(false)
       let pageColor=ref('Home')
      return {black,isSticky,mobile,search,fixed,up,pageColor}
   },
   beforeMount(){
     window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if (scroll >=500) {
                    this.up=true
                }else{
                    this.up=false
                }
                if(scroll >= 100){
                    this.fixed = true
                } else {
                    this.fixed = false
                }
            })
   },
    mounted(){
       this.pageColor=this.$route.name
       console.log(this.$route.name);
    },
    watch:{
        $route(){
       this.pageColor=this.$route.name
    }
    },
   methods:{
      Up(){
         //  document.documentElement.scrollTop = 0;
         //  document.body.scrollTop = 0;
         window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      Close(){
       this.isSticky=false
       this.mobile=false
       this.search=false
       this.black=false
      },
      Show(){
      this.isSticky =!this.isSticky
      this.black =!this.black
      },
      MobileShow(){
      this.mobile =!this.mobile
      },
      Search(){
         this.search =!this.search
         this.black = !this.black
      }
   }
}
</script>
