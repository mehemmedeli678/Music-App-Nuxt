<template>
    <div>
     <div class="recent-posts">
     <v-container>
         <div class="d-flex flex-wrap">
   <v-col cols='12' md='8'>
          <div class="tour my-10">
   <v-img
        lazy-src="https://i1.wp.com/www.cssscript.com/wp-content/uploads/2016/08/vanillaLazyLoad.png?resize=403%2C302&ssl=1"
           width="100%" 
           aspect-ratio='1'
           src='https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/blog-image-10.jpg'/>
          <span class="mt-4">Sep 21, 2016Tours</span>
          <h2>Tour 1971</h2>
          <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.
          Lorem ipsum dolor sit amet, te ridens gloriatur temporibus qui, per enim veritus probatus ad. Quo eu etiam exerci dolore, usu ne omnes referrentur. Ex eam diceret denique, ut legimus similique vix, te equidem apeirian definitionem eos. Ei movet elitr mea. Vis legendos conceptam ad. Fabulas vituperata...</p>
        <div class="share">
            <span>Band, Lyrics, Metal</span>
            <span>Share:  <b-icon-facebook style="fill:#4267B2"></b-icon-facebook> <b-icon-twitter style="fill:#1DA1F2"></b-icon-twitter> <b-icon-youtube style="fill:#ce2828"></b-icon-youtube></span>
        </div>
          </div>
       
        <div class="just my-20">
            <v-img 
            src='https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/blog-image-12.jpg'
           lazy-src="https://i1.wp.com/www.cssscript.com/wp-content/uploads/2016/08/vanillaLazyLoad.png?resize=403%2C302&ssl=1"
            aspect-ratio='1'
           />
            <span>Sep 21, 2016Tours</span>
          <h2>Tour 1971</h2>
          <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.
          Lorem ipsum dolor sit amet, te ridens gloriatur temporibus qui, per enim veritus probatus ad. Quo eu etiam exerci dolore, usu ne omnes referrentur. Ex eam diceret denique, ut legimus similique vix, te equidem apeirian definitionem eos. Ei movet elitr mea. Vis legendos conceptam ad. Fabulas vituperata...</p>
        <div class="share">
            <span>Band, Lyrics, Metal</span>
            <span>Share:  <b-icon-facebook style="fill:#4267B2"></b-icon-facebook> <b-icon-twitter style="fill:#1DA1F2"></b-icon-twitter> <b-icon-youtube style="fill:#ce2828"></b-icon-youtube></span>
        </div>
        </div>
      </v-col>
      <v-col cols='12' md='4'>
          <div class="posts my-11">
              <div class="mini-title">
    <h4>Recent Posts</h4>
              <div class="line"></div>
              </div>
                  <div v-for="i in 3" :key="i" class="items">
                      <v-col cols='12' md='4' class="pa-0 ma-0">
                      <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/blog-image-13.jpg" alt="">
                      </v-col>
                      <div class="pa-3">
                      <h3>Epic Bands</h3>
                      <span>Sep 22, 2016</span>
                      </div>
                  </div>
          </div>
          <div class="categories">
  <div class="mini-title">
    <h4>Categories</h4>
              <div class="line"></div>
              </div>
              <ul>
                  <li>
                     <b-icon-chevron-right/> <span>Events(13)</span>
                  </li>
                  <li>
                     <b-icon-chevron-right/> <span>Festivals(6)</span>
                  </li>
                  <li>
                     <b-icon-chevron-right/> <span>New(12)</span>
                  </li>
                   <li>
                     <b-icon-chevron-right/> <span>Performances(6)</span>
                  </li>
                    <li>
                     <b-icon-chevron-right/> <span>Records(12)</span>
                  </li>
                   <li>
                     <b-icon-chevron-right/> <span>Shows(6)</span>
                  </li>
                   <li>
                     <b-icon-chevron-right/> <span>Tours(10)</span>
                  </li>
                   <li>
                     <b-icon-chevron-right/> <span>videos(12)</span>
                  </li>
              </ul>
          </div>
          <div class="about">
               <div class="mini-title">
              <h4>About</h4>
              <div class="line"></div>
              </div>
              <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.</p>
          </div>
          <div class="follow">
               <div class="mini-title">
              <h4>Follow Us</h4>
              <div class="line"></div>
              </div>
              <div class="icons">
                  <b-icon-instagram/>
                  <b-icon-twitter/>
                  <b-icon-facebook/>
                  <b-icon-linkedin/>
                  <b-icon-pinterest/>
                  <b-icon-telegram/>
              </div>
          </div>
          <div class="tags">
               <div class="mini-title">
              <h4>Follow Us</h4>
              <div class="line"></div>
              </div>
              <span>
                  <NuxtLink to='/'>Albums</NuxtLink>,
                  <NuxtLink to='/'>Band</NuxtLink>,
                  <NuxtLink to='/'>Lyrics</NuxtLink>,
                  <NuxtLink to='/'>Metal</NuxtLink>,
                  <NuxtLink to='/'>Music</NuxtLink>,
                  <NuxtLink to='/'>New</NuxtLink>
              </span>
          </div>
      </v-col>
         </div>
   
     </v-container>
     </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>