<script setup>
import BaseSidebar from "../UserComponents/SidebarUser.vue";

</script>

<template>
  <!-- Main ContentHome -->
  <div class="flex h-full">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="md:flex md:items-center md:justify-between mb-8">
        <div class=" flex items-center">
          <RouterLink to="/dashboard"
                      class="mr-4 p-2 bg-white rounded-full text-gray-500 hover:text-blue-600 shadow-sm border border-gray-200 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </RouterLink>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">蟾･莠狗樟蝣ｴ</h1>
            <p class="mt-1 text-sm text-gray-500">迴ｾ蝣ｴ縺ｮ荳隕ｧ</p>
          </div>
        </div>

        <div class="mt-4 md:mt-0 flex space-x-3">
          <div class="relative">
            <input type="text" placeholder="迴ｾ蝣ｴ讀懃ｴ｢..." class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
          <select class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 bg-white">
            <option>迥ｶ豕・</option>
            <option>騾ｲ陦御ｸｭ</option>
            <option>險育判</option>
            <option>邨ゅｏ繧・</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div class="h-48 bg-gray-200 relative">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gedung Perkantoran" class="w-full h-full object-cover">
            <div class="absolute top-4 right-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            騾ｲ陦御ｸｭ
                        </span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">魑･蜿・</h3>
                <p class="text-sm text-gray-500 flex items-center mt-1">
                  <svg class="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  邀ｳ蟄先ｸｯ
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between text-sm font-medium mb-1">
                <span class="text-gray-700">騾ｲ謐・</span>
                <span class="text-blue-600">75%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
              <div>
                <p class="text-gray-500 text-xs">諡・ｽ楢・</p>
                <p class="font-medium">螟ｧ蜊皮ｵ・</p>
              </div>
              <div class="text-right">
                <p class="text-gray-500 text-xs">譛滄剞</p>
                <p class="font-medium">2024蟷ｴ12譛・</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div class="h-48 bg-gray-200 relative">
            <img src="https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Jembatan" class="w-full h-full object-cover">
            <div class="absolute top-4 right-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            險育判
                        </span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">謨吩ｼ・</h3>
                <p class="text-sm text-gray-500 flex items-center mt-1">
                  <svg class="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  邀ｳ蟄仙ｸ・
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between text-sm font-medium mb-1">
                <span class="text-gray-700">險ｭ險域ｮｵ髫・</span>
                <span class="text-yellow-600">20%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-yellow-500 h-2 rounded-full" style="width: 20%"></div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
              <div>
                <p class="text-gray-500 text-xs">諡・ｽ楢・</p>
                <p class="font-medium">螟ｧ蜊皮ｵ・</p>
              </div>
              <div class="text-right">
                <p class="text-gray-500 text-xs">蟋九ａ</p>
                <p class="font-medium">2025蟷ｴ1譛・</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div class="h-48 bg-gray-200 relative">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Apartemen" class="w-full h-full object-cover">
            <div class="absolute top-4 right-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            雋｡蝗｣
                        </span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">譁憺擇</h3>
                <p class="text-sm text-gray-500 flex items-center mt-1">
                  <svg class="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  譌･蜷画ｴ･譚・
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between text-sm font-medium mb-1">
                <span class="text-gray-700">騾ｲ謐・</span>
                <span class="text-blue-600">10%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 10%"></div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
              <div>
                <p class="text-gray-500 text-xs">諡・ｽ楢・</p>
                <p class="font-medium">螟ｧ蜊皮ｵ・</p>
              </div>
              <div class="text-right">
                <p class="text-gray-500 text-xs">譛滄剞</p>
                <p class="font-medium">2026蟷ｴ10譛・</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div class="h-48 bg-gray-200 relative">
            <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gudang" class="w-full h-full object-cover grayscale">
            <div class="absolute top-4 right-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            荳ｭ豁｢
                        </span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">邀ｳ蟄仙ｸ・</h3>
                <p class="text-sm text-gray-500 flex items-center mt-1">
                  <svg class="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  譛ｬ遉ｾ
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between text-sm font-medium mb-1">
                <span class="text-gray-700">險ｱ蜿ｯ縺ｮ蝠城｡・</span>
                <span class="text-red-600">35%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-red-500 h-2 rounded-full" style="width: 35%"></div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
              <div>
                <p class="text-gray-500 text-xs">謇譛芽・</p>
                <p class="font-medium">螟ｧ蜊皮ｵ・</p>
              </div>
              <div class="text-right">
                <p class="text-gray-500 text-xs">謗ｨ螳壹・邯壹￥</p>
                <p class="font-medium">荳肴・</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <BaseSidebar/>
  </div>
</template>

<style scoped>

</style>


