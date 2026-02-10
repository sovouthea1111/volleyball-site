<script setup>
import { ref } from 'vue';

const images = ref([
  'https://loremflickr.com/400/300/volleyball,match?random=1',
  'https://loremflickr.com/400/300/volleyball,team?random=2',
  'https://loremflickr.com/400/300/volleyball,training?random=3',
  'https://loremflickr.com/400/300/volleyball,celebration?random=4',
  'https://loremflickr.com/400/300/volleyball,net?random=5',
  'https://loremflickr.com/400/300/volleyball,ball?random=6',
]);
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    <div class="text-center">
      <h2 class="text-4xl text-primary font-bold mb-4">Team Gallery</h2>
      <p class="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
        Capturing our best moments on and off the court.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      <div v-for="(img, index) in images" :key="index" class="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
        <img :src="img" alt="Gallery Image" class="w-full h-64 object-cover">
      </div>
    </div>
  </div>
</template>
