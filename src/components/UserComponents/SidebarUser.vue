<script setup>

</script>

<template>
  <aside class="w-80 bg-white border-l border-gray-200 flex flex-col shadow-lg z-20">

    <div class="h-20 flex items-center justify-center border-b border-gray-100">
      <div class="flex items-center">
        <svg class="h-8 w-8 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
        <span class="font-bold text-xl text-gray-800">工事<span class="text-blue-600">記録</span></span>
      </div>
    </div>

    <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">

      <p class="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">メインメニュー</p>

      <RouterLink to="/dashboard/profile" class="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group">
        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        プロフィールを編集
      </RouterLink>

      <RouterLink to="/dashboard/construction" class="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group">
        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        工事現場
      </RouterLink>

      <RouterLink to="/dashboard/member" class="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group">
        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        会社員
      </RouterLink>

      <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group">
        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        機械状況
      </a>

      <div class="py-4">
        <div class="border-t border-gray-100"></div>
      </div>

      <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-400 border-2 border-dashed border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors">
        <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        新しい
      </a>
      <p class="px-2 mt-1 text-xs text-gray-400">将来の機能用にこのスロットを確保しています.</p>

    </nav>

    <div class="p-4 border-t border-gray-100">
      <div class="flex items-center">
        <img class="h-10 w-10 rounded-full object-cover" src="/img/profile.png" alt="Avatar">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-700">ファドラン</p>
          <RouterLink to="/users/logout" class="text-xs text-blue-600 hover:underline">ログアウト</RouterLink>
        </div>
      </div>
    </div>

  </aside>
</template>

<style scoped>

</style>