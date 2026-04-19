<script setup>
import BaseNavbarHome from "../HomeComponents/NavbarHome.vue";
import BaseFooterHome from "../HomeComponents/FooterHome.vue";
import BaseButtonBack from "../Utilities/UtilitiesHome/ButtonBack.vue";

// Temporary placeholder while the equipment page is being prepared.
// const projectsRaw = [{}];
</script>

<template>
  <BaseNavbarHome />

  <div class="bg-slate-50">
    <section class="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <BaseButtonBack />

      <div class="mt-8 rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm sm:px-10">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          装備
        </p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          近日公開
        </h1>
        <p class="mt-4 text-base text-slate-600 sm:text-lg">
          このページは現在準備中です
        </p>
      </div>

      <!-- Previous Equipment List content is temporarily disabled.
      <div class="bg-white border-gray-200 py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BaseButtonBack/>
          <div class="text-center max-w-2xl mx-auto mb-8">
            <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">讖滓｢ｰ蜷阪→邂｡逅・分蜿ｷ</h1>
            <p class="mt-3 text-lg text-gray-500">螟ｧ蜊皮ｵ・・讖滓攝邂｡逅・♀繧医・讖滓攝逡ｪ蜿ｷ邂｡逅・</p>
          </div>

          <div class="flex justify-center space-x-2">
            <span class="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold cursor-pointer border border-blue-200">騾ｲ陦御ｸｭ</span>
            <span class="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 cursor-pointer border border-gray-200 transition">轤ｹ讀・</span>
            <span class="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 cursor-pointer border border-gray-200 transition">菫ｮ逅・</span>
          </div>
        </div>
      </div>

      <main class="flex-grow px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
              <div class="relative h-48 bg-gray-100">
                <img src="/img/pengukuroksigen.jpg" class="w-full h-full object-cover" alt="Excavator">
                <div class="absolute top-3 right-3">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 shadow-sm">
                                    <span class="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    騾ｲ陦御ｸｭ
                                </span>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">驟ｸ邏豼・ｺｦ險・</h3>
                    <p class="text-xs text-gray-500 font-mono">逡ｪ蜿ｷ: 驟ｸ邏豼・ｺｦ險・</p>
                  </div>
                </div>

                <div class="mt-4 space-y-2">
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">迴ｾ蝨ｨ蝨ｰ</span>
                    <span class="font-medium text-gray-900">霆雁ｰｾ譫晉ｷ・</span>
                  </div>
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">邂｡逅・・</span>
                    <span class="font-medium text-gray-900">繝輔ぃ繝峨Λ繝ｳ</span>
                  </div>
                  <div class="flex justify-between text-sm pt-1">
                    <span class="text-gray-500"></span>
                    <span class="font-medium text-gray-900"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
              <div class="relative h-48 bg-gray-100">
                <img src="/img/smithanmer.jpg" class="w-full h-full object-cover" alt="Tower Crane">
                <div class="absolute top-3 right-3">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 shadow-sm">
                                    <span class="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    騾ｲ陦御ｸｭ
                                </span>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">繧ｷ繝･繝溘ャ繝医ワ繝ｳ繝槭・</h3>
                    <p class="text-xs text-gray-500 font-mono">逡ｪ蜿ｷ:縲CTH</p>
                  </div>
                </div>

                <div class="mt-4 space-y-2">
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">迴ｾ蝨ｨ蝨ｰ</span>
                    <span class="font-medium text-gray-900">荳蛾Κ豕暮擇蟾･蛹ｺ</span>
                  </div>
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">邂｡逅・・</span>
                    <span class="font-medium text-gray-900">繝輔ぃ繝峨Λ繝ｳ</span>
                  </div>
                  <div class="flex justify-between text-sm pt-1">
                    <span class="text-gray-500"></span>
                    <span class="font-medium text-green-600"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group ring-2 ring-red-50">
              <div class="relative h-48 bg-gray-100">
                <div class="absolute inset-0 bg-red-500 bg-opacity-10 pointer-events-none"></div>
                <img src="/img/laser.jpg" class="w-full h-full object-cover grayscale" alt="Dump Truck">
                <div class="absolute top-3 right-3">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200 shadow-sm">
                                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    轤ｹ讀・
                                </span>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">繝ｬ繝ｼ繧ｶ繝ｼ繧ｹ繧ｭ繝｣繝翫・</h3>
                    <p class="text-xs text-gray-500 font-mono">逡ｪ蜿ｷ: LS-1</p>
                  </div>
                </div>

                <div class="mt-4 space-y-2">
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">迴ｾ蝨ｨ蝨ｰ</span>
                    <span class="font-medium text-gray-900">骰ｵ謗幃％霍ｯ譌･蜊・</span>
                  </div>
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">邂｡逅・・</span>
                    <span class="font-medium text-red-600">繝輔ぃ繝峨Λ繝ｳ</span>
                  </div>
                  <div class="flex justify-between text-sm pt-1">
                    <span class="text-gray-500">螳梧・莠亥ｮ壽律</span>
                    <span class="font-medium text-gray-900">縺ゅ→荳画律</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
              <div class="relative h-48 bg-gray-100">
                <img src="/img/usb.jpg" class="w-full h-full object-cover" alt="Mixer">
                <div class="absolute top-3 right-3">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 shadow-sm">
                                    <span class="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    騾ｲ陦御ｸｭ
                                </span>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">USB <>繧ｿ繧､繝佑繝・・繧ｿ縲霆｢騾√い繝繝励ち繝ｼ</h3>
                    <p class="text-xs text-gray-500 font-mono">逡ｪ蜿ｷ: USB-C</p>
                  </div>
                </div>

                <div class="mt-4 space-y-2">
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">迴ｾ蝨ｨ蝨ｰ</span>
                    <span class="font-medium text-gray-900">邀ｳ蟄先ｸｯ騾謌・</span>
                  </div>
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">邂｡逅・・</span>
                    <span class="font-medium text-gray-900">繝輔ぃ繝峨Λ繝ｳ</span>
                  </div>
                  <div class="flex justify-between text-sm pt-1">
                    <span class="text-gray-500"></span>
                    <span class="font-medium text-gray-900"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
              <div class="relative h-48 bg-gray-100">
                <img src="/img/kui-navi1.jpg" class="w-full h-full object-cover" alt="Total Station">
                <div class="absolute top-3 right-3">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm">
                                    菫ｮ逅・
                                </span>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">譚ｭ繝翫ン 繧ｷ繝ｧ繝吶Ν逕ｨ縲繝励Μ繧ｺ繝</h3>
                    <p class="text-xs text-gray-500 font-mono">逡ｪ蜿ｷ: ATP 2-1</p>
                  </div>
                </div>

                <div class="mt-4 space-y-2">
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">迴ｾ蝨ｨ蝨ｰ</span>
                    <span class="font-medium text-gray-900">螂･螻ｱ遐る亟3蟾･蛹ｺ</span>
                  </div>
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">邂｡逅・・</span>
                    <span class="font-medium text-gray-900">繝輔ぃ繝峨Λ繝ｳ</span>
                  </div>
                  <div class="flex justify-between text-sm pt-1">
                    <span class="text-gray-500"></span>
                    <span class="font-medium text-blue-600"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
              <div class="relative h-48 bg-gray-100">
                <img src="/img/total-station.jpg" class="w-full h-full object-cover" alt="Roller">
                <div class="absolute top-3 right-3">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 shadow-sm">
                                    <span class="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    騾ｲ陦御ｸｭ
                                </span>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">繝医・繧ｿ繝ｫ繧ｹ繝・・繧ｷ繝ｧ繝ｳ</h3>
                    <p class="text-xs text-gray-500 font-mono">逡ｪ蜿ｷ: T-2</p>
                  </div>
                </div>

                <div class="mt-4 space-y-2">
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">迴ｾ蝨ｨ蝨ｰ</span>
                    <span class="font-medium text-gray-900">螂･髯ｰ逕ｰ豕暮擇</span>
                  </div>
                  <div class="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span class="text-gray-500">邂｡逅・・</span>
                    <span class="font-medium text-gray-900">繝輔ぃ繝峨Λ繝ｳ</span>
                  </div>
                  <div class="flex justify-between text-sm pt-1">
                    <span class="text-gray-500"></span>
                    <span class="font-medium text-gray-900"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      -->
    </section>
  </div>

  <BaseFooterHome />
</template>

<style scoped>

</style>



