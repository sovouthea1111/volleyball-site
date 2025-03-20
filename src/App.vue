<script setup lang="ts">
import HeaderSection from "@/layout/HeaderSection.vue";
import FooterSection from "@/layout/FooterSection.vue";
import ContactSection from "@/pages/ContactSection.vue";
import AboutUs from "@/pages/AboutUs.vue";
import MatchSection from "@/pages/MatchSection.vue";
import TeamSection from "@/pages/TeamSection.vue";
import TrainingSection from "@/pages/TrainingSection.vue";

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
  </div>
</template>
<style>
.content {
  scroll-margin-top: 5rem;
}
</style>