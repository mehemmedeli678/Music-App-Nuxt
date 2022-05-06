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
<div class="desctop-header d-none d-sm-none d-md-block" :class="{'fixed':fixed}">
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
               <li><NuxtLink to="/">HOME</NuxtLink></li>
               <li><NuxtLink to="/register">DISCOGRAPHY</NuxtLink></li>
               <li><NuxtLink to="/detail/123">TOURS</NuxtLink></li>
               <li><NuxtLink to="/">PAGES</NuxtLink></li>
               <li><NuxtLink to="/">GALERY</NuxtLink></li>
               <li><NuxtLink to="/">BLOG</NuxtLink></li>
               <li><NuxtLink to="/about">About</NuxtLink></li>
               <li><NuxtLink to="/">ELEMENTS</NuxtLink></li>
            </ul>
            <div class="buttons">
            <b-icon-cart2 />
            <b-icon-search @click="Search()" />
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
<v-container class="px-6">
   <div class="d-flex align-center justify-space-between ">
 <b-icon-list @click="MobileShow()"/>
 <v-col class="d-flex justify-center">
    <v-col cols="3" md="1" sm="2" class="ma-0 pa-0">
   <v-img
      src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/logo-dark-a.png"
   ></v-img>
    </v-col>
 </v-col>
   <b-icon-search @click="Search()" />
   </div>
   <div class="bottom-bar" :class="{'mobile':!mobile}">
        <ul class="menu d-flex flex-column">
               <li><NuxtLink to="/">Home</NuxtLink></li>
               <li><NuxtLink to="/">Disgography</NuxtLink></li>
               <li><NuxtLink to="/">Tours</NuxtLink></li>
               <li><NuxtLink to="/">Pages</NuxtLink></li>
               <li><NuxtLink to="/">Galery</NuxtLink></li>
               <li><NuxtLink to="/">Blog</NuxtLink></li>
               <li><NuxtLink to="/">Shop</NuxtLink></li>
               <li><NuxtLink to="/">Elements</NuxtLink></li>
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
      return {black,isSticky,mobile,search,fixed,up}
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
