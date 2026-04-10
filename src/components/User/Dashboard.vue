<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import BaseSidebar from "../UserComponents/SidebarUser.vue";

const dateTime = ref("")

let timer = null

const updateTime = () => {
  const now = new Date()

  const date = now.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })

  const time = now.toLocaleTimeString("en-US")

  dateTime.value = `${date} - ${time}`
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="flex h-full">

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div class="mb-8 flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Welcome to the Civil Engineering Dashboard</h1>
          <p class="text-gray-500 mt-1">Track daily site activities, inspections, and construction progress in one place.</p>
        </div>
        <div class="hidden sm:block px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-600 border border-gray-200">
          {{dateTime}}
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

        <div class="flex justify-between items-start mb-6">
          <h2 class="text-xl font-bold text-gray-800 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            Field Notes and Engineering Updates
          </h2>
          <span class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-100">Latest Briefing</span>
        </div>

        <div class="space-y-4">
          <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
            <span class="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full mr-4"></span>
            <div>
              <p class="text-sm font-semibold text-gray-900">Safety Coordination Meeting</p>
              <p class="text-sm text-gray-600 mt-1">Daily toolbox talk starts at 14:00 with all site teams. Focus areas are heavy equipment movement, pedestrian routing, and weather-related risk controls.</p>
            </div>
          </div>
          <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
            <span class="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-500 rounded-full mr-4"></span>
            <div>
              <p class="text-sm font-semibold text-gray-900">Bridge Deck Concrete Placement</p>
              <p class="text-sm text-gray-600 mt-1">Zone B casting reached target volume and passed slump checks. Zone A rebar alignment correction is scheduled before the next pour cycle.</p>
            </div>
          </div>
          <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
            <span class="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-4"></span>
            <div>
              <p class="text-sm font-semibold text-gray-900">Equipment Maintenance Completed</p>
              <p class="text-sm text-gray-600 mt-1">Crane 02 routine maintenance is complete and operational checks are approved. The unit is now cleared for normal lifting operations.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md group">

        <a id="slider-link" href="#" class="block w-full h-full relative cursor-pointer">
          <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition duration-300 z-10 flex items-end p-8">
            <div>
              <span class="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide mb-2 inline-block">Featured Project Update</span>
              <h3 id="slider-title" class="text-2xl font-bold text-white drop-shadow-md">Takata Zone Earthwork Progress</h3>
              <p class="text-white text-sm mt-1 opacity-90 flex items-center">
                Open full report and current site visuals
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </p>
            </div>
          </div>

          <iframe loading="lazy"
                  style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                  src="https://www.canva.com/design/DAG0nukdNuc/JXjc5a4vdGCHn7Cc0Fcr1A/view?embed"
                  allow="fullscreen">
          </iframe>
        </a>

        <div class="absolute bottom-4 right-4 z-20 flex space-x-2">
          <button onclick="currentSlide(0)" class="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition"></button>
          <button onclick="currentSlide(1)" class="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition"></button>
          <button onclick="currentSlide(2)" class="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition"></button>
        </div>
      </div>
    </main>
    <BaseSidebar/>
  </div>
</template>

<style scoped>

</style>

