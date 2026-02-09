<script setup>
import { ref, computed } from 'vue';

const filter = ref('All');
const categories = ['All', 'Outside Hitter', 'Opposite Hitter', 'Middle Blocker', 'Setter', 'Libero'];

const players = ref([
  { id: 1, name: 'Alex "The Hawk" Johnson', number: 7, position: 'Outside Hitter', height: '192cm', spike: '340cm', image: 'https://loremflickr.com/300/300/volleyball,player?random=1' },
  { id: 2, name: 'Marcus Chen', number: 12, position: 'Setter', height: '185cm', spike: '320cm', image: 'https://loremflickr.com/300/300/volleyball,player?random=2' },
  { id: 3, name: 'David Miller', number: 5, position: 'Middle Blocker', height: '201cm', spike: '350cm', image: 'https://loremflickr.com/300/300/volleyball,player?random=3' },
  { id: 4, name: 'Sarah Connor', number: 10, position: 'Opposite Hitter', height: '188cm', spike: '315cm', image: 'https://loremflickr.com/300/300/volleyball,player?random=4' },
  { id: 5, name: 'Tom "Wall" Baker', number: 3, position: 'Libero', height: '175cm', spike: '290cm', image: 'https://loremflickr.com/300/300/volleyball,player?random=5' },
  { id: 6, name: 'Chris Evans', number: 18, position: 'Middle Blocker', height: '198cm', spike: '345cm', image: 'https://loremflickr.com/300/300/volleyball,player?random=6' },
]);

const coach = {
  name: 'Hoeun sovouthea',
  role: 'Head Coach',
  experience: '1 Year',
  philosophy: 'Hard work beats talent when talent doesn\'t work hard.',
  image: '/Coach.JPG'
};

const filteredPlayers = computed(() => {
  if (filter.value === 'All') return players.value;
  return players.value.filter(p => p.position === filter.value);
});
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    
    <div class="bg-gradient-to-br from-gray-900 to-primary text-white p-8 rounded-xl shadow-2xl mx-2 md:mx-0 flex flex-col md:flex-row items-center gap-8">
      <div class="w-40 h-40 rounded-full border-4 border-secondary overflow-hidden shrink-0 shadow-[0_0_20px_rgba(63,212,173,0.6)]">
        <img :src="coach.image" alt="Coach" class="w-full h-full object-cover">
      </div>
      <div class="text-center md:text-left">
        <div class="text-secondary font-bold tracking-widest uppercase mb-1">{{ coach.role }}</div>
        <h2 class="text-4xl font-bold mb-3">{{ coach.name }}</h2>
        <p class="text-gray-300 font-sans italic max-w-xl">"{{ coach.philosophy }}"</p>
        <div class="mt-4 inline-block bg-white/10 px-4 py-1 rounded-full text-sm">
          Experience: {{ coach.experience }}
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-2 px-2">
      <button v-for="cat in categories" :key="cat"
              @click="filter = cat"
              :class="['px-6 py-2 rounded-full font-bold transition-all', 
                       filter === cat ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-100']">
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      <div v-for="player in filteredPlayers" :key="player.id" 
           class="group bg-white rounded-xl shadow-lg overflow-hidden relative hover:-translate-y-2 transition-transform duration-300">
        
        <div class="absolute top-0 right-2 text-9xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors select-none z-0">
          {{ player.number }}
        </div>

        <div class="relative z-10 p-6 flex flex-col items-center">
          <div class="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden mb-4">
            <img :src="player.image" :alt="player.name" class="w-full h-full object-cover">
          </div>
          
          <h3 class="text-2xl font-bold text-accent text-center mb-1">{{ player.name }}</h3>
          <div class="bg-secondary text-white px-3 py-1 rounded text-sm font-bold uppercase mb-4">
            {{ player.position }}
          </div>

          <div class="grid grid-cols-2 gap-4 w-full font-sans text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
            <div class="text-center">
              <div class="font-bold text-primary">Height</div>
              <div>{{ player.height }}</div>
            </div>
            <div class="text-center border-l border-gray-200">
              <div class="font-bold text-primary">Spike</div>
              <div>{{ player.spike }}</div>
            </div>
          </div>
        </div>

        <div class="h-2 bg-primary w-full"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
