<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getMoive } from "../../api/apiGetMovie";

const movie = ref(null);

onMounted(async () => {
  movie.value = await getMoive();
});
</script>

<template>
    <div class="p-2 relative inline-block">
      <img :src="movie?.poster" alt="" class="rounded-md block" />
      <button
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img src="../../../public/icon/playIcon.svg" alt="" width="25px"/>
      </button>
    </div>
</template>

<style scoped>
button {
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  outline: none;
}
</style>
