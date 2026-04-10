<script setup>

</script>

<template>
  <!-- Navigation Bar-->
  <header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/img/dk_logo.png" alt=""/>
        </a>
      </div>
      <div class="flex lg:hidden">
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm/6 font-semibold pt-2">莉穂ｺ句・螳ｹ</a>
        <a href="#" class="text-sm/6 font-semibold pt-2">莨夂､ｾ諠・ｱ</a>
        <a href="#" class="text-sm/6 font-semibold pt-2">縺雁撫縺・粋繧上○</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink to="/login" class="text-sm/6 font-semibold">繝ｭ繧ｰ繧､繝ｳ <span aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
