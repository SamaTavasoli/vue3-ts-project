<script setup la
  components: { navbar },ng="ts">
import navbar from "../components/navbar.vue"
import detail from "../pages/MoviePlay/details.vue"
import moviePlayer from "../pages/MoviePlay/moviePlayer.vue"
import sidebar from "../pages/MoviePlay/sidebar.vue"
</script>

<template>
        <navbar/>
    <div>
    <detail />
  </div>

  <div class="flex flex-row justify-between max-w-[1300px] m-auto">
    <moviePlayer />
    <sidebar />
  </div>

  
</template>

<style scoped></style>
