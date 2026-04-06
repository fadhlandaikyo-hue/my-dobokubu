<script setup>
const legend = [
  { color: '#3b82f6', label: '進行中 (51–100%)' },
  { color: '#facc15', label: '序盤 (26–50%)'    },
  { color: '#fb923c', label: '早期 (11–25%)'    },
  { color: '#f87171', label: '開始 (0–10%)'     },
]
</script>

<template>
  <div class="flex flex-wrap gap-5 mt-8 text-xs text-gray-500">
    <div
        v-for="item in legend"
        :key="item.label"
        class="flex items-center gap-1.5"
    >
      <span
          class="w-3 h-3 rounded-full inline-block flex-shrink-0"
          :style="{ backgroundColor: item.color }"
      />
      {{ item.label }}
    </div>
  </div>
</template>

<style scoped>

</style>