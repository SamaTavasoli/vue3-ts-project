<script setup lang="ts">
import Navbar from "../components/navbar.vue"
import Footer from "../components/footer.vue"
import Detail from "../pages/MoviePlay/details.vue"
import MoviePlayer from "../pages/MoviePlay/moviePlayer.vue"
import Sidebar from "../pages/MoviePlay/sidebar.vue"
</script>

<template>
  <Navbar />

  <div>
    <Detail />
  </div>

  <div class="flex flex-row justify-between max-w-[1300px] m-auto">
    <MoviePlayer />
    <Sidebar />
  </div>

  <Footer />
</template>
