<script setup lang="ts">
import detail from "../pages/MoviePlay/details.vue"
import moviePlayer from "../pages/MoviePlay/moviePlayer.vue"
import sidebar from "../pages/MoviePlay/sidebar.vue"
</script>

<template>
<div>
    <div>
    <detail />
  </div>

  <div class="flex flex-row">
    <moviePlayer />
    <sidebar />
  </div>
</div>
  
</template>

<style scoped></style>
