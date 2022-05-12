<template>
<div>
     <head>
            <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
        </head>
    <div class="discography">
        <v-container>
      <h1>THE KNOWING</h1>
      <div class="d-flex flex-wrap">
      <v-col cols='12' md='6'>
          <v-img
          lazy='false'
          src='https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/album-cover-image-7.jpg'
          ></v-img>
          <ul class="my-4">
              <li class="my-1"><b>Artist:</b>: Adam Martin </li>
              <li class="my-1"><b>Release Date:</b>December 20, 2016</li>
              <li class="my-1"><b>Genres:</b>Indie, Indie Rock, Rock</li>
          </ul>
          <div class="about my-8">
              <h2 class="my-4">About New Album</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque. Duis ac vulputate quam.</p>
          </div>
      </v-col>
      <v-col cols='12' md='6'>
          <ul class="right">
              <li class="d-flex justify-space-between align-center py-3" v-for="(item,index) in data" :key="index" >
          <div class="text-h6 font-weight-bold"> {{index+1}}. {{item.name}}</div>
          <span class="d-flex align-center">
              {{item.time}} 
             <div class="mx-4 d-flex">
                 <i @click="Play($event)" class="fa-solid fa-play play"></i> 
              <i @click="Stop($event)" style="display:none" class="fa-solid fa-pause pause"></i>
         <audio @pause="Stop($event)" @ended="Stop($event)" @play="Plays($event)" class="d-none"><source :src="item.url" type="audio/mpeg"></audio>

             </div>
           <a :href="item.url" download><i class="fa fa-download text-white"></i></a>
          </span>

              </li>
          </ul>
          <div class="aviable">
              <h1>Aviable Now On</h1>
              <div class="d-flex">
                  <NuxtLink to='/'>Itunes</NuxtLink>
                  <NuxtLink class="mx-2" to='/'>AmazonMP3</NuxtLink>
                  <NuxtLink to='/'>Google Play</NuxtLink>
              </div>
          </div>
           <div class="share">
              <h1>Share</h1>
              <div class="d-flex">
                  <NuxtLink to='/'><b-icon-facebook/></NuxtLink>
                  <NuxtLink class="mx-2" to='/'><b-icon-twitter/></NuxtLink>
                  <NuxtLink to='/'><b-icon-instagram/></NuxtLink>
              </div>
          </div>
      </v-col>
      </div>
        </v-container>
    </div>
</div>

</template>

<script>
export default {
      head () {
    return {
      title: 'Shuffle-Discography',
      link:{
          rel:"stylesheet",
          href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      }
    }
  },
    setup() {
        const data=[
            {id:1 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:2 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:3 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:4 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:5 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:6 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:7 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:8 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:9 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},
            {id:10 , name:'Desired Feelings',time:'0:28',url:'/_nuxt/assets/music/lp.mp3'},

        ]
        return {data}
    },
    methods:{
        Plays(elem){
             const parent=elem.target.parentElement
           const pause= parent.querySelector('.pause')
           const play= parent.querySelector('.play')
           const pauseall= document.querySelectorAll('li audio')
           pauseall.forEach((x,i)=>{
            document.querySelectorAll('li .play')[i].style.display='block'
            document.querySelectorAll('li .pause')[i].style.display='none'
           })
            play.style.display='none'
           pause.style.display='block'
        },
        Play(elem){
           const parent=elem.target.parentElement
           const pause= parent.querySelector('.pause')
           const play= parent.querySelector('.play')
           const child= parent.querySelector('audio')
           const pauseall= document.querySelectorAll('li audio')
           pauseall.forEach((x,i)=>{
            document.querySelectorAll('li .play')[i].style.display='block'
            document.querySelectorAll('li .pause')[i].style.display='none'
            x.pause()
           })
            play.style.display='none'
           pause.style.display='block'
           child.play()
        },
        Stop(elem){
           const parent=elem.target.parentElement
           const play= parent.querySelector('.play')
           const pause= parent.querySelector('.pause')
           pause.style.display='none'
           play.style.display='block'
           const audio= parent.querySelector('audio')
           audio.pause()
        }
    }
}
</script>