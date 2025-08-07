<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMoive } from '../../api/apiGetMovie'

const movie = ref(null)

onMounted(async () => {
  await getMoive()
})
</script>

<template>

</template>

<style scoped>

</style>