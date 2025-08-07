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
      <div class="flex flex-row py-2 px-4">
        <div><img :src="e?.poster" alt="" class="w-[150px] rounded-md" /></div>
        <div class="grid grid-col justify-items-start p-2 m-auto">
          <span class="p-2"> سریال {{ movie?.title_en }}</span>
          <span class="p-2 text-xs"> قسمت {{ e?.number }} </span>
          <div class="flex items-center justify-between w-full p-2">
            <div class="text-xs">{{ movie?.year }}</div>
            <div class="flex">
                <div class="text-xs">{{ movie?.user_rating }}</div>
              <img
                src="../../../public/img/yellowStar.svg"
                alt=""
                width="20px"
                height="20px"
              />
            </div>
          </div>
          <div class="flex">
            <div class="flex p-2 items-center text-xs" dir="ltr">
              <img
                src="../../../public/img/imdb.svg"
                height="20px"
                width="20px"
                alt=""
                class="m-1"
              />
              {{ movie?.imdb
              }}<span class="text-gray-400 text-[13px]">/10</span>
            </div>
            <div class="flex p-2 items-center text-xs" dir="ltr">
              <img
                src="../../../public/img/rt.svg"
                height="20px"
                width="20px"
                alt=""
                class="m-1"
              />
              {{ movie?.rotten }}
            </div>
            <div class="flex p-2 items-center text-xs" dir="ltr">
              <img
                src="../../../public/img/metacritic.svg"
                height="20px"
                width="20px"
                alt=""
                class="m-1"
              />
              {{ movie?.metacritic }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
