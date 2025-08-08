<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getMoive } from "../../api/apiGetMovie";

const movie = ref(null);

const episodes = computed(() => movie.value?.episodes || []);

onMounted(async () => {
  movie.value = await getMoive();
});
</script>

<template>
  <div class="flex flex-col w-[400px]">
    <div v-for="e in episodes" :key="e">
      <div class="flex flex-row py-2 px-4 cursor-pointer">
        <div><img :src="e?.poster" alt="" class="w-[150px] rounded-md" /></div>
        <div class="grid grid-col justify-items-start p-2 m-auto">
          <span class="p-2"> سریال {{ movie?.title_en }}</span>
          <span class="p-2 text-xs"> قسمت {{ e?.number }} </span>
          
          <div class="flex items-center">
            <div class="flex items-center text-xs m-1" dir="ltr">
              <img
                src="../../../public/icon/fire.svg"
                height="25px"
                width="25px"
                alt=""
                class="m-1 bg-[#FB7800] py-1 px-1.5 rounded-md"
              />
            </div>
            <div class="flex px-1  items-center text-xs bg-[#245DEF] rounded-md h-[30px] m-1" dir="ltr">
              زیرنویس
              <img
                src="../../../public/icon/sub.svg"
                height="20px"
                width="20px"
                alt=""
                class="m-1"
              />
            </div>
            <div class="flex p-1 items-center text-xs bg-[#43B100] rounded-md h-[30px] m-1" dir="ltr">
              دوبله
              <img
                src="../../../public/icon/microphone.svg"
                height="20px"
                width="20px"
                alt=""
                class="m-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
