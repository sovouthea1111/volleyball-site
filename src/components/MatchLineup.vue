<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  match: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const lineup = [
  {
    pos: 4,
    name: 'Alex "The Hawk"',
    role: "Outside Hitter",
    number: 7,
    color: "bg-blue-500",
  },
  {
    pos: 3,
    name: "David Miller",
    role: "Middle Blocker",
    number: 5,
    color: "bg-green-500",
  },
  {
    pos: 2,
    name: "Sarah Connor",
    role: "Opposite",
    number: 10,
    color: "bg-purple-500",
  },
  {
    pos: 5,
    name: 'Tom "Wall"',
    role: "Libero",
    number: 3,
    color: "bg-yellow-500",
  },
  {
    pos: 6,
    name: "Chris Evans",
    role: "Middle Blocker",
    number: 18,
    color: "bg-green-500",
  },
  {
    pos: 1,
    name: "Marcus Chen",
    role: "Setter",
    number: 12,
    color: "bg-red-500",
  },
];

const getPlayerAt = (p) => lineup.find((player) => player.pos === p);
</script>

<template>
  <div
    class="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-2 md:p-4 overflow-y-auto"
  >
    <div
      class="w-full max-w-4xl flex justify-between items-center mb-4 md:mb-8 text-white"
    >
      <div>
        <h2 class="text-2xl md:text-3xl font-bold font-oswald text-primary">
          STARTING LINEUP
        </h2>
        <p class="text-lg md:text-xl text-gray-300">vs {{ match.opponent }}</p>
      </div>
      <button
        @click="$emit('close')"
        class="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div
      class="relative w-full max-w-4xl aspect-[1/1.6] md:aspect-[1.8/1] bg-orange-600 rounded-lg shadow-2xl border-4 border-white overflow-hidden p-2 md:p-8"
    >
      <div
        class="absolute inset-2 md:inset-4 border-2 md:border-4 border-white/80"
      ></div>

      <div
        class="absolute bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)] top-1/2 left-2 right-2 h-1 -translate-y-1/2 md:top-4 md:bottom-4 md:left-1/2 md:w-1 md:h-auto md:-translate-y-0 md:-translate-x-1/2"
      ></div>

      <div
        class="absolute bg-white/40 top-[33.3%] left-2 right-2 h-1 md:top-4 md:bottom-4 md:left-[33.3%] md:w-1 md:h-auto"
      ></div>
      <div
        class="absolute bg-white/40 top-[66.6%] left-2 right-2 h-1 md:top-4 md:bottom-4 md:right-[33.3%] md:w-1 md:h-auto md:left-auto"
      ></div>

      <div
        class="absolute p-2 md:p-8 grid gap-2 md:gap-4 inset-x-2 bottom-2 top-1/2 grid-cols-3 grid-rows-2 md:inset-y-4 md:left-4 md:right-1/2 md:top-4 md:bottom-4 md:grid-cols-2 md:grid-rows-3"
      >
        <div
          class="relative flex flex-col items-center justify-center group cursor-pointer col-start-1 row-start-1 md:col-start-2 md:row-start-1"
        >
          <div
            :class="[
              'w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-xl relative',
              getPlayerAt(4).color,
            ]"
          >
            {{ getPlayerAt(4).number }}
            <span
              class="absolute -top-8 text-xs font-bold bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 hidden md:block"
              >{{ getPlayerAt(4).role }}</span
            >
          </div>
          <div
            class="text-white font-bold text-[10px] md:text-sm mt-1 text-center bg-black/30 px-2 rounded truncate max-w-full"
          >
            {{ getPlayerAt(4).name }}
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center group cursor-pointer col-start-2 row-start-1 md:col-start-2 md:row-start-2"
        >
          <div
            :class="[
              'w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-xl relative',
              getPlayerAt(3).color,
            ]"
          >
            {{ getPlayerAt(3).number }}
            <span
              class="absolute -top-8 text-xs font-bold bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 hidden md:block"
              >{{ getPlayerAt(3).role }}</span
            >
          </div>
          <div
            class="text-white font-bold text-[10px] md:text-sm mt-1 text-center bg-black/30 px-2 rounded truncate max-w-full"
          >
            {{ getPlayerAt(3).name }}
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center group cursor-pointer col-start-3 row-start-1 md:col-start-2 md:row-start-3"
        >
          <div
            :class="[
              'w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-xl relative',
              getPlayerAt(2).color,
            ]"
          >
            {{ getPlayerAt(2).number }}
            <span
              class="absolute -top-8 text-xs font-bold bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 hidden md:block"
              >{{ getPlayerAt(2).role }}</span
            >
          </div>
          <div
            class="text-white font-bold text-[10px] md:text-sm mt-1 text-center bg-black/30 px-2 rounded truncate max-w-full"
          >
            {{ getPlayerAt(2).name }}
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center group cursor-pointer col-start-1 row-start-2 md:col-start-1 md:row-start-1"
        >
          <div
            :class="[
              'w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-xl relative',
              getPlayerAt(5).color,
            ]"
          >
            {{ getPlayerAt(5).number }}
            <span
              class="absolute -top-8 text-xs font-bold bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 hidden md:block"
              >{{ getPlayerAt(5).role }}</span
            >
          </div>
          <div
            class="text-white font-bold text-[10px] md:text-sm mt-1 text-center bg-black/30 px-2 rounded truncate max-w-full"
          >
            {{ getPlayerAt(5).name }}
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center group cursor-pointer col-start-2 row-start-2 md:col-start-1 md:row-start-2"
        >
          <div
            :class="[
              'w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-xl relative',
              getPlayerAt(6).color,
            ]"
          >
            {{ getPlayerAt(6).number }}
            <span
              class="absolute -top-8 text-xs font-bold bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 hidden md:block"
              >{{ getPlayerAt(6).role }}</span
            >
          </div>
          <div
            class="text-white font-bold text-[10px] md:text-sm mt-1 text-center bg-black/30 px-2 rounded truncate max-w-full"
          >
            {{ getPlayerAt(6).name }}
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center group cursor-pointer col-start-3 row-start-2 md:col-start-1 md:row-start-3"
        >
          <div
            :class="[
              'w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-xl relative',
              getPlayerAt(1).color,
            ]"
          >
            {{ getPlayerAt(1).number }}
            <span
              class="absolute -top-8 text-xs font-bold bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 hidden md:block"
              >{{ getPlayerAt(1).role }}</span
            >
          </div>
          <div
            class="text-white font-bold text-[10px] md:text-sm mt-1 text-center bg-black/30 px-2 rounded truncate max-w-full"
          >
            {{ getPlayerAt(1).name }}
          </div>
        </div>
      </div>

      <div
        class="absolute flex items-center justify-center bg-black/10 inset-x-2 top-2 bottom-1/2 md:inset-y-4 md:right-4 md:left-1/2 md:top-4 md:bottom-4"
      >
        <div
          class="text-white/20 font-bold text-2xl md:text-4xl tracking-widest rotate-0 md:rotate-90"
        >
          OPPONENT
        </div>
      </div>
    </div>

    <div class="flex gap-2 md:gap-4 mt-4 md:mt-8 flex-wrap justify-center">
      <div
        class="flex items-center gap-1 md:gap-2 text-white text-xs md:text-base"
      >
        <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500"></span>
        Outside
      </div>
      <div
        class="flex items-center gap-1 md:gap-2 text-white text-xs md:text-base"
      >
        <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></span>
        Middle
      </div>
      <div
        class="flex items-center gap-1 md:gap-2 text-white text-xs md:text-base"
      >
        <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500"></span>
        Opposite
      </div>
      <div
        class="flex items-center gap-1 md:gap-2 text-white text-xs md:text-base"
      >
        <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></span>
        Setter
      </div>
      <div
        class="flex items-center gap-1 md:gap-2 text-white text-xs md:text-base"
      >
        <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></span>
        Libero
      </div>
    </div>
  </div>
</template>
