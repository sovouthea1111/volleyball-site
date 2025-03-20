<script setup lang="ts">
import {ref, onMounted, nextTick} from 'vue';
import gsap from 'gsap';

const loading = ref(true);

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({behavior: "smooth", block: "start"});
    window.history.pushState(null, "", `#${id}`);
  }
};

onMounted(() => {
  setTimeout(async () => {
    loading.value = false;
    await nextTick();
    gsap.fromTo(
        '.fade-in-up',
        {opacity: 0, y: 20},
        {opacity: 1, y: 0, duration: 1, stagger: 0.2}
    );
  }, 2000);
});
</script>

<template>
  <div class="w-full h-[90vh] max-sm:h-auto flex flex-row max-sm:flex-col items-center gap-6 max-sm:my-4">
    <div class="w-[40%] max-sm:w-full h-full flex justify-center items-center">
      <div v-if="loading" class="skeleton w-[70%] h-[70%] max-sm:h-[85%] rounded-full"></div>
      <img v-else alt="voutheaProfile" src="@/assets/myProfile.png" class="w-[70%] h-auto rounded-full fade-in-up"/>
    </div>
    <div class="w-[60%] max-sm:w-full h-full flex flex-col justify-center font-oswald gap-2">
      <div v-if="loading" class="skeleton w-1/2 mb-2 h-[20px]"></div>
      <div v-else class="font-bold text-xl fade-in-up">About Me</div>

      <div v-if="loading" class="skeleton w-3/4 mb-2 h-[30px]"></div>
      <div v-else class="font-bold text-3xl fade-in-up">FullStack Developer</div>

      <div v-if="loading" class="skeleton w-full mb-4 h-[50px]"></div>
      <div v-else class="fade-in-up">
        A passionate developer with over 2 year of experience in Web Development. Resourceful expert at learning and
        developing websites based on many different business prototypes. Committed to strengthening development
        experience with positivity and professionalism in responding to requirements challenging with deadlines.
      </div>

      <div>
        <div v-if="loading" class="skeleton w-32 h-[40px]"></div>
        <button v-else class="btn bg-secondary text-white h-fit fade-in-up" @click="scrollToSection('experience')">
          Experience
        </button>
      </div>
    </div>
  </div>
</template>
