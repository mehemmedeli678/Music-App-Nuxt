<template>
  <!-- some content -->
  <NuxtErrorBoundary @error="someErrorLogger">
    <!-- You use the default slot to render your content -->
    <template #error="{ error }">
      You can display the error locally here.
      <button @click="error = null">
        This will clear the error.
      </button>
    </template>
  </NuxtErrorBoundary>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss" scoped>
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #111111;
    }
    .error-404-title {
        font-weight: 500;
        padding-top: 40px;
        margin-bottom: 30px;
    }
</style>