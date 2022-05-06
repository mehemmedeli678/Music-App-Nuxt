<template>
<div>
    <h1 class="my">gelen link {{$route.params.id}}</h1>
  <NuxtLink to='/register'> Go Register page</NuxtLink>
</div>
</template>


<script>

export default {
  setup() {
    
  },
}
</script>