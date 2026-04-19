<script setup>
import BaseNavbarHome from "../HomeComponents/NavbarHome.vue";
import BaseFooterHome from "../HomeComponents/FooterHome.vue";
import BaseSlideImage from "./SlideImage.vue";
</script>

<template>
  <BaseNavbarHome />
  <!-- Header Section 1-->
  <div class="relative isolate overflow-hidden py-24 sm:py-32 bg-[url(/img/beko.webp)] bg-cover bg-center bg-no-repeat">
    <div class="pointer-events-none absolute inset-0 bg-black/15" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8 lg:py-8">
      <div
          class="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-sky-500/95 px-8 py-10 text-black shadow-lg"
      >
        <div class="max-w-2xl">
          <h2 class="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">株式会社大協組</h2>
          <h2 class="mt-4 text-2xl font-semibold sm:text-4xl lg:text-5xl">土木部</h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-black/80 sm:text-lg">
            「今やる、すぐやる、先に延ばさない」をモットーとして、技術力の向上、創意工夫により発注者および地域に信頼される最高の品質の実現を目指します
          </p>
        </div>
      </div>
    </div>
  </div>

  <!--ContentHome Section1-->
  <div class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg pb-6">
            <p class="text-base/7 font-semibold text-indigo-400">内容</p>
            <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-black">土木部</h1>
            <p class="mt-6 text-xl/8 -300 text-black">
              明るい未来を築くために、お客様のビジョンを実現する包括的な計画サービスを提供します
            </p>
          </div>
        </div>
      </div>
      <div class="-mt-12 p-12 lg:col-start-2 lg:row-start-1">
        <div class="grid grid-flow-col grid-rows-2 gap-4 lg:grid-cols-3">
          <RouterLink to="/home/construction">
            <div class="p-8 bg-transparent border border-gray-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div class="p-2 w-12 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path
                      fill-rule="evenodd"
                      d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                      clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="pt-5">工事番号現場名</div>
            </div>
          </RouterLink>

          <RouterLink to="/home/inspection">
            <div class="p-8 bg-transparent border border-gray-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div class="p-2 w-12 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path
                      fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="pt-5">検査</div>
            </div>
          </RouterLink>

          <RouterLink to="/home/equipment">
            <div class="p-8 bg-transparent border border-gray-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div class="p-2 w-12 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path
                      fill-rule="evenodd"
                      d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                      clip-rule="evenodd"
                  />
                  <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                  <path
                      fill-rule="evenodd"
                      d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="pt-5">機器名と管理番号</div>
            </div>
          </RouterLink>

          <RouterLink to="/home/vehicle">
            <div class="p-8 bg-transparent border border-gray-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div class="p-2 w-12 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
              </div>
              <div class="pt-5">車両など</div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <BaseSlideImage />

  <BaseFooterHome />
</template>

<style scoped>


</style>



