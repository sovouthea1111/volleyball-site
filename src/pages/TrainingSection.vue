<script setup>
import { ref } from 'vue';

const selectedSession = ref(null);

const schedule = ref([
  { 
    day: 'Monday', 
    time: '18:00 - 20:00', 
    focus: 'Conditioning & Strength', 
    location: 'City Gym',
    details: 'Focus on core strength, plyometrics, and endurance. Bring your running shoes and water bottle. We will start with a 20-minute jog followed by circuit training.',
    coach: 'Coach Mike'
  },
  { 
    day: 'Wednesday', 
    time: '18:30 - 21:00', 
    focus: 'Technical Skills & Drills', 
    location: 'City Gym',
    details: 'Drills for passing, setting, and hitting. We will break into groups based on position. Special attention to defensive formations.',
    coach: 'Coach Sarah'
  },
  { 
    day: 'Friday', 
    time: '19:00 - 21:00', 
    focus: 'Tactical Play & Scrimmage', 
    location: 'Riverside Court',
    details: '6v6 practice matches. Applying strategies learned during the week. Analysis of previous game footage before starting.',
    coach: 'Head Coach Hoeun'
  },
  { 
    day: 'Saturday', 
    time: '14:00 - 17:00', 
    focus: 'Friendly Match', 
    location: 'Home Court / Away',
    details: 'Weekly friendly match against local teams. Great opportunity to test new lineups and strategies in a real game environment.',
    coach: 'Coaching Staff'
  },
  { 
    day: 'Sunday', 
    time: '10:00 - 13:00', 
    focus: 'Team Building & Review', 
    location: 'Clubhouse',
    details: 'Team breakfast followed by video analysis session. Open discussion on team dynamics and mental preparation.',
    coach: 'All Staff'
  },
]);

const openSessionDetails = (session) => {
  selectedSession.value = session;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeSessionDetails = () => {
  selectedSession.value = null;
  document.body.style.overflow = ''; // Restore scrolling
};

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
             class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 cursor-pointer hover:-translate-y-1 relative group"
             :class="index % 2 === 0 ? 'border-primary' : 'border-secondary'"
             @click="openSessionDetails(session)">
             <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
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
          <div class="mt-4 text-center text-xs text-secondary font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Click for details
          </div>
        </div>
      </div>
    </div>

    <!-- Session Details Modal -->
    <div v-if="selectedSession" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" @click.self="closeSessionDetails">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">
        <!-- Header -->
        <div class="bg-primary text-white p-6 relative">
          <button @click="closeSessionDetails" class="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <h3 class="text-3xl font-bold">{{ selectedSession.day }} Training</h3>
          <div class="flex flex-wrap items-center gap-3 mt-2 text-primary-100 font-sans">
             <span class="bg-white/20 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               {{ selectedSession.time }}
             </span>
             <span class="flex items-center gap-1">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               {{ selectedSession.location }}
             </span>
          </div>
        </div>
        <!-- Body -->
        <div class="p-8">
           <div class="mb-6">
             <div class="text-xs uppercase text-gray-500 font-bold mb-1 tracking-wider">Focus Area</div>
             <div class="text-2xl font-bold text-primary">{{ selectedSession.focus }}</div>
           </div>
           
           <div class="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
             <div class="text-xs uppercase text-gray-500 font-bold mb-2 tracking-wider">Session Plan</div>
             <p class="text-gray-700 leading-relaxed font-sans">{{ selectedSession.details }}</p>
           </div>
           
           <div class="flex items-center gap-4 pt-2">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">👤</div>
              <div>
                <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">Lead Coach</div>
                <div class="font-bold text-xl text-secondary">{{ selectedSession.coach }}</div>
              </div>
           </div>
        </div>
        <!-- Footer -->
        <div class="bg-gray-50 p-4 text-center border-t border-gray-100">
          <button @click="closeSessionDetails" class="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all">
            Got it
          </button>
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
