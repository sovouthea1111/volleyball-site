<script setup>
import { ref } from "vue";
import logo from "@/assets/AngryBirdVolleyball.png";

const sponsors = ref([{ name: "Angry Bird Team", logo: logo }]);
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    <div class="text-center">
      <h2 class="text-4xl text-primary font-bold mb-4">Our Sponsors</h2>
      <p class="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
        We are proud to be supported by these amazing organizations.
      </p>
    </div>

    <div class="flex flex-wrap justify-center items-center gap-8 px-4">
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center w-48 h-32 border border-gray-100"
      >
        <img
          :src="sponsor.logo"
          :alt="sponsor.name"
          class="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  </div>
</template>
