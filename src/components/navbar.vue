<script setup lang="ts"></script>

<template>
  <div class="bg-[#242629] w-full m-0 flex justify-between p-1 px-20">
    <div class="flex items-center text-[14px]">
      <button class="p-2">
        <img src="../../../public/img/img-nav.svg" alt="" />
      </button>
      <button class="p-2">دسته بندی ها</button>
      <button class="p-2">فیلم</button>
      <button class="p-2">سریال</button>
      <button class="p-2">بازیگران</button>
      <button class="p-2">جدیدترین دوبله ها</button>
    </div>
    <div class="flex items-center">
      <button class="m-1 rounded-md">
        <img src="../../../public/icon/back.svg" alt="" />
      </button>
      <button class="!p-3 m-1 rounded-md !bg-[#1B1C1F]">
        <img src="../../../public/icon/notification.svg" alt="" />
      </button>
      <button class="!p-3 m-1 rounded-md !bg-[#1B1C1F]">
        <img src="../../../public/icon/saveMinus.svg" alt="" />
      </button>
      <button class="!p-3 m-1 rounded-md !bg-[#1B1C1F]">
        <img src="../../../public/icon/search.svg" alt="" />
      </button>
      <button class="!p-2.5 m-1 rounded-md !bg-[#1B1C1F]">
        <img src="../../../public/icon/user.svg" alt="" />
      </button>
    </div>
  </div>
  <div dir="ltr" class="m-5">
    <button class="flex !bg-[#242629] m-2 justify-start">
      بازگشت
      <img src="../../../public/icon/back-white.svg" alt="" class="p-2" />
    </button>
  </div>
</template>

<style scoped>
button {
  border: none;
  background: transparent;
  outline: none;
}
</style>
