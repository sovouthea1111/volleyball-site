<script setup lang="ts">
import HeaderSection from "@/layout/HeaderSection.vue";
import FooterSection from "@/layout/FooterSection.vue";
import ContactSection from "@/pages/ContactSection.vue";
import AboutUs from "@/pages/AboutUs.vue";
import MatchSection from "@/pages/MatchSection.vue";
import TeamSection from "@/pages/TeamSection.vue";
import TrainingSection from "@/pages/TrainingSection.vue";
import { ref, onMounted, onUnmounted } from "vue";

const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <div class="relative">
    <HeaderSection/>
    <div class="px-6 flex flex-col gap-10 max-sm:gap-5">
      <AboutUs id="about-us"/>
      <MatchSection id="match"/>
      <TeamSection id="team"/>
      <TrainingSection id="training"/>
      <ContactSection id="contact-us"/>
    </div>
    <FooterSection/>

    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button
        v-if="showScrollButton"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>
  </div>
</template>
<style>
.content {
  scroll-margin-top: 5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>