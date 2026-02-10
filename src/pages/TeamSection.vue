<script setup>
import { ref, computed } from 'vue';

const filter = ref('All');
const selectedPlayer = ref(null);
const categories = ['All', 'Outside Hitter', 'Opposite Hitter', 'Middle Blocker', 'Setter', 'Libero'];

const players = ref([
  { 
    id: 1, 
    name: 'Alex "The Hawk" Johnson', 
    number: 7, 
    position: 'Outside Hitter', 
    height: '192cm', 
    spike: '340cm', 
    image: 'https://loremflickr.com/300/300/volleyball,player?random=1',
    bio: 'Known for explosive power and precision. Alex has been playing since high school and was MVP of the regional finals last year.',
    nationality: 'USA',
    age: 24,
    stats: { attack: 92, defense: 78, serve: 85 }
  },
  { 
    id: 2, 
    name: 'Marcus Chen', 
    number: 12, 
    position: 'Setter', 
    height: '185cm', 
    spike: '320cm', 
    image: 'https://loremflickr.com/300/300/volleyball,player?random=2',
    bio: 'The tactical brain of the team. Marcus reads the game like a book and delivers perfect sets even from difficult positions.',
    nationality: 'Canada',
    age: 22,
    stats: { attack: 65, defense: 80, serve: 88 }
  },
  { 
    id: 3, 
    name: 'David Miller', 
    number: 5, 
    position: 'Middle Blocker', 
    height: '201cm', 
    spike: '350cm', 
    image: 'https://loremflickr.com/300/300/volleyball,player?random=3',
    bio: 'A towering presence at the net. David leads the league in blocks per set and is a nightmare for opposing attackers.',
    nationality: 'UK',
    age: 26,
    stats: { attack: 85, defense: 95, serve: 70 }
  },
  { 
    id: 4, 
    name: 'Sarah Connor', 
    number: 10, 
    position: 'Opposite Hitter', 
    height: '188cm', 
    spike: '315cm', 
    image: 'https://loremflickr.com/300/300/volleyball,player?random=4',
    bio: 'Left-handed powerhouse with a wicked serve. Sarah specializes in clutch plays during tight sets.',
    nationality: 'Australia',
    age: 23,
    stats: { attack: 88, defense: 75, serve: 90 }
  },
  { 
    id: 5, 
    name: 'Tom "Wall" Baker', 
    number: 3, 
    position: 'Libero', 
    height: '175cm', 
    spike: '290cm', 
    image: 'https://loremflickr.com/300/300/volleyball,player?random=5',
    bio: 'Nothing hits the floor when Tom is around. His reflexes are cat-like and he commands the back court defense.',
    nationality: 'USA',
    age: 21,
    stats: { attack: 40, defense: 98, serve: 60 }
  },
  { 
    id: 6, 
    name: 'Chris Evans', 
    number: 18, 
    position: 'Middle Blocker', 
    height: '198cm', 
    spike: '345cm', 
    image: 'https://loremflickr.com/300/300/volleyball,player?random=6',
    bio: 'Fast and versatile. Chris can hit quick attacks and slide blocks that confuse the opponent\'s defense.',
    nationality: 'Germany',
    age: 25,
    stats: { attack: 82, defense: 88, serve: 75 }
  },
]);

const coach = {
  name: 'Hoeun sovouthea',
  role: 'Head Coach',
  experience: '1 Year',
  philosophy: 'Hard work beats talent when talent doesn\'t work hard.',
  image: '/Coach.JPG'
};

const openPlayerDetails = (player) => {
  selectedPlayer.value = player;
  document.body.style.overflow = 'hidden';
};

const closePlayerDetails = () => {
  selectedPlayer.value = null;
  document.body.style.overflow = '';
};

const filteredPlayers = computed(() => {
  if (filter.value === 'All') return players.value;
  return players.value.filter(p => p.position === filter.value);
});
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    
    <div class="text-center px-4">
      <h2 class="text-4xl text-primary font-bold mb-4">Our Volleyball Team</h2>
      <p class="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
        Meet the talented athletes and dedicated coaching staff behind our success.
      </p>
    </div>

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

    <div class="px-4">
      <h3 class="text-3xl font-bold mb-6 border-b-4 border-secondary inline-block pb-1">Spike Squad Roster</h3>
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
           class="group bg-white rounded-xl shadow-lg overflow-hidden relative hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
           @click="openPlayerDetails(player)">
        
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

          <div class="mt-4 text-center text-xs text-secondary font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
             Click for full bio
          </div>
        </div>

        <div class="h-2 bg-primary w-full"></div>
      </div>
    </div>

    <!-- Player Details Modal -->
    <div v-if="selectedPlayer" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" @click.self="closePlayerDetails">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all scale-100 flex flex-col md:flex-row">
        
        <!-- Image Side -->
        <div class="w-full md:w-1/3 bg-gray-100 relative min-h-[200px] md:min-h-full">
           <img :src="selectedPlayer.image" class="absolute inset-0 w-full h-full object-cover" :alt="selectedPlayer.name">
           <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
             <div class="text-6xl font-bold opacity-30 absolute top-2 right-2">{{ selectedPlayer.number }}</div>
             <div class="relative z-10">
               <div class="font-bold text-lg">{{ selectedPlayer.nationality }}</div>
               <div class="text-sm opacity-80">Age: {{ selectedPlayer.age }}</div>
             </div>
           </div>
        </div>

        <!-- Content Side -->
        <div class="w-full md:w-2/3 p-8 relative">
           <button @click="closePlayerDetails" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div class="mb-6">
            <span class="bg-secondary text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{{ selectedPlayer.position }}</span>
            <h3 class="text-3xl font-bold text-primary mt-2">{{ selectedPlayer.name }}</h3>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Bio</h4>
            <p class="text-gray-600 font-sans leading-relaxed">
              {{ selectedPlayer.bio }}
            </p>
          </div>

          <div class="mb-6">
             <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Stats</h4>
             <div class="space-y-3 font-sans">
               <div>
                 <div class="flex justify-between text-sm mb-1">
                   <span>Attack</span>
                   <span class="font-bold">{{ selectedPlayer.stats.attack }}%</span>
                 </div>
                 <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                   <div class="h-full bg-primary" :style="{ width: selectedPlayer.stats.attack + '%' }"></div>
                 </div>
               </div>
               <div>
                 <div class="flex justify-between text-sm mb-1">
                   <span>Defense</span>
                   <span class="font-bold">{{ selectedPlayer.stats.defense }}%</span>
                 </div>
                 <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                   <div class="h-full bg-secondary" :style="{ width: selectedPlayer.stats.defense + '%' }"></div>
                 </div>
               </div>
               <div>
                 <div class="flex justify-between text-sm mb-1">
                   <span>Serve</span>
                   <span class="font-bold">{{ selectedPlayer.stats.serve }}%</span>
                 </div>
                 <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                   <div class="h-full bg-primary" :style="{ width: selectedPlayer.stats.serve + '%' }"></div>
                 </div>
               </div>
             </div>
          </div>
          
          <div class="flex gap-4 pt-4 border-t border-gray-100">
             <div class="text-center">
               <div class="text-xs text-gray-500 font-bold uppercase">Height</div>
               <div class="font-bold text-xl text-primary">{{ selectedPlayer.height }}</div>
             </div>
             <div class="text-center pl-4 border-l border-gray-200">
               <div class="text-xs text-gray-500 font-bold uppercase">Spike</div>
               <div class="font-bold text-xl text-primary">{{ selectedPlayer.spike }}</div>
             </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
