<script setup>
import { ref, computed }          from "vue"
import { useRoute }               from "vue-router"
import BaseNavbarHome             from "../HomeComponents/NavbarHome.vue"
import BaseFooterHome             from "../HomeComponents/FooterHome.vue"
import BaseButtonBack             from "../Utilities/UtilitiesHome/ButtonBack.vue"
import { useProgressColor }       from "./composables/useProgressColor.js"
import { useLocalStorage }        from "./composables/useLocalStorage.js"
import BaseButtonBackConstruction from "../Utilities/UtilitiesHome/ButtonBackConstruction.vue"
import BaseProgressBarDetail      from "../HomeComponents/ProgressBarDetail.vue"
import                                 "./ConstructionDetail.css"

const route                                      = useRoute()
const { saveOne, getOne }                        = useLocalStorage()
const { progressColor, statusLabel, badgeColor } = useProgressColor()

// ── Password yang benar (ganti sesuai kebutuhan) ──────────────────────────
const CORRECT_PASSWORD = '191101'

// ── Data proyek ───────────────────────────────────────────────────────────
const projectsRaw = [
  {
    id: 1, name: '美保(5)格納庫等新設舗装工事', code: '20250009',
    defaultProgress: 75, completionDate: '2023年11月8日 ー 2026年3月31日', type: '法面',
    img: '/construction_img/奥陰田法面.webp',
    images: [
      '/construction_img/奥陰田法面.webp',
      '/construction_img/宮ノ前歩道.webp',
      '/construction_img/米子港造成.webp',
      '/construction_img/米子港造成.webp',
      '/construction_img/米子港造成.webp'
    ],
    badgeLabel: null, badgeClass: null, completed: false,
    description: '-',
    location: '-', contractor: '小島',
  },
  {
    id: 2, name: '鍵掛峠道路日南地区改良工事', code: '20260002',
    defaultProgress: 15, completionDate: '2024年5月21日 ー 2026年3月31日', type: '橋梁',
    img: '/construction_img/宮ノ前歩道.webp',
    images: [
      '/construction_img/宮ノ前歩道.webp',
      '/construction_img/鍵掛道路日南.webp',
      '/construction_img/大坂改良7工区.webp',
    ],
    badgeLabel: null, badgeClass: null, completed: false,
    description: '-',
    location: '-', contractor: '池岡、内田',
  },
  {
    id: 3, name: '奥陰田3地区急傾斜地崩壊 対策工事その2', code: '20250008',
    defaultProgress: 30, completionDate: '2025年7月25日 ー 2026年3月31日', type: '港',
    img: '/construction_img/米子港造成.webp',
    images: [
      '/construction_img/米子港造成.webp',
      '/construction_img/奥陰田法面.webp',
      '/construction_img/佐陀川砂防9工区.webp',
    ],
    badgeLabel: null, badgeClass: null, completed: false,
    description: '-',
    location: '-', contractor: '長谷川、岩田ひ',
  },
  {
    id: 4, name: '中山3期営農飲雑用水 (高田工区)工事', code: '20250006',
    defaultProgress: 100, completionDate: '2025年9月1日 ー 2026年5月29日', type: '砂防',
    img: '/construction_img/奥山砂防3工区.webp',
    images: ['/construction_img/奥山砂防3工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '岩田こ',
  },
  {
    id: 5, name: '車尾五丁目ほか枝線工事', code: '20260006',
    defaultProgress: 100, completionDate: '2025年9月4日 ー 2026年9月30日', type: '砂防',
    img: '/construction_img/佐陀川砂防9工区.webp',
    images: ['/construction_img/佐陀川砂防9工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '西中',
  },
  {
    id: 6, name: '県道西伯伯太線(宮ノ前歩道橋) 橋梁塗装工事(2工区)(補助)', code: '20240009',
    defaultProgress: 100, completionDate: '2025年10月2日 ー 2026年3月16日', type: '道路',
    img: '/construction_img/大坂改良7工区.webp',
    images: ['/construction_img/大坂改良7工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '今中',
  },
  {
    id: 7, name: '外港中野地区承水路護岸補修工事 (老朽化対策) (3工区)', code: '20240006',
    defaultProgress: 100, completionDate: '2026年2月4日 ー 2026年9月18日', type: '道路',
    img: '/construction_img/鍵掛道路日南.webp',
    images: ['/construction_img/鍵掛道路日南.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '篠原',
  },
  {
    id: 8, name: '船越地区急傾斜地崩壊対策工事 (2工区)(交付金)(国補正)', code: '20250005',
    defaultProgress: 100, completionDate: '2026年2月17日 ー 2026年10月21日', type: '法面',
    img: '/construction_img/三部法面7工区.webp',
    images: ['/construction_img/三部法面7工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '坪倉',
  },
  {
    id: 9, name: '県道大山寺岸本線(小林工区) 電線共同溝設置工事(2工区)(補助)', code: '20250005',
    defaultProgress: 100, completionDate: '2026年3月6日 ー 2026年10月30日', type: '法面',
    img: '/construction_img/三部法面7工区.webp',
    images: ['/construction_img/三部法面7工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '西本',
  },
  {
    id: 10, name: '佐陀川砂防堰堤(K1)工事(9工区) (補助)(国補正) (2工区)(交付金)(国補正)', code: '20250005',
    defaultProgress: 100, completionDate: '2026年3月5日 ー 2026年12月25日', type: '法面',
    img: '/construction_img/三部法面7工区.webp',
    images: ['/construction_img/三部法面7工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '菊川',
  },
  {
    id: 11, name: '奥山川砂防堰堤工事(4工区) (交付金)(国補正)', code: '20250005',
    defaultProgress: 100, completionDate: '2026年3月9日 ー 2026年11月9日', type: '法面',
    img: '/construction_img/三部法面7工区.webp',
    images: ['/construction_img/三部法面7工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '内田',
  },
  {
    id: 12, name: '鍵掛峠道路新屋地区 第13改良工事', code: '20250005',
    defaultProgress: 100, completionDate: '2027年5月1日 ー 2026年2月26日', type: '法面',
    img: '/construction_img/三部法面7工区.webp',
    images: ['/construction_img/三部法面7工区.webp'],
    badgeLabel: null, badgeClass: null, completed: true,
    description: '-',
    location: '-', contractor: '池岡',
  },
]

// ── Ambil proyek berdasarkan ID dari URL ──────────────────────────────────
const projectId = Number(route.params.id)
const raw       = projectsRaw.find(p => p.id === projectId)
const persisted = raw ? getOne(raw.id, raw.defaultProgress) : 0
const project   = ref(raw ? { ...raw, draft: persisted, saved: persisted } : null)

const projectPdfMap = {
  1: '/令和8年3月分.pdf',
  2: '/pdf/construction/project-2.pdf',
  3: '/pdf/construction/project-3.pdf',
  4: '/pdf/construction/project-4.pdf',
  5: '/pdf/construction/project-5.pdf',
  6: '/pdf/construction/project-6.pdf',
  7: '/pdf/construction/project-7.pdf',
  8: '/pdf/construction/project-8.pdf',
  9: '/pdf/construction/project-9.pdf',
  10: '/pdf/construction/project-10.pdf',
  11: '/pdf/construction/project-11.pdf',
  12: '/pdf/construction/project-12.pdf',
}

const isDirty       = computed(() => project.value && project.value.draft !== project.value.saved)
const projectImages = computed(() => project.value?.images?.length ? project.value.images : [project.value?.img])
const projectPdfUrl = computed(() => {
  if (!project.value) return ''
  return projectPdfMap[project.value.id] || ''
})

// ── Helper: parse "2023年11月8日" → "2023-11-08" ──────────────────────────
function parseJpDate(str) {
  if (!str) return ''
  const m = str.trim().match(/(\d+)年(\d+)月(\d+)日/)
  if (!m) return ''
  return `${m[1]}-${String(m[2]).padStart(2, '0')}-${String(m[3]).padStart(2, '0')}`
}

// ── Helper: "2023-11-08" → "2023年11月8日" ───────────────────────────────
function formatJpDate(val) {
  if (!val) return ''
  const [y, mo, d] = val.split('-')
  return `${y}年${parseInt(mo)}月${parseInt(d)}日`
}

// ── Parse completionDate "A ー B" → { start, end } ────────────────────────
function splitCompletionDate(str) {
  const parts = (str || '').split(/\s*[ーー\-–—]\s*/)
  return { start: parts[0]?.trim() ?? '', end: parts[1]?.trim() ?? '' }
}

// ── Date modal state ──────────────────────────────────────────────────────
const showDateModal   = ref(false)
const draftStartDate  = ref('')   // format yyyy-mm-dd
const draftEndDate    = ref('')   // format yyyy-mm-dd
const pendingSaveType = ref('')   // 'progress' | 'date' | 'both'

function openDateModal() {
  const { start, end }  = splitCompletionDate(project.value.completionDate)
  draftStartDate.value  = parseJpDate(start)
  draftEndDate.value    = parseJpDate(end)
  showDateModal.value   = true
}

function closeDateModal() {
  showDateModal.value = false
}

function confirmDateModal() {
  // Tutup date modal, lanjut ke password modal
  showDateModal.value   = false
  pendingSaveType.value = isDirty.value ? 'both' : 'date'
  openPasswordModal()
}

// ── State modal password ──────────────────────────────────────────────────
const showModal      = ref(false)
const passwordInput  = ref('')
const passwordError  = ref('')
const showPassword   = ref(false)
const isShaking      = ref(false)
const saveSuccess    = ref(false)

function openPasswordModal() {
  passwordInput.value = ''
  passwordError.value = ''
  showPassword.value  = false
  showModal.value     = true
  // Fokus ke input setelah modal muncul
  setTimeout(() => {
    document.getElementById('pw-input')?.focus()
  }, 100)
}

function closeModal() {
  showModal.value     = false
  passwordInput.value = ''
  passwordError.value = ''
}

function confirmSave() {
  if (passwordInput.value === CORRECT_PASSWORD) {
    // Simpan progress jika perlu
    if (pendingSaveType.value === 'progress' || pendingSaveType.value === 'both' || isDirty.value) {
      saveOne(project.value.id, project.value.draft)
      project.value.saved = project.value.draft
    }
    // Simpan tanggal jika perlu
    if (pendingSaveType.value === 'date' || pendingSaveType.value === 'both') {
      const start = formatJpDate(draftStartDate.value)
      const end   = formatJpDate(draftEndDate.value)
      project.value.completionDate = `${start} ー ${end}`
    }
    pendingSaveType.value = ''
    showModal.value       = false
    passwordInput.value   = ''
    passwordError.value   = ''
    saveSuccess.value     = true
    setTimeout(() => { saveSuccess.value = false }, 2500)
  } else {
    passwordError.value = 'パスワードが正しくありません。もう一度お試しください。'
    isShaking.value     = true
    setTimeout(() => { isShaking.value = false }, 500)
    passwordInput.value = ''
    document.getElementById('pw-input')?.focus()
  }
}

function discard() {
  if (!project.value) return
  project.value.draft = project.value.saved
}

// Enter key di dalam modal
function onModalKeydown(e) {
  if (e.key === 'Enter') confirmSave()
  if (e.key === 'Escape') closeModal()
}
</script>

<template>
  <BaseNavbarHome/>

  <!-- ── Proyek tidak ditemukan ─────────────────────────────────────────── -->
  <div v-if="!project" class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-2xl font-bold text-gray-700 mb-4">プロジェクトが見つかりません</p>
      <BaseButtonBack/>
    </div>
  </div>

  <!-- ── Detail proyek ─────────────────────────────────────────────────── -->
  <div v-else class="min-h-screen bg-gray-50">

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BaseButtonBackConstruction/>

      <!-- ── Image Carousel ────────────────────────────────────────────── -->
      <div class="flex snap-x snap-mandatory overflow-x-auto gap-4 px-8 mt-4 pb-2">
        <div
            v-for="(imgSrc, idx) in projectImages"
            :key="idx"
            class="snap-center shrink-0 w-72 sm:w-80"
        >
          <img
              :src="imgSrc"
              :alt="`${project.name} - ${idx + 1}`"
              class="w-full h-48 object-cover rounded-xl"
              @error="e => e.target.style.display='none'"
              loading="lazy"
          />
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- ── Kiri: info detail ─────────────────────────────────────── -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-lg font-bold text-gray-800 mb-3">工事概要</h2>
            <p class="text-gray-600 leading-relaxed">{{ project.description }}</p>
            <a
                v-if="projectPdfUrl"
                :href="projectPdfUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="construction-pdf-link"
            >
              工事概要PDFを見る
            </a>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-lg font-bold text-gray-800 mb-4">基本情報</h2>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <p class="text-xs text-gray-400 uppercase font-semibold mb-1">工事種別</p>
                <p class="text-sm font-medium text-gray-800">{{ project.type }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-400 uppercase font-semibold mb-1">{{ project.completed ? '終了日' : '完成予定日' }}</p>
                <button
                    class="text-sm font-medium text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors text-left"
                    @click="openDateModal"
                >{{ project.completionDate }}</button>
              </div>
              <div>
                <p class="text-xs text-gray-400 uppercase font-semibold mb-1">施工場所</p>
                <p class="text-sm font-medium text-gray-800">{{ project.location }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-400 uppercase font-semibold mb-1">担当者</p>
                <p class="text-sm font-medium text-gray-800">{{ project.contractor }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Kanan: progress card ──────────────────────────────────── -->
        <div class="space-y-4">
          <div
              class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 transition-colors duration-300"
              :style="{ borderTopColor: badgeColor(project.draft), borderTopWidth: '4px' }"
          >
            <h2 class="text-lg font-bold text-gray-800 mb-4">進捗状況</h2>

            <div class="flex justify-between text-sm font-medium text-gray-600 mb-1">
              <span class="flex items-center gap-1.5">
                {{ statusLabel(project.draft) }}
                <span
                    v-if="isDirty"
                    class="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-300"
                >未保存</span>
              </span>
              <span :style="{ color: progressColor(project.draft) }">{{ project.draft }}%</span>
            </div>

            <BaseProgressBarDetail v-model="project.draft" class="mb-4"/>

            <!-- ✅ Tombol save → buka modal password, bukan langsung simpan -->
            <div v-if="isDirty" class="flex gap-2 mt-2">
              <button
                  @click="openPasswordModal"
                  class="flex-1 py-2 px-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150 flex items-center justify-center gap-1.5"
              >
                <!-- ikon kunci kecil -->
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                保存する
              </button>
              <button
                  @click="discard"
                  class="flex-1 py-2 px-3 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-150"
              >元に戻す</button>
            </div>

            <!-- ✅ Notifikasi sukses -->
            <Transition name="fade">
              <div
                  v-if="saveSuccess"
                  class="mt-3 flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2"
              >
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                保存しました
              </div>
            </Transition>

            <p v-if="!isDirty && !saveSuccess" class="text-xs text-gray-400 mt-2 text-center">
              バーをドラッグして進捗を更新できます
            </p>
          </div>

          <!-- Status legend -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <h3 class="text-sm font-bold text-gray-700 mb-3">ステータス凡例</h3>
            <div class="space-y-2 text-xs">
              <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span><span class="text-gray-600">計画 (0–10%)</span></div>
              <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-orange-400 inline-block"></span><span class="text-gray-600">開始 (11–25%)</span></div>
              <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span><span class="text-gray-600">序盤 (26–50%)</span></div>
              <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-blue-500 inline-block"></span><span class="text-gray-600">進行中 (51–99%)</span></div>
              <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span><span class="text-gray-600">完了 (100%)</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ── Modal Pemilihan Tanggal ───────────────────────────────────────── -->
  <Teleport to="body">
    <Transition name="modal">
      <div
          v-if="showDateModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeDateModal"/>

        <!-- Modal box -->
        <div class="modal-box relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">

          <!-- Header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-base font-bold text-gray-900">期間を変更</h3>
              <p class="text-xs text-gray-500">工事の開始日と終了日を選択してください</p>
            </div>
          </div>

          <!-- 現在の期間 -->
          <div class="bg-gray-50 rounded-xl px-4 py-2.5 mb-5 text-xs text-gray-500">
            <span class="font-semibold text-gray-700">現在:</span> {{ project?.completionDate }}
          </div>

          <!-- Date inputs -->
          <div class="space-y-4">
            <!-- 開始日 -->
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1.5">
                <span class="inline-block w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>開始日
              </label>
              <input
                  v-model="draftStartDate"
                  type="date"
                  class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-500 transition-colors duration-150"
              />
            </div>

            <!-- 矢印 -->
            <div class="flex items-center justify-center text-gray-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>

            <!-- 終了日 -->
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1.5">
                <span class="inline-block w-2 h-2 rounded-full bg-red-400 mr-1.5"></span>終了日
              </label>
              <input
                  v-model="draftEndDate"
                  type="date"
                  :min="draftStartDate"
                  class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-500 transition-colors duration-150"
              />
            </div>
          </div>

          <!-- Preview hasil -->
          <div v-if="draftStartDate && draftEndDate" class="mt-4 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2.5 text-xs text-indigo-700 font-medium">
            {{ formatJpDate(draftStartDate) }} ー {{ formatJpDate(draftEndDate) }}
          </div>

          <!-- Buttons -->
          <div class="flex gap-2 mt-5">
            <button
                @click="closeDateModal"
                class="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-150"
            >キャンセル</button>
            <button
                @click="confirmDateModal"
                :disabled="!draftStartDate || !draftEndDate"
                class="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              確認する
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- ── Modal Password ─────────────────────────────────────────────────── -->
  <Teleport to="body">
    <Transition name="modal">
      <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @keydown="onModalKeydown"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"/>

        <!-- Modal box -->
        <div
            class="modal-box relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6"
            :class="{ 'shake': isShaking }"
        >
          <!-- Header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-base font-bold text-gray-900">認証が必要です</h3>
              <p class="text-xs text-gray-500">進捗を保存するにはパスワードを入力してください</p>
            </div>
          </div>

          <!-- Project info (ringkasan apa yang akan disimpan) -->
          <div class="bg-gray-50 rounded-xl px-4 py-3 mb-5 text-sm">
            <p class="text-gray-500 text-xs mb-1">保存内容</p>
            <p class="font-semibold text-gray-800">{{ project?.name }}</p>
            <p v-if="pendingSaveType === 'date' || pendingSaveType === 'both'" class="text-gray-500 text-xs mt-0.5">
              期間: <span class="font-semibold text-gray-700">{{ formatJpDate(draftStartDate) }} ー {{ formatJpDate(draftEndDate) }}</span>
            </p>
            <p v-if="pendingSaveType === 'progress' || pendingSaveType === 'both' || (!pendingSaveType && isDirty)" class="text-gray-500 text-xs mt-0.5">
              進捗: <span class="font-semibold" :style="{ color: progressColor(project?.draft) }">{{ project?.draft }}%</span>
              ({{ statusLabel(project?.draft) }})
            </p>
          </div>

          <!-- Password input -->
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">パスワード</label>
          <div class="relative">
            <input
                id="pw-input"
                v-model="passwordInput"
                :type="showPassword ? 'text' : 'password'"
                placeholder="パスワードを入力..."
                class="w-full rounded-xl border px-4 py-2.5 text-sm pr-10 outline-none transition-colors duration-150"
                :class="passwordError
                ? 'border-red-400 bg-red-50 focus:border-red-500'
                : 'border-gray-300 bg-white focus:border-blue-500'"
                @keydown.enter="confirmSave"
            />
            <!-- Toggle show/hide password -->
            <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                tabindex="-1"
            >
              <!-- Mata buka -->
              <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <!-- Mata tutup -->
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
            </button>
          </div>

          <!-- Pesan error -->
          <Transition name="fade">
            <p v-if="passwordError" class="mt-2 text-xs text-red-600 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ passwordError }}
            </p>
          </Transition>

          <!-- Buttons -->
          <div class="flex gap-2 mt-5">
            <button
                @click="closeModal"
                class="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-150"
            >キャンセル</button>
            <button
                @click="confirmSave"
                class="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150"
            >確認して保存</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <BaseFooterHome/>
</template>
