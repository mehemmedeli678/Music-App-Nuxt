<template>
    <div class="slider-player">
  <div class="d-none d-sm-none d-md-block">
    <v-img width="100px" src='https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/album-cover-image-17.jpg'></v-img>
  </div>
  <div class="headers">
    <h3>Desired Feelings</h3>
    <span>Shuffle</span>
  </div>
  <div class="buttons">
  <button> <b-icon-skip-backward-circle-fill></b-icon-skip-backward-circle-fill> </button>
  <button class="play" @click="Play()"><b-icon-play-circle-fill></b-icon-play-circle-fill></button>
  <button class="stop" style="display:none" @click="Stop()"><b-icon-stop-circle-fill></b-icon-stop-circle-fill></button>
  <button> <b-icon-skip-forward-circle-fill></b-icon-skip-forward-circle-fill> </button>
  </div>
  <div class="range d-none d-sm-none d-md-block d-md-flex">
   <input @click="Time($event)" value="0" id="time" class="active" type="range">
     <audio @ended="Stop()" @pause="Stop()" class="lp d-none" controls><source src="@/assets/music/lp.mp3" type="audio/mpeg"></audio>
     <span class="numbertime">00:00 / 00:00</span>
  </div>
     <div class="d-none d-sm-none d-md-block d-md-flex align-center">
       <input @change="VolumeChange($event)" value="70" class="volume" type="range">
     </div>
</div>
</template>

<script>
export default {
   data(){
       return{
        t:null,
       }
},
methods:{
   
   Stop(){
     let lp=document.querySelector('.lp')
     let stop=document.querySelector('.stop')
     let play=document.querySelector('.play')
     play.style.display='block'
     stop.style.display='none'
     lp.pause()
     clearInterval(this.t)
  },
Time(e){
     var lp=document.querySelector('.lp')
     lp.currentTime=e.target.value/100*lp.duration
},
InterVal(){
  var formatTime=function(time){
 let min = Math.floor(time / 60);
    if(min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0` + sec;
    }
    return `${min} : ${sec}`;
  }
  this.t=  setInterval(() => {
      var lp=document.querySelector('.lp')
     var time=document.querySelector('.active')
     var number=document.querySelector('.numbertime')
     number.innerHTML=`${formatTime(lp.currentTime)} / ${formatTime(lp.duration)}`
          var persent=(lp.currentTime/lp.duration*100)
         time.value=persent
         console.log(persent);
  }, 500);
},
VolumeChange(e){
   var lp=document.querySelector('.lp')
    lp.volume=e.target.value/100
},
 async Play(){
     var lp=document.querySelector('.lp')
     var volume=document.querySelector('.volume')
     let stop=document.querySelector('.stop')
     let play=document.querySelector('.play')
     play.style.display='none'
     stop.style.display='block'
     lp.volume=volume.value/100
     this.InterVal()
     lp.play()
  },
},
}
</script>