<template>
  <header class="relative">
    <div class="absolute inset-0 z-0">
      <img
        src="@/assets/bg.jpg"
        alt="AngryBirdVolleyball"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="absolute inset-0 bg-blue-900 bg-opacity-50 z-10"></div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:block relative z-20 px-4 py-4">
      <div class="w-full flex items-center justify-center">
        <div
          class="w-[80%] bg-white rounded-full px-4 flex items-center justify-between"
        >
          <div
            class="bg-white rounded-full p-2 mr-4 flex flex-row items-center"
          >
            <ApplicationLogo />
            <h1 class="text-lg font-semibold">Angry Bird Volleyball</h1>
          </div>
          <ul class="flex justify-center space-x-6">
            <MenuItem />
          </ul>
          <button class="bg-yellow-500 text-white px-4 py-2 rounded-full ml-6">
            <a href="/#contact-us"> Contact Us </a>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Header with Menu Button -->
    <div
      class="md:hidden flex items-center justify-between relative z-20 px-4 pt-4"
    >
      <button @click.prevent="showBackground = true" class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div v-if="showBackground" class="fixed inset-0 z-50 flex">
      <div
        class="bg-black bg-opacity-50 absolute inset-0"
        @click="showBackground = false"
      ></div>
      <div
        class="relative w-3/4 max-w-xs bg-black text-white h-full overflow-y-auto z-50 flex flex-col"
      >
        <div class="flex justify-between p-4">
          <div class="flex flex-row items-center">
            <ApplicationLogo />
            <h2 class="text-white text-[1.5rem]">Angry Bird Volleyball</h2>
          </div>
          <button @click="showBackground = false" class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <MenuItem
          text-color="text-white"
          css-wrapper="fixed left-10 space-x-0 space-y-4 mt-10 max-sm:menu-vertical"
        />
      </div>
    </div>
    <div class="relative z-20 px-4 py-16 md:py-24 lg:py-32">
      <div class="container mx-auto flex flex-col md:flex-row">
        <div class="w-full md:w-1/2"></div>
        <div class="w-full md:w-1/2 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            VOLLEYBALL IS<br />OUR GAME FOR<br />LIFE TIME
          </h1>
          <p class="mb-6 text-sm md:text-base">
            It is a long established fact that a reader will be distract<br />
            ed by the readable content of a page when looking at it<br />
            s layout. The point of using Lorem.
          </p>
          <button
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full"
          >
            <a href="/#contact-us"> Contact Us </a>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ApplicationLogo from "@/components/ApplicationLogo.vue";
import MenuItem from "@/components/MenuItem.vue";
import { ref } from "vue";

const showBackground = ref(false);
</script>

<style scoped>
.fixed {
  transition: all 0.3s ease-in-out;
}
</style>
