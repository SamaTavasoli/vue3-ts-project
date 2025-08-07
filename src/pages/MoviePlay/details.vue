<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMoive } from '../../api/apiGetMovie'

const movie = ref(null)

onMounted(async () => {
  movie.value = await getMoive()
})
</script>

<template>
<div>
    <div class="flex flex-col">
        <span class="text-lg">{{movie?.title_en}} سریال </span>
        <span>{{ movie?.title_fa }}</span>
    </div>
    <div></div>
</div>
</template>

<style scoped>

</style>