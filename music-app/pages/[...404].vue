<template>
<div>
  <div style="height:100vh" class="d-flex flex-column align-center justify-center">
    <img src="https://icon-library.com/images/not-found-icon/not-found-icon-24.jpg" alt="">
  <h1 class="my-6">Page Not Found</h1>
  <v-card>
  <NuxtLink class="pa-4" style="text-decoration:none;color:green;font-weight:600" to='/'>Go Home</NuxtLink>
  </v-card>
  </div>
</div>
</template>


<script>
definePageMeta({
  layout:false,
  })
export default {
    setup() {
        
    },
}
</script>