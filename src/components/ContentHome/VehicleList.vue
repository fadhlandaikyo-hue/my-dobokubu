<script setup>

import BaseNavbarHome from "../HomeComponents/NavbarHome.vue";
import BaseFooterHome from "../HomeComponents/FooterHome.vue";
import BaseButtonBack from "../Utilities/UtilitiesHome/ButtonBack.vue";
</script>

<template>
  <BaseNavbarHome/>

  <div class="bg-slate-50">
    <section class="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <BaseButtonBack />

      <div class="mt-8 rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm sm:px-10">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          車両
        </p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          近日公開
        </h1>
        <p class="mt-4 text-base text-slate-600 sm:text-lg">
          このページは現在準備中です
        </p>
      </div>
    </section>
  </div>


  <div class="bg-white border-gray-200 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BaseButtonBack/>
      <div class="text-center max-w-2xl mx-auto mb-8">
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">蟒ｺ險ｭ縺ｨ險育判</h1>
        <p class="mt-3 text-lg text-gray-500">繧､繝ｳ繝輔Λ謨ｴ蛯吶・騾ｲ謐礼ｮ｡逅・→蟆・擂險育判縺ｮ蜿ｯ隕門喧</p>
      </div>

      <div class="flex justify-center space-x-2">
        <span class="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold cursor-pointer border border-blue-200">蜈ｨ險育判</span>
        <span class="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 cursor-pointer border border-gray-200 transition">騾ｲ陦御ｸｭ譯井ｻｶ</span>
        <span class="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 cursor-pointer border border-gray-200 transition">險育判谿ｵ髫・</span>
      </div>
    </div>
  </div>

  <main class="flex-grow px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
          <div class="relative h-48 bg-gray-200">
            <img src="/img/unik.jpg" class="w-full h-full object-cover" alt="Dump Truck">
            <div class="absolute top-3 right-3">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 shadow-sm backdrop-blur-md bg-opacity-90">
                                <span class="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                遘ｻ蜍輔☆繧・(45 km/h)
                            </span>
            </div>
            <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono flex items-center">
              <svg class="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.172 2.828a1 1 0 00-1.414-1.414l-1 1a1 1 0 001.414 1.414l1-1zM11 5a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1zm6.243 1.343a1 1 0 01-1.415-1.414l-1 1a1 1 0 011.415 1.414l1-1z" clip-rule="evenodd"></path></svg>
              霆ｽ豐ｹ: 65%
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-lg font-bold text-gray-900">繝ｦ繝九ャ繧ｯ</h3>
                <p class="text-xs text-gray-500">Honda</p>
              </div>
              <div class="bg-black text-white px-2 py-1 rounded border-2 border-white shadow-sm">
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">蜩∝ｷ・300</span>
                </div>
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">縺・12-34</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3 space-y-2 mb-4 border border-gray-100">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="font-medium">諡・ｽ難ｼ・</span>&nbsp;繝輔ぃ繝峨Λ繝ｳ
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span class="font-medium">迴ｾ蝨ｨ蝨ｰ・・</span>&nbsp;譛ｬ菴・
              </div>
            </div>

            <div class="w-full bg-blue-50 text-blue-700 text-xs font-semibold py-2 rounded text-center border border-blue-100">
              遒ｺ螳・
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
          <div class="relative h-48 bg-gray-200">
            <img src="/img/bekekcil.jpeg" class="w-full h-full object-cover" alt="Mixer Truck">
            <div class="absolute top-3 right-3">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm backdrop-blur-md bg-opacity-90">
                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                遨阪∩霎ｼ縺ｿ
                            </span>
            </div>
            <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono flex items-center">
              <svg class="w-3 h-3 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.172 2.828a1 1 0 00-1.414-1.414l-1 1a1 1 0 001.414 1.414l1-1zM11 5a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1zm6.243 1.343a1 1 0 01-1.415-1.414l-1 1a1 1 0 011.415 1.414l1-1z" clip-rule="evenodd"></path></svg>
              邨檎罰: 90%
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-lg font-bold text-gray-900">繝溘ル繝舌ャ繧ｯ繝帙え</h3>
                <p class="text-xs text-gray-500">Honda</p>
              </div>
              <div class="bg-black text-white px-2 py-1 rounded border-2 border-white shadow-sm">
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">蜩∝ｷ・300</span>
                </div>
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">縺・12-34</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3 space-y-2 mb-4 border border-gray-100">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="font-medium">諡・ｽ・</span>&nbsp;繝輔ぃ繝峨Λ繝ｳ
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span class="font-medium">迴ｾ蝨ｨ蝨ｰ・・</span>&nbsp;螂･螻ｱ遐る亟3蟾･蛹ｺ
              </div>
            </div>

            <div class="w-full bg-blue-50 text-blue-700 text-xs font-semibold py-2 rounded text-center border border-blue-100">
              遒ｺ螳・
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
          <div class="relative h-48 bg-gray-200">
            <img src="/img/kolbak.jpg" class="w-full h-full object-cover" alt="Pickup">
            <div class="absolute top-3 right-3">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 shadow-sm backdrop-blur-md bg-opacity-90">
                                <span class="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                遘ｻ蜍輔☆繧・(80 km/h)
                            </span>
            </div>
            <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono flex items-center">
              <svg class="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.172 2.828a1 1 0 00-1.414-1.414l-1 1a1 1 0 001.414 1.414l1-1zM11 5a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1zm6.243 1.343a1 1 0 01-1.415-1.414l-1 1a1 1 0 011.415 1.414l1-1z" clip-rule="evenodd"></path></svg>
              繧ｬ繧ｽ繝ｪ繝ｳ: 40%
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-lg font-bold text-gray-900">霆ｽ繝医Λ</h3>
                <p class="text-xs text-gray-500">Honda</p>
              </div>
              <div class="bg-black text-white px-2 py-1 rounded border-2 border-white shadow-sm">
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">蜩∝ｷ・300</span>
                </div>
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">縺・12-34</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3 space-y-2 mb-4 border border-gray-100">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="font-medium">繝輔ぃ繝峨Λ繝ｳ・・</span>&nbsp;繝輔ぃ繝峨Λ繝ｳ
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span class="font-medium">迴ｾ蝨ｨ蝨ｰ・・</span>&nbsp;鬮倡伐逡代°繧・
              </div>
            </div>

            <div class="w-full bg-green-50 text-green-700 text-xs font-semibold py-2 rounded text-center border border-green-100">
              蜃ｺ蠑ｵ荳ｭ
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group opacity-90">
          <div class="relative h-48 bg-gray-200">
            <img src="/img/bekobesar.jpg" class="w-full h-full object-cover" alt="Trailer">
            <div class="absolute top-3 right-3">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800 text-white border border-gray-600 shadow-sm backdrop-blur-md bg-opacity-90">
                                鬧占ｻ雁ｴ
                            </span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-lg font-bold text-gray-900">繝舌ャ繧ｯ繝帙え</h3>
                <p class="text-xs text-gray-500">Honda</p>
              </div>
              <div class="bg-black text-white px-2 py-1 rounded border-2 border-white shadow-sm">
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">蜩∝ｷ・300</span>
                </div>
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">縺・12-34</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3 space-y-2 mb-4 border border-gray-100">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="font-medium">諡・ｽ難ｼ・</span>&nbsp;繝輔ぃ繝峨Λ繝ｳ
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span class="font-medium">迴ｾ蝨ｨ蝨ｰ・・</span>&nbsp;螂･髯ｰ逕ｰ豕暮擇
              </div>
            </div>

            <div class="w-full bg-gray-100 text-gray-600 text-xs font-semibold py-2 rounded text-center border border-gray-200">
              譏取律縺ｮ莠亥ｮ壹ｒ蠕・▲縺ｦ縺・∪縺・
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group">
          <div class="relative h-48 bg-gray-200">
            <img src="/img/kolbak2.jpg" class="w-full h-full object-cover" alt="Water Tank">
            <div class="absolute top-3 right-3">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 shadow-sm backdrop-blur-md bg-opacity-90">
                                <span class="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                遘ｻ蜍輔☆繧・
                            </span>
            </div>
            <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono flex items-center">
              <svg class="w-3 h-3 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.172 2.828a1 1 0 00-1.414-1.414l-1 1a1 1 0 001.414 1.414l1-1zM11 5a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1zm6.243 1.343a1 1 0 01-1.415-1.414l-1 1a1 1 0 011.415 1.414l1-1z" clip-rule="evenodd"></path></svg>
              邨檎罰: 20%
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-lg font-bold text-gray-900">霆ｽ繝医Λ</h3>
                <p class="text-xs text-gray-500">Honda</p>
              </div>
              <div class="bg-black text-white px-2 py-1 rounded border-2 border-white shadow-sm">
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">蜩∝ｷ・300</span>
                </div>
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">縺・12-34</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3 space-y-2 mb-4 border border-gray-100">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="font-medium">諡・ｽ・</span>&nbsp;繝輔ぃ繝峨Λ繝ｳ
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span class="font-medium">迴ｾ蝨ｨ蝨ｰ・・</span>&nbsp;骰ｵ謗幃％霍ｯ譌･蜊・
              </div>
            </div>

            <div class="w-full bg-red-50 text-red-700 text-xs font-semibold py-2 rounded text-center border border-red-100 flex justify-center items-center">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              譛ｪ遒ｺ螳・
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 group ring-2 ring-red-50">
          <div class="relative h-48 bg-gray-200">
            <div class="absolute inset-0 bg-red-500 bg-opacity-10 pointer-events-none z-10"></div>
            <img src="/img/kolbak3.jpg" class="w-full h-full object-cover grayscale" alt="Crane Truck">
            <div class="absolute top-3 right-3 z-20">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200 shadow-sm backdrop-blur-md bg-opacity-90">
                                轤ｹ讀・
                            </span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-lg font-bold text-gray-900">霆ｽ繝医Λ</h3>
                <p class="text-xs text-gray-500">Honda</p>
              </div>
              <div class="bg-black text-white px-2 py-1 rounded border-2 border-white shadow-sm">
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">蜩∝ｷ・300</span>
                </div>
                <div>
                  <span class="text-xs font-mono font-bold tracking-widest">縺・12-34</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3 space-y-2 mb-4 border border-gray-100">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="font-medium">諡・ｽ・</span>&nbsp;繝輔ぃ繝峨Λ繝ｳ
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="font-medium">迴ｾ蝨ｨ蝨ｰ・・</span>&nbsp;閾ｪ蜍戊ｻ頑紛蛯吝ｷ･蝣ｴ
              </div>
            </div>

            <div class="w-full bg-red-50 text-red-700 text-xs font-semibold py-2 rounded text-center border border-red-100">
              蝠城｡・ 繝悶Ξ繝ｼ繧ｭ荳榊庄閭ｽ
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>

  <BaseFooterHome/>
</template>

<style scoped>

</style>

