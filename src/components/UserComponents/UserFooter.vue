<script setup>

</script>

<template>
  <!--Footer-->
  <footer class="">

    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10">

        <!-- Brand -->
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center gap-2  font-semibold text-lg">
            <img class="h-8 w-auto" src="/img/dk_logo.png" alt="">
          </div>
          <p class="text-sm leading-relaxed  max-w-sm">
            險育判諤ｧ縺ｨ遒ｺ縺九↑謚陦薙↓蝓ｺ縺･縺丞ｻｺ險ｭ繧帝壹§縺ｦ縲√ｈ繧願憶縺・悴譚･縺ｨ萓｡蛟､縺ゅｋ遉ｾ莨壹ｒ蜑ｵ騾縺励∪縺・
          </p>

          <!-- Social icons -->
          <div class="flex gap-4 pt-2">
            <a v-for="icon in icons" :key="icon.name" href="#" class="hover:text-blue-300">
              <component :is="icon.component" class="w-5 h-5"/>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-800 mt-12 pt-6 text-sm ">
        ﾂｩ 2026 Your Company, Inc. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
