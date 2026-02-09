<script setup>
import { ref } from "vue";
import MatchLineup from "@/components/MatchLineup.vue";

const selectedMatch = ref(null);

const latestMatch = ref({
  opponent: "Thunder Spikers",
  date: "2023-10-15",
  score: { us: 3, them: 1 },
  sets: ["25-20", "22-25", "25-18", "25-22"],
  result: "WIN",
});

const upcomingMatches = ref([
  {
    opponent: "Block Busters",
    date: "Oct 22, 2023",
    time: "14:00",
    location: "City Arena",
    type: "League",
  },
  {
    opponent: "Net Ninjas",
    date: "Oct 29, 2023",
    time: "16:30",
    location: "Home Court",
    type: "Friendly",
  },
  {
    opponent: "Sky High VC",
    date: "Nov 05, 2023",
    time: "10:00",
    location: "Riverside Gym",
    type: "Tournament",
  },
]);

const standings = ref([
  { rank: 1, team: "Angry Bird Team", played: 10, won: 9, lost: 1, points: 27 },
  { rank: 2, team: "Thunder Spikers", played: 10, won: 8, lost: 2, points: 24 },
  { rank: 3, team: "Block Busters", played: 10, won: 6, lost: 4, points: 18 },
  { rank: 4, team: "Net Ninjas", played: 10, won: 4, lost: 6, points: 12 },
]);
</script>

<template>
  <div class="font-oswald flex flex-col gap-10 mb-10 text-accent">
    <div
      class="bg-gray-900 text-white p-6 md:p-10 rounded-xl shadow-2xl relative overflow-hidden mx-2 md:mx-0"
    >
      <div
        class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"
      ></div>

      <div
        class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div class="text-center flex-1">
          <div class="text-3xl md:text-4xl font-bold text-primary mb-2">
            Angry Birds
          </div>
          <div
            class="text-6xl md:text-8xl font-bold font-mono bg-black/50 rounded-lg p-4 inline-block border-2 border-primary/30 text-secondary shadow-[0_0_15px_rgba(63,212,173,0.5)]"
          >
            {{ latestMatch.score.us }}
          </div>
        </div>

        <div class="flex flex-col items-center gap-4">
          <div class="text-2xl font-bold text-gray-400">VS</div>
          <div class="flex gap-2 text-sm md:text-base font-mono text-gray-300">
            <span
              v-for="(set, idx) in latestMatch.sets"
              :key="idx"
              class="bg-gray-800 px-2 py-1 rounded"
            >
              {{ set }}
            </span>
          </div>
          <div
            class="bg-secondary text-accent font-bold px-6 py-1 rounded-full uppercase tracking-wider animate-pulse"
          >
            {{ latestMatch.result }}
          </div>
        </div>

        <div class="text-center flex-1">
          <div class="text-3xl md:text-4xl font-bold text-gray-300 mb-2">
            {{ latestMatch.opponent }}
          </div>
          <div
            class="text-6xl md:text-8xl font-bold font-mono bg-black/50 rounded-lg p-4 inline-block border-2 border-gray-700 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
          >
            {{ latestMatch.score.them }}
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 md:px-0">
      <div class="lg:col-span-2">
        <h3
          class="text-3xl text-primary font-bold mb-6 flex items-center gap-2"
        >
          <span class="inline-block w-2 h-8 bg-secondary rounded-full"></span>
          Upcoming Fixtures
        </h3>
        <div class="space-y-4">
          <div
            v-for="(match, index) in upcomingMatches"
            :key="index"
            @click="selectedMatch = match"
            class="bg-white p-5 rounded-lg shadow-md border-l-4 border-primary flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-lg transition-all hover:translate-x-2 cursor-pointer group"
          >
            <div
              class="flex flex-col items-center md:items-start min-w-[100px]"
            >
              <div class="text-2xl font-bold text-gray-800">
                {{ match.date.split(",")[0] }}
              </div>
              <div class="text-sm text-gray-500 font-sans">
                {{ match.date.split(",")[1] }}
              </div>
            </div>

            <div class="flex-1 text-center md:text-left">
              <div
                class="text-sm text-secondary font-bold uppercase tracking-wide mb-1"
              >
                {{ match.type }}
              </div>
              <div
                class="text-xl font-bold group-hover:text-primary transition-colors"
              >
                vs {{ match.opponent }}
              </div>
              <div
                class="text-gray-500 font-sans flex items-center justify-center md:justify-start gap-1"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                {{ match.location }}
              </div>
            </div>

            <div
              class="text-2xl font-mono bg-gray-100 px-4 py-2 rounded text-gray-700 group-hover:bg-primary group-hover:text-white transition-colors"
            >
              {{ match.time }}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3
          class="text-3xl text-primary font-bold mb-6 flex items-center gap-2"
        >
          <span class="inline-block w-2 h-8 bg-secondary rounded-full"></span>
          Standings
        </h3>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <table class="w-full text-left">
            <thead class="bg-primary text-white">
              <tr>
                <th class="p-3 text-center">#</th>
                <th class="p-3">Team</th>
                <th class="p-3 text-center">P</th>
                <th class="p-3 text-center font-bold">Pts</th>
              </tr>
            </thead>
            <tbody class="font-sans">
              <tr
                v-for="team in standings"
                :key="team.rank"
                :class="{
                  'bg-secondary/10 font-bold': team.team === 'Angry Bird Team',
                  'border-b': true,
                }"
              >
                <td class="p-3 text-center">{{ team.rank }}</td>
                <td class="p-3">{{ team.team }}</td>
                <td class="p-3 text-center text-gray-500">{{ team.played }}</td>
                <td class="p-3 text-center font-bold text-primary">
                  {{ team.points }}
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="p-3 text-center text-sm text-gray-500 font-sans border-t bg-gray-50"
          >
            View Full Table →
          </div>
        </div>
      </div>
    </div>
    <MatchLineup
      v-if="selectedMatch"
      :match="selectedMatch"
      @close="selectedMatch = null"
    />
  </div>
</template>

<style scoped></style>
