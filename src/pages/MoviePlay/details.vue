<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getMoive } from "../../api/apiGetMovie";

const movie = ref(null);

onMounted(async () => {
  movie.value = await getMoive();
});

const roundedUserRating = computed(() => {
  return movie.value ? Math.round(movie.value.user_rating) : null;
});
</script>

<template class="">
  <div class="flex justify-between max-w-[1300px] m-auto py-2 flex-wrap">
    <div class="flex justify-between">
      <span class="bg-red-800 flex flex-col p-1 rounded-lg text-white m-2">
        <span class="bg-white text-red-800 m-auto px-3 rounded-sm">1080</span>
        <span>WebDL</span>
      </span>
      <div class="flex flex-col">
        <span class="text-2xl"> سریال {{ movie?.title_en }}</span>
        <span class="text-md"
          >{{ movie?.title_fa }} ({{ movie?.year }})
        </span>
      </div>
    </div>

    <div class="flex text-[17px] items-center flex-wrap">
      <div class="flex p-2 items-center justify-center-safe hidden sm:flex" dir="ltr">
        <img
          src="../../../public/img/rt.svg"
          height="25px"
          width="25px"
          alt=""
          class="m-1"
        />
        {{ movie?.rotten }}
      </div>
      <div class="flex p-2 items-center justify-center-safe hidden sm:flex" dir="ltr">
        <img
          src="../../../public/img/metacritic.svg"
          height="25px"
          width="25px"
          alt=""
          class="m-1"
        />
        {{ movie?.metacritic }}
      </div>
      <div class="flex items-center justify-center-safe">
        <div class="p-2 flex justify-center-safe">
          <div v-for="n in 5 - roundedUserRating" :key="n">
            <img
              src="../../../public/img/grayStar.svg"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <div v-for="n in roundedUserRating" :key="n">
            <img
              src="../../../public/img/yellowStar.svg"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
        </div>
        <div>{{ movie?.user_rating }} :امتیاز کاربران</div>
      </div>
      <div class="flex p-2 items-center justify-center-safe" dir="ltr">
        <img
          src="../../../public/img/imdb.svg"
          height="25px"
          width="25px"
          alt=""
          class="m-1"
        />
        {{ movie?.imdb }}<span class="text-gray-400 text-[13px]">/10</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
