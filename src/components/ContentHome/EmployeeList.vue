<script setup>

import BaseNavbarHome from "../HomeComponents/NavbarHome.vue";
import BaseButtonBack from "../Utilities/UtilitiesHome/ButtonBack.vue";
import BaseFooterHome from "../HomeComponents/FooterHome.vue";
import BaseSideBarHome from "../HomeComponents/SidebarHome.vue";

</script>

<template>

  <BaseNavbarHome/>

  <div class="bg-slate-50">
    <section class="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <BaseButtonBack />

      <div class="mt-8 rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm sm:px-10">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          キャンバ
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

  <!--
  <div class="flex h-full">

    <main class="flex-grow py-10 px-4 sm:px-6 lg:px-8">

      <div class="max-w-7xl mx-auto">
        <BaseButtonBack/>
        <div class="text-center mb-10">
          <h1 class="text-3xl font-bold text-gray-900">土木部状況</h1>
          <p class="mt-2 text-gray-500">登録済み土木技術者一覧</p>
        </div>

        <div id="app">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">


            <div class="bg-blue-600 px-6 py-4">
              <h1 class="text-white text-xl font-bold tracking-wide">Data Tabel</h1>
              <p class="text-blue-200 text-sm mt-0.5">5 baris &bull; 6 kolom</p>
            </div>


            <div class="overflow-x-auto">
              <table class="w-full text-sm">


                <thead>
                <tr class="bg-blue-50 border-b border-blue-100">
                  <th class="px-5 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">No</th>
                  <th class="px-5 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Nama</th>
                  <th class="px-5 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Divisi</th>
                  <th class="px-5 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Lokasi</th>
                  <th class="px-5 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Status</th>
                  <th class="px-5 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Tanggal
                  </th>
                </tr>
                </thead>


                <tbody>
                <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-3 text-gray-500 font-mono text-xs">001</td>
                </tr>
                <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                </tr>
                <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-3 text-gray-500 font-mono text-xs">003</td>
                </tr>
                <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-3 text-gray-500 font-mono text-xs">004</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-3 text-gray-500 font-mono text-xs">005</td>
                </tr>
                </tbody>

              </table>
            </div>

          </div>
        </div>

      </div>
    </main>
    <BaseSideBarHome/>
  </div>
  -->
  <BaseFooterHome/>
</template>

<style scoped>

</style>