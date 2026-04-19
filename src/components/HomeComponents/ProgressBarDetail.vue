<script setup>
import { useProgressColor } from "../ContentHome/composables/useProgressColor.js"

// defineModel 竊・menerima angka progress langsung via v-model
// Tidak perlu prop 'project' sama sekali
const progress = defineModel({ type: Number, required: true })

const { progressColor } = useProgressColor()

// 笏笏 Drag logic (langsung di sini, tidak butuh composable terpisah) 笏笏
let trackEl = null

function calcProgress(clientX) {
  const rect  = trackEl.getBoundingClientRect()
  const ratio = (clientX - rect.left) / rect.width
  return Math.min(100, Math.max(0, Math.round(ratio * 100)))
}

function onMouseMove(e) {
  progress.value = calcProgress(e.clientX)
}

function onTouchMove(e) {
  e.preventDefault()
  progress.value = calcProgress(e.touches[0].clientX)
}

function onEnd() {
  trackEl = null
  window.removeEventListener('mousemove',  onMouseMove)
  window.removeEventListener('mouseup',    onEnd)
  window.removeEventListener('touchmove',  onTouchMove)
  window.removeEventListener('touchend',   onEnd)
}

function startDrag(event) {
  trackEl        = event.currentTarget
  const clientX  = event.touches ? event.touches[0].clientX : event.clientX
  progress.value = calcProgress(clientX)

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup',   onEnd)
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchend',  onEnd)
}
</script>

<template>
  <!-- Track -->
  <div
      class="progress-track"
      @mousedown="startDrag"
      @touchstart.prevent="startDrag"
  >
    <!-- Fill bar -->
    <div
        class="progress-fill"
        :style="{
        width: progress + '%',
        backgroundColor: progressColor(progress),
      }"
    />

    <!-- Thumb -->
    <div
        class="progress-thumb"
        :style="{
        left: progress + '%',
        backgroundColor: progressColor(progress),
      }"
    />
  </div>
</template>

<style scoped></style>
