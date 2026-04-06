<script setup>
import BaseSidebar from "../UserComponents/SidebarUser.vue";

</script>

<template>

  <!-- Main ContentHome -->
  <div class="flex h-full">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div class=" pb-4 flex items-center">
        <RouterLink to="/dashboard"
                    class="mr-4 p-2 bg-white rounded-full text-gray-500 hover:text-blue-600 shadow-sm border border-gray-200 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </RouterLink>
        <div>
          <h1 class="text-2xl font-bold text-gray-900">工事現場</h1>
          <p class="mt-1 text-sm text-gray-500">現場の一覧</p>
        </div>
      </div>

      <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

          <div class="md:col-span-5 relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" class="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out" placeholder="検索名, ID, あるいは やくしょく...">
          </div>

          <div class="md:col-span-3 relative">
            <select class="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg cursor-pointer">
              <option value="">全員</option>
              <option value="mandor">現場監督</option>
              <option value="teknisi">土木技術者</option>
              <option value="operator">重機オペレーター</option>
              <option value="k3">安全管理担当</option>
            </select>
          </div>

          <div class="md:col-span-2 relative">
            <select class="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg cursor-pointer">
              <option value="">状況</option>
              <option value="onsite">現場勤務</option>
              <option value="cuti">休暇</option>
              <option value="sakit">病欠</option>
            </select>
          </div>
          <div class="md:col-span-2">
            <button type="button" class="w-full flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              追加
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col items-center p-6 text-center group relative">
          <div class="absolute top-4 right-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        勤務
                    </span>
          </div>
          <img class="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all" src="/img/profile.png" alt="Avatar">
          <div>
            <h3 class="text-lg font-bold text-gray-900">西本</h3>
            <p class="text-sm text-blue-600 font-medium">部長</p>
          </div>

          <div class="mt-4 w-full border-t border-gray-100 py-3">
            <div class="flex items-center justify-center text-xs text-gray-500 mb-1">
              <svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              位置
            </div>
            <p class="text-sm font-semibold text-gray-800 truncate px-2">本社</p>
          </div>

          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">部長</span>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">証明書</span>
          </div>

          <a href="profile.html" class="w-full block bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition">
            プロフィールを見る
          </a>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col items-center p-6 text-center group relative">
          <div class="absolute top-4 right-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        通勤
                    </span>
          </div>
          <img class="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all" src="/img/profile.png" alt="Avatar">
          <div>
            <h3 class="text-lg font-bold text-gray-900">長谷川</h3>
            <p class="text-sm text-blue-600 font-medium">事務員</p>
          </div>

          <div class="mt-4 w-full border-t border-gray-100 py-3">
            <div class="flex items-center justify-center text-xs text-gray-500 mb-1">
              <svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              位置
            </div>
            <p class="text-sm font-semibold text-gray-800 truncate px-2">デザイン部門</p>
          </div>

          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">オートキャド</span>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">機械管理</span>
          </div>

          <button class="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            プロフィールを見る
          </button>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col items-center p-6 text-center group relative">
          <div class="absolute top-4 right-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        通勤
                    </span>
          </div>
          <img class="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all" src="/img/profile.png" alt="Avatar">
          <div>
            <h3 class="text-lg font-bold text-gray-900">菊川</h3>
            <p class="text-sm text-blue-600 font-medium">クレーンオペレーター</p>
          </div>

          <div class="mt-4 w-full border-t border-gray-100 py-3">
            <div class="flex items-center justify-center text-xs text-gray-500 mb-1">
              <svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              位置
            </div>
            <p class="text-sm font-semibold text-gray-800 truncate px-2">奥陰田法面</p>
          </div>

          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">クレーン</span>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">物流</span>
          </div>

          <button class="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            プロフィールを見る
          </button>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col items-center p-6 text-center group relative">
          <div class="absolute top-4 right-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        休暇
                    </span>
          </div>
          <img class="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all grayscale" src="/img/profile.png" alt="Avatar">
          <div>
            <h3 class="text-lg font-bold text-gray-900">森田</h3>
            <p class="text-sm text-blue-600 font-medium">安全担当者</p>
          </div>

          <div class="mt-4 w-full border-t border-gray-100 py-3">
            <div class="flex items-center justify-center text-xs text-gray-500 mb-1">
              <svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              位置
            </div>
            <p class="text-sm font-semibold text-gray-500 italic truncate px-2">休み</p>
          </div>

          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">一般労働安全衛生専門家</span>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">安全衛生</span>
          </div>

          <button class="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            プロフィールを見る
          </button>
        </div>

      </div>

      <div class="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
        <div class="flex-1 flex justify-between sm:hidden">
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Previous</a>
          <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</a>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              全24名中1〜4名を表示
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Previous</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </a>
              <a href="#" aria-current="page" class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">3</a>
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Next</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              </a>
            </nav>
          </div>

        </div>

      </div>

    </main>
    <BaseSidebar/>
  </div>

</template>

<style scoped>

</style>