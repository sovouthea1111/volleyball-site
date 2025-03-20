<script setup>
import {Icon} from '@iconify/vue';
import {ref} from "vue";
import MenuItem from "@/components/MenuItem.vue";

const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <footer class="bg-gray-900 text-gray-300 py-10">
    <div class="container mx-auto px-6">
      <div class="w-full flex flex-row max-sm:flex-col md:flex-row justify-between items-start">
        <div class="w-full flex flex-col items-center justify-center text-center md:text-left mb-6 md:mb-0">
          <h2 class="text-2xl font-semibold text-white mb-2 font-oswald">
            Angry Bird Volleyball Team
          </h2>
          <p class="text-gray-400 font-normal font-oswald">
            Our volleyball team is a dedicated group of athletes who share a passion for the sport and a commitment to
            achieving excellence. We focus on fostering teamwork, improving individual skills, and promoting
            sportsmanship both during practices and matches. Through hard work and collaboration, we aim to develop a
            strong sense of unity and discipline, while always maintaining a positive attitude and respect for the game,
            our opponents, and our teammates.
          </p>
        </div>
        <div class="w-full flex flex-col justify-center items-center mb-6 md:mb-0">
          <h3 class="text-lg font-semibold text-white mb-2 font-oswald  max-sm:text-center">Quick Links</h3>
          <MenuItem text-color="text-white"/>
        </div>
        <div class="w-full justify-center items-center">
          <h3 class="flex text-lg font-semibold justify-center text-white mb-2 font-oswald max-sm:text-center">Follow
            Me</h3>
          <div class="flex flex-row justify-center space-x-4">
            <a href="https://github.com/sovouthea1111" target="_blank" class="hover:text-blue-400 transition-colors">
              <Icon icon="brandico:github" class="text-2xl"/>
              <span class="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sovouthea-hoeun-b13966263/" target="_blank"
               class="hover:text-blue-400 transition-colors">
              <Icon icon="akar-icons:linkedin-fill" class="text-2xl"/>
              <span class="sr-only">LinkedIn</span>
            </a>
            <a href="" target="_blank"
               class="hover:text-blue-400 transition-colors">
              <Icon icon="ri:facebook-fill" class="text-2xl"/>
              <span class="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {{ currentYear }} AngryBirdVolleyballTeam. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>