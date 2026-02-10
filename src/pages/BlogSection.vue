<script setup>
import { ref } from 'vue';

const posts = ref([
  {
    title: 'Victory Against Thunder Spikers',
    date: 'Oct 16, 2023',
    excerpt: 'It was a tough match, but our team showed incredible resilience to come back from 0-2 down.',
    content: `
      <p class="mb-4">It was a tough match, but our team showed incredible resilience to come back from 0-2 down to win 3-2 against the Thunder Spikers. The energy in the stadium was electric as our fans cheered us on through every point.</p>
      <p class="mb-4">Key highlights included:</p>
      <ul class="list-disc pl-5 mb-4">
        <li>Captain's decisive blocks in the 3rd set.</li>
        <li>Incredible saves by our libero that kept the ball alive.</li>
        <li>A winning streak of 5 points in the final tie-breaker.</li>
      </ul>
      <p>This victory secures our spot in the upcoming regional championship. We will continue to train hard and prepare for the next challenge!</p>
    `,
    image: 'https://loremflickr.com/400/250/volleyball,victory?random=1'
  },
  {
    title: 'New Training Equipment Arrived',
    date: 'Oct 10, 2023',
    excerpt: 'We just upgraded our gym with state-of-the-art weights and resistance bands.',
    content: `
      <p class="mb-4">We just upgraded our gym with state-of-the-art weights, resistance bands, and a new vertical jump measurement system. This investment is part of our commitment to player development and injury prevention.</p>
      <p class="mb-4">The new equipment includes:</p>
      <ul class="list-disc pl-5 mb-4">
        <li>Olympic weightlifting platforms.</li>
        <li>High-velocity resistance bands for explosive power training.</li>
        <li>Advanced recovery tools like foam rollers and massage guns.</li>
      </ul>
      <p>Our players are excited to integrate these tools into their daily routines.</p>
    `,
    image: 'https://loremflickr.com/400/250/gym,equipment?random=2'
  },
  {
    title: 'Community Volleyball Workshop',
    date: 'Sep 28, 2023',
    excerpt: 'Teaching the next generation of spikers! Our weekend workshop was a huge success.',
    content: `
      <p class="mb-4">Teaching the next generation of spikers! Our weekend workshop was a huge success, with over 50 kids participating in drills, games, and fun activities.</p>
      <p class="mb-4">The workshop covered:</p>
      <ul class="list-disc pl-5 mb-4">
        <li>Basic serving and passing techniques.</li>
        <li>Teamwork and communication on the court.</li>
        <li>Mini-matches to practice new skills.</li>
      </ul>
      <p>We are grateful to all the parents and volunteers who made this event possible. Stay tuned for our next community event!</p>
    `,
    image: 'https://loremflickr.com/400/250/volleyball,kids?random=3'
  }
]);

const selectedPost = ref(null);

const openPost = (post) => {
  selectedPost.value = post;
  document.body.style.overflow = 'hidden';
};

const closePost = () => {
  selectedPost.value = null;
  document.body.style.overflow = '';
};
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    <div class="text-center">
      <h2 class="text-4xl text-primary font-bold mb-4">Latest News</h2>
      <p class="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
        Stay updated with team announcements, match reports, and events.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div v-for="(post, index) in posts" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full" @click="openPost(post)">
        <div class="h-48 overflow-hidden shrink-0">
          <img :src="post.image" :alt="post.title" loading="lazy" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="text-sm text-secondary font-bold mb-2">{{ post.date }}</div>
          <h3 class="text-xl font-bold mb-2 text-primary">{{ post.title }}</h3>
          <p class="text-gray-600 font-sans text-sm line-clamp-3 mb-4 flex-grow">{{ post.excerpt }}</p>
          <button class="text-primary font-bold hover:underline mt-auto self-start" @click.stop="openPost(post)">Read More →</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="selectedPost" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" @click="closePost">
        <div class="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative" @click.stop>
          <button @click="closePost" class="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="relative h-64 md:h-80">
             <img :src="selectedPost.image" :alt="selectedPost.title" class="w-full h-full object-cover">
             <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <div class="text-secondary font-bold mb-2">{{ selectedPost.date }}</div>
                <h3 class="text-3xl md:text-4xl font-bold text-white">{{ selectedPost.title }}</h3>
             </div>
          </div>
          
          <div class="p-8 font-sans text-lg text-gray-700 leading-relaxed" v-html="selectedPost.content"></div>
          
          <div class="p-8 pt-0 border-t border-gray-100 mt-8 flex justify-end">
             <button @click="closePost" class="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-bold transition-colors">Close</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
