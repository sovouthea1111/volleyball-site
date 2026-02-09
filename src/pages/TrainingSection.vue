<script setup>
import { ref } from 'vue';

const schedule = ref([
  { day: 'Monday', time: '18:00 - 20:00', focus: 'Conditioning & Strength', location: 'City Gym' },
  { day: 'Wednesday', time: '18:30 - 21:00', focus: 'Technical Skills & Drills', location: 'City Gym' },
  { day: 'Friday', time: '19:00 - 21:00', focus: 'Tactical Play & Scrimmage', location: 'Riverside Court' },
  { day: 'Sunday', time: '10:00 - 13:00', focus: 'Team Building & Review', location: 'Clubhouse' },
]);

const drills = ref([
  { title: 'Digging Accuracy', level: 'Intermediate', desc: 'Partner drills focusing on precise digging to the setter target.', intensity: 3 },
  { title: 'Spike Approach', level: 'Advanced', desc: 'Explosive jump training and arm swing mechanics optimization.', intensity: 5 },
  { title: 'Serving Pressure', level: 'All Levels', desc: 'Target practice serving under simulated match pressure.', intensity: 2 },
]);

const tipOfTheDay = ref({
  title: 'Communication is Key',
  content: 'Always call the ball early. A loud team is a confident team. "Mine!", "Out!", and "Help!" can save points.'
});
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    
    <div class="text-center px-4">
      <h2 class="text-4xl text-primary font-bold mb-4">Train Like a Champion</h2>
      <p class="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
        Champions are made when no one is watching. Join our rigorous training sessions to elevate your game.
      </p>
    </div>

    <div class="px-4">
      <h3 class="text-3xl font-bold mb-6 border-b-4 border-secondary inline-block pb-1">Weekly Schedule</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(session, index) in schedule" :key="index" 
             class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4"
             :class="index % 2 === 0 ? 'border-primary' : 'border-secondary'">
          <div class="text-2xl font-bold mb-2">{{ session.day }}</div>
          <div class="text-gray-500 font-sans font-bold mb-4 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {{ session.time }}
          </div>
          <div class="mb-2">
            <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded uppercase font-bold tracking-wide">Focus</span>
            <div class="mt-1 font-bold text-primary">{{ session.focus }}</div>
          </div>
          <div class="text-sm text-gray-500 font-sans flex items-center gap-1">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            {{ session.location }}
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
      <div class="lg:col-span-2">
        <h3 class="text-3xl font-bold mb-6 border-b-4 border-secondary inline-block pb-1">Focus Areas</h3>
        <div class="space-y-4">
          <div v-for="(drill, index) in drills" :key="index" 
               class="bg-white p-6 rounded-xl shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl shrink-0 text-primary">
              🏐
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <h4 class="text-xl font-bold">{{ drill.title }}</h4>
                <span class="text-xs bg-secondary text-white px-2 py-0.5 rounded-full font-bold">{{ drill.level }}</span>
              </div>
              <p class="text-gray-600 font-sans text-sm">{{ drill.desc }}</p>
            </div>
            <div class="flex flex-col items-center gap-1 min-w-[80px]">
              <div class="text-xs uppercase font-bold text-gray-400">Intensity</div>
              <div class="flex gap-1">
                <div v-for="n in 5" :key="n" 
                     class="w-2 h-6 rounded-full"
                     :class="n <= drill.intensity ? 'bg-red-500' : 'bg-gray-200'"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="bg-gradient-to-b from-primary to-purple-800 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div class="absolute -right-6 -bottom-6 text-9xl opacity-20 rotate-12">💡</div>
          <h3 class="text-2xl font-bold mb-4 relative z-10">Tip of the Day</h3>
          <div class="font-bold text-xl text-secondary mb-2 relative z-10">{{ tipOfTheDay.title }}</div>
          <p class="font-sans italic relative z-10 opacity-90">
            {{ tipOfTheDay.content }}
          </p>
        </div>

        <div class="mt-8 bg-gray-200 h-64 rounded-xl flex items-center justify-center relative overflow-hidden group">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&key=YOUR_API_KEY" alt="Map Placeholder" class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all">
          <div class="bg-white/80 p-4 rounded shadow-lg backdrop-blur-sm relative z-10 text-center">
            <div class="font-bold text-primary">Main Training Center</div>
            <div class="text-sm text-gray-600 font-sans">123 Volley St, Sports City</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
