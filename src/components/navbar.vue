<script setup lang="ts">
import { ref } from "vue";

const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <div
    class="bg-[#242629] w-full m-0 flex justify-between p-1 px-20 hidden lg:flex"
  >
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
  <div class="lg:hidden bg-[#242629] w-full m-0 flex justify-between">
    <button @click="toggleMobileMenu">
      <img src="../../../public/icon/ham-bar.svg" alt="" />
    </button>
    <div class="p-2">
      <img src="../../../public/img/farsibox.svg" alt="">
    </div>
    <div class="flex items-center">
      <button class="!p-1 m-1">
        <img src="../../../public/icon/notification.svg" alt="" />
      </button>
      <button class="!p-1 m-1 rounded-md">
        <img src="../../../public/icon/back.svg" alt="" />
      </button>
    </div>
  </div>
  <div dir="ltr" class="m-5 hidden lg:flex">
    <button class="flex !bg-[#242629] m-2 justify-start">
      بازگشت
      <img src="../../../public/icon/back-white.svg" alt="" class="p-2" />
    </button>
  </div>
  <div
    :class="[
      'fixed top-0 left-0 h-full bg-[#1B1C1F] w-64 p-4 text-white shadow-lg transition-transform duration-300 ease-in-out z-50',
      showMobileMenu ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <button @click="toggleMobileMenu" class="mb-4 flex">
      بستن <img src="../../../public/icon/x-mark.svg" alt="" width="25px" />
    </button>
    <div class="flex flex-col space-y-4 text-right">
      <button class="block w-full text-right">دسته‌بندی‌ها</button>
      <button class="block w-full text-right">فیلم</button>
      <button class="block w-full text-right">سریال</button>
      <button class="block w-full text-right">بازیگران</button>
      <button class="block w-full text-right">جدیدترین دوبله‌ها</button>
    </div>
  </div>
  <div class="flex justify-between items-center lg:hidden">
    <div>
      <button class="!p-3 m-1 rounded-md !bg-[#242629]"><img src="../../../public/icon/save.svg" alt=""></button>
      <button class="!p-3 m-1 rounded-md !bg-[#242629]"><img src="../../../public/icon/share.svg" alt=""></button>
    </div>
    <div>
    <button class="flex !bg-[#242629] justify-start">
      بازگشت
      <img src="../../../public/icon/back-white.svg" alt="" class="p-2" />
    </button>
  </div>
  </div>
</template>

<style scoped>
button {
  border: none;
  background: transparent;
  outline: none;
}
</style>
