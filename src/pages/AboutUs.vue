<script setup>
import { ref } from 'vue';

const history = ref([
  { year: '2020', title: 'The Beginning', description: 'Angry Bird Team was founded with a passion for smashing spikes and breaking limits.' },
  { year: '2021', title: 'First Championship', description: 'We took home our first local league trophy, proving our dedication on the court.' },
  { year: '2023', title: 'Expanding the Flock', description: 'Launched our youth training program to nurture the next generation of volleyball stars.' },
]);

const values = ref([
  { title: 'Passion', icon: '🔥', description: 'We play with heart and soul in every game.' },
  { title: 'Teamwork', icon: '🤝', description: 'Together we stand, together we win.' },
  { title: 'Resilience', icon: '🛡️', description: 'We bounce back stronger from every set back.' },
]);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({behavior: "smooth", block: "start"});
    window.history.pushState(null, "", `#${id}`);
  }
};
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    <div class="relative bg-gradient-to-r from-primary to-purple-900 text-white p-10 rounded-xl shadow-xl overflow-hidden">
      <div class="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4V10.8L8.2,7C9.25,5.65 10.55,4.6 12,4M5.6,8.6L10.3,13.3L7,19C5.45,17.4 4.3,15.35 4,13.05C4.2,11.45 4.8,10 5.6,8.6M17,19L13.7,13.3L18.4,8.6C19.2,10 19.8,11.45 20,13.05C19.7,15.35 18.55,17.4 17,19M15.8,7L12,10.8V4C13.45,4.6 14.75,5.65 15.8,7Z" />
        </svg>
      </div>
      <h2 class="text-4xl font-bold mb-4 relative z-10">About Angry Bird Team</h2>
      <p class="text-lg opacity-90 relative z-10 max-w-2xl">
        More than just a team, we are a family united by the love of volleyball. 
        We fly high, spike hard, and never let the ball drop without a fight.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      <div v-for="(value, index) in values" :key="index" 
           class="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary hover:shadow-xl transition-shadow duration-300">
        <div class="text-4xl mb-4">{{ value.icon }}</div>
        <h3 class="text-2xl text-primary font-bold mb-2">{{ value.title }}</h3>
        <p class="text-gray-600 font-sans">{{ value.description }}</p>
      </div>
    </div>

    <div class="px-4">
      <h3 class="text-3xl text-center text-primary font-bold mb-8">Our Journey</h3>
      <div class="relative border-l-4 border-primary ml-6 md:ml-10 space-y-8">
        <div v-for="(item, index) in history" :key="index" class="relative pl-8">
          <div class="absolute -left-[14px] top-1 bg-white border-2 border-primary rounded-full w-6 h-6 flex items-center justify-center">
            <div class="w-2 h-2 bg-secondary rounded-full"></div>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
            <span class="text-secondary font-bold text-xl block mb-1">{{ item.year }}</span>
            <h4 class="text-xl font-bold mb-2">{{ item.title }}</h4>
            <p class="text-gray-600 font-sans">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-secondary/20 p-8 rounded-xl text-center mx-4">
      <h3 class="text-2xl font-bold mb-4">Ready to Fly With Us?</h3>
      <p class="mb-6 font-sans">Whether you're a seasoned pro or just starting, there's a place for you on our court.</p>
      <a href="javascript:void(0);" @click="scrollToSection('contact-us')" class="btn bg-primary text-white font-bold px-8 py-2 rounded-full shadow-lg hover:bg-primary-dark transition-transform">
        Contact Us
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
