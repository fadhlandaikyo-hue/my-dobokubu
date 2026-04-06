<script setup>

import BaseNavbarHome from "../HomeComponents/NavbarHome.vue";
import BaseButtonBack from "../Utilities/UtilitiesHome/ButtonBack.vue";
import BaseFooterHome from "../HomeComponents/FooterHome.vue";
</script>

<template>
  <BaseNavbarHome/>

  <main class="flex-grow py-10 px-4 sm:px-6 lg:px-8">

    <div class="max-w-7xl mx-auto">
      <BaseButtonBack/>
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-gray-900">土木メンバー</h1>
        <p class="mt-2 text-gray-500">登録済み土木技術者一覧</p>
      </div>

      <div class="flex justify-center space-x-2">
        <span class="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold cursor-pointer border border-blue-200">管理者</span>
        <span class="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 cursor-pointer border border-gray-200 transition">施工チーム</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-24">

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-blue-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">西本</h3>
            <p class="text-blue-600 text-sm font-medium mb-3">現場監督</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                稼働中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                budi.s@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-indigo-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">小島</h3>
            <p class="text-indigo-600 text-sm font-medium mb-3">土木技術者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                siti.aminah@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-yellow-500 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">坪倉</h3>
            <p class="text-yellow-600 text-sm font-medium mb-3">建築技師</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                点検中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                rizky.k3@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group opacity-75">
          <div class="h-24 bg-gray-500 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover grayscale" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-700">菊川</h3>
            <p class="text-gray-500 text-sm font-medium mb-3">重機オペレーター</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                休暇中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-400 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                doni.h@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-teal-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">西中</h3>
            <p class="text-teal-600 text-sm font-medium mb-3">クレーン運転士</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Active / HO
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                ahmad.z@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-orange-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">今中</h3>
            <p class="text-orange-600 text-sm font-medium mb-3">安全管理者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                稼働中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                eko.logistik@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-cyan-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">長谷川</h3>
            <p class="text-cyan-600 text-sm font-medium mb-3">作業員</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                稼働中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                joko.gs@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-purple-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">池岡</h3>
            <p class="text-purple-600 text-sm font-medium mb-3">現場責任者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                nina.admin@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-purple-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">内田</h3>
            <p class="text-purple-600 text-sm font-medium mb-3">現場責任者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                nina.admin@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-purple-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">岩田</h3>
            <p class="text-purple-600 text-sm font-medium mb-3">現場責任者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                nina.admin@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-purple-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">岩田</h3>
            <p class="text-purple-600 text-sm font-medium mb-3">現場責任者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                nina.admin@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-purple-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">米原</h3>
            <p class="text-purple-600 text-sm font-medium mb-3">現場責任者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                nina.admin@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-purple-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">ファドラン</h3>
            <p class="text-purple-600 text-sm font-medium mb-3">現場責任者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                nina.admin@konstruksi.id
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div class="h-24 bg-purple-600 relative">
            <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <img class="w-20 h-20 rounded-full border-4 border-white object-cover" src="/img/profile.png" alt="Avatar">
            </div>
          </div>
          <div class="pt-12 pb-6 px-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">吉田</h3>
            <p class="text-purple-600 text-sm font-medium mb-3">現場責任者</p>

            <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                現場勤務中
                            </span>
              <div class="flex justify-center items-center text-xs text-gray-500 mt-2">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                nina.admin@konstruksi.id
              </div>
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