<script setup lang="ts">
import {ref, onMounted, watch, nextTick} from 'vue';
import {useRoute} from 'vue-router';

const props = defineProps({
  cssWrapper: {
    type: String,
    default: "space-x-4"
  },
  textColor: {
    type: String,
    default: "text-black"
  },
});

const menuItems = [
  {id: "home", label: "Home"},
  {id: "about-us", label: "About Us"},
  {id: "match", label: "Match"},
  {id: "team", label: "Team"},
  {id: "training", label: "Training"},
  {id: "gallery", label: "Gallery"},
  {id: "blog", label: "News"},
];

const route = useRoute();
const activeSection = ref<string | null>(route.hash.replace('#', '') || null);

const isActive = (id: string) => activeSection.value === id;

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({behavior: "smooth", block: "start"});
    window.history.pushState(null, "", `#${id}`);
    setTimeout(() => {
      updateActiveSection();
    }, 500);
  }
};

const updateActiveSection = () => {
  const scrollPosition = window.scrollY;
  const sections = menuItems.map(item => document.getElementById(item.id));

  for (const section of sections) {
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top + window.scrollY <= scrollPosition && rect.bottom + window.scrollY > scrollPosition) {
        activeSection.value = section.id;
        return;
      }
    }
  }
  activeSection.value = null;
};

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  nextTick(() => {
    updateActiveSection();
  });
});

watch(() => route.hash, (newHash) => {
  const id = newHash.replace('#', '');
  if (id) {
    scrollToSection(id);
  }
});
</script>

<template>
  <header>
    <nav>
      <ul class="border-0 flex" :class="props.cssWrapper">
        <li v-for="(routeItem, index) in menuItems" :key="index">
          <a
              href="javascript:void(0);"
              @click="scrollToSection(routeItem.id)"
              :class="{
                'text-primary': isActive(routeItem.id),
                [props.textColor]: !isActive(routeItem.id),
                'font-oswald': true,
                'font-normal': true,
                'hover:text-primary': true
              }"
          >
            {{ routeItem.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Scoped styles for additional customization if needed */
</style>
