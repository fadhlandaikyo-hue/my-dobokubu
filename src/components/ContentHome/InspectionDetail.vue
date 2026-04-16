<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BaseNavbarHome from "../HomeComponents/NavbarHome.vue";
import BaseFooterHome from "../HomeComponents/FooterHome.vue";
import BaseButtonBack from "../Utilities/UtilitiesHome/ButtonBack.vue";
import BaseButtonBackInspection from "../Utilities/UtilitiesHome/ButtonBackInspection.vue";

const route = useRoute();
const projectId = Number(route.params.id);
const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const constructions = [
  { id: 1, code: "", name: "美保(5)格納庫等新設舗装工事", type: "道路", contractor: "小島" },
  { id: 2, code: "", name: "美保(5)格納庫等新設舗装工事", type: "道路", contractor: "池岡、内田" },
  { id: 3, code: "", name: "奥陰田3地区急傾斜地崩壊 対策工事その2", type: "砂防", contractor: "長谷川、岩田ひ" },
  { id: 4, code: "", name: "中山3期営農飲雑用水 (高田工区)工事", type: "管路工", contractor: "岩田こ" },
  { id: 5, code: "", name: "車尾五丁目ほか枝線工事", type: "枝線", contractor: "西中" },
  { id: 6, code: "", name: "県道西伯伯太線(宮ノ前歩道橋) 橋梁塗装工事(2工区)(補助)", type: "道橋", contractor: "今中" },
  { id: 7, code: "", name: "外港中野地区承水路護岸補修工事 (老朽化対策) (3工区)", type: "老朽化対策", contractor: "篠原" },
  { id: 8, code: "", name: "船越地区急傾斜地崩壊対策工事 (2工区)(交付金)(国補正)", type: "崩壊対策", contractor: "坪倉" },
  { id: 9, code: "", name: "県道大山寺岸本線(小林工区) 電線共同溝設置工事(2工区)(補助)", type: "共同溝設置", contractor: "西本" },
  { id: 10, code: "", name: "佐陀川砂防堰堤(K1)工事(9工区) (補助)(国補正)", type: "砂防堰堤", contractor: "菊川" },
  { id: 11, code: "", name: "奥山川砂防堰堤工事(4工区) (交付金)(国補正)", type: "砂防堰堤", contractor: "内田" },
  { id: 12, code: "", name: "鍵掛峠道路新屋地区 第13改良工事", type: "道路", contractor: "池岡" }
];

const project = constructions.find((c) => c.id === projectId);

const typeBadge = {
  Civil: "bg-green-100 text-green-700",
  Road: "bg-blue-100 text-blue-700",
  Slope: "bg-cyan-100 text-cyan-700",
  River: "bg-amber-100 text-amber-700"
};

const sectionMeta = {
  chukan: {
    label: "中間検査",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    badgeClass: "text-blue-700 bg-blue-50 border-blue-200",
    panelClass: "bg-blue-50 border-blue-200",
    focusClass: "focus:border-blue-400",
    postBadgeClass: "bg-blue-50 text-blue-600 border-blue-100",
    commentHoverClass: "hover:text-blue-600"
  },
  kansei: {
    label: "完成検査",
    buttonClass: "bg-emerald-600 hover:bg-emerald-700",
    badgeClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
    panelClass: "bg-emerald-50 border-emerald-200",
    focusClass: "focus:border-emerald-400",
    postBadgeClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    commentHoverClass: "hover:text-emerald-600"
  }
};

const sectionOrder = ["chukan", "kansei"];

const posts = ref({
  kansei: [],
  chukan: []
});

const isLoadingPosts = ref(false);
const loadPostsError = ref("");
const newPostText = ref({ kansei: "", chukan: "" });
const newPostAuthor = ref({ kansei: "", chukan: "" });
const showPostForm = ref({ kansei: false, chukan: false });
const commentText = ref({});
const commentAuthor = ref({});
const showCommentBox = ref({});

async function requestApi(path, { method = "GET", body } = {}) {
  const token = localStorage.getItem("token") || "";
  const headers = { Accept: "application/json" };

  if (token) {
    headers.Authorization = token;
  }

  if (body) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(responseBody.errors || `Request gagal (${response.status})`);
  }

  return responseBody;
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("ja-JP", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function mapComment(comment) {
  return {
    id: comment.id,
    author: comment.author,
    date: formatDate(comment.created_at),
    text: comment.text
  };
}

function mapPost(post) {
  return {
    id: post.id,
    author: post.author,
    date: formatDate(post.created_at),
    text: post.text,
    comments: (post.comments || []).map(mapComment)
  };
}

function applyPostsFromApi(postList) {
  const grouped = { kansei: [], chukan: [] };

  for (const post of postList || []) {
    if (grouped[post.section]) {
      grouped[post.section].push(mapPost(post));
    }
  }

  posts.value = grouped;
}

async function loadPosts() {
  if (!projectId || Number.isNaN(projectId)) {
    posts.value = { kansei: [], chukan: [] };
    return;
  }

  isLoadingPosts.value = true;
  loadPostsError.value = "";

  try {
    const result = await requestApi(`/inspection-posts?project_id=${projectId}`);
    applyPostsFromApi(result.data || []);
  } catch (error) {
    posts.value = { kansei: [], chukan: [] };
    loadPostsError.value = error.message || "投稿データの取得に失敗しました";
  } finally {
    isLoadingPosts.value = false;
  }
}

function togglePostForm(section) {
  showPostForm.value[section] = !showPostForm.value[section];

  if (!showPostForm.value[section]) {
    newPostText.value[section] = "";
    newPostAuthor.value[section] = "";
  }
}

async function submitPost(section) {
  const text = newPostText.value[section].trim();
  const author = newPostAuthor.value[section].trim() || "Anonymous";

  if (!text) {
    return;
  }

  try {
    const result = await requestApi("/inspection-posts", {
      method: "POST",
      body: {
        project_id: projectId,
        section,
        author,
        text
      }
    });

    if (result && result.data && result.data.id) {
      posts.value[section].unshift(mapPost(result.data));
    } else {
      await loadPosts();
    }

    newPostText.value[section] = "";
    newPostAuthor.value[section] = "";
    showPostForm.value[section] = false;
  } catch (error) {
    alert(error.message || "投稿の追加に失敗しました");
  }
}

function commentKey(section, postId) {
  return `${section}-${postId}`;
}

function toggleComment(section, postId) {
  const key = commentKey(section, postId);
  showCommentBox.value[key] = !showCommentBox.value[key];

  if (!showCommentBox.value[key]) {
    commentText.value[key] = "";
    commentAuthor.value[key] = "";
  }
}

async function submitComment(section, postId) {
  const key = commentKey(section, postId);
  const text = (commentText.value[key] || "").trim();
  const author = (commentAuthor.value[key] || "").trim() || "Anonymous";

  if (!text) {
    return;
  }

  const post = posts.value[section].find((item) => item.id === postId);
  if (!post) {
    return;
  }

  try {
    const result = await requestApi(`/inspection-posts/${postId}/comments`, {
      method: "POST",
      body: {
        section,
        author,
        text
      }
    });

    if (result && result.data && result.data.id) {
      post.comments.push(mapComment(result.data));
    } else {
      await loadPosts();
    }

    commentText.value[key] = "";
    commentAuthor.value[key] = "";
    showCommentBox.value[key] = false;
  } catch (error) {
    alert(error.message || "コメントの追加に失敗しました");
  }
}

async function deletePost(section, postId) {
  if (!window.confirm("この投稿と関連コメントを削除しますか？")) {
    return;
  }

  try {
    await requestApi(`/inspection-posts/${postId}?section=${encodeURIComponent(section)}`, {
      method: "DELETE"
    });

    posts.value[section] = posts.value[section].filter((item) => item.id !== postId);
  } catch (error) {
    alert(error.message || "投稿の削除に失敗しました");
  }
}

async function deleteComment(section, postId, commentId) {
  if (!window.confirm("このコメントを削除しますか？")) {
    return;
  }

  const post = posts.value[section].find((item) => item.id === postId);
  if (!post) {
    return;
  }

  try {
    await requestApi(`/inspection-posts/${postId}/comments/${commentId}?section=${encodeURIComponent(section)}`, {
      method: "DELETE"
    });

    post.comments = post.comments.filter((item) => item.id !== commentId);
  } catch (error) {
    alert(error.message || "コメントの削除に失敗しました");
  }
}

function initials(name) {
  return (name || "A").slice(0, 1).toUpperCase();
}

const avatarColors = ["bg-blue-500", "bg-indigo-500", "bg-purple-500", "bg-teal-500", "bg-rose-500", "bg-amber-500"];

function avatarColor(name) {
  let hash = 0;
  for (const char of name || "A") {
    hash = (hash * 31 + char.charCodeAt(0)) % avatarColors.length;
  }
  return avatarColors[hash];
}

onMounted(loadPosts);
</script>

<template>
  <BaseNavbarHome />

  <div v-if="!project" class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <p class="text-xl font-bold text-gray-600 mb-4">工事が見つかりません</p>
      <BaseButtonBack />
    </div>
  </div>

  <div v-else class="min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <BaseButtonBackInspection />

      <div class="mt-6 mb-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center gap-5">
        <div class="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="text-xs font-mono text-gray-400">{{ project.code }}</span>
            <span :class="['text-xs font-semibold px-2 py-0.5 rounded-full', typeBadge[project.type] || 'bg-gray-100 text-gray-600']">
              {{ project.type }}
            </span>
          </div>
          <h1 class="text-lg font-bold text-gray-900 leading-snug">{{ project.name }}</h1>
          <p class="text-sm text-gray-500 mt-0.5">担当者: {{ project.contractor }}</p>
        </div>
      </div>

      <div v-if="isLoadingPosts" class="mb-5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
        投稿を読み込み中...
      </div>

      <div v-if="loadPostsError" class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {{ loadPostsError }}
      </div>

      <div class="space-y-8">
        <section v-for="section in sectionOrder" :key="section" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div class="flex items-center gap-3 mb-4">
            <h2 class="text-base font-bold text-gray-800">{{ sectionMeta[section].label }}</h2>
            <span :class="['ml-auto text-xs font-semibold border px-2.5 py-0.5 rounded-full', sectionMeta[section].badgeClass]">
              {{ posts[section].length }} 件
            </span>
            <button
              @click="togglePostForm(section)"
              :class="['flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-colors', sectionMeta[section].buttonClass]"
            >
              追加
            </button>
          </div>

          <Transition name="slide-down">
            <div v-if="showPostForm[section]" :class="['mb-4 border rounded-xl p-4 space-y-3', sectionMeta[section].panelClass]">
              <input
                v-model="newPostAuthor[section]"
                type="text"
                placeholder="投稿者名"
                :class="['w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition-colors', sectionMeta[section].focusClass]"
              />
              <textarea
                v-model="newPostText[section]"
                rows="3"
                placeholder="投稿内容を入力..."
                :class="['w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition-colors resize-none', sectionMeta[section].focusClass]"
              />
              <div class="flex gap-2 justify-end">
                <button
                  @click="togglePostForm(section)"
                  class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  @click="submitPost(section)"
                  :class="['px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-colors', sectionMeta[section].buttonClass]"
                >
                  投稿
                </button>
              </div>
            </div>
          </Transition>

          <div class="space-y-4">
            <div v-if="posts[section].length === 0" class="py-8 text-center text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <p class="text-sm">投稿がありません</p>
            </div>

            <div v-for="post in posts[section]" :key="post.id" class="rounded-xl border border-gray-200 overflow-hidden">
              <div class="p-4">
                <div class="flex items-center gap-3 mb-3">
                  <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0', avatarColor(post.author)]">
                    {{ initials(post.author) }}
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">{{ post.author }}</p>
                    <p class="text-xs text-gray-400">{{ post.date }}</p>
                  </div>
                  <div class="ml-auto flex items-center gap-2">
                    <span :class="['text-xs font-semibold px-2 py-0.5 rounded-full border', sectionMeta[section].postBadgeClass]">
                      {{ sectionMeta[section].label }}
                    </span>
                    <button
                      @click="deletePost(section, post.id)"
                      class="text-xs font-semibold px-2 py-0.5 rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      削除
                    </button>
                  </div>
                </div>
                <p class="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{{ post.text }}</p>
              </div>

              <div v-if="post.comments.length" class="border-t border-gray-100 bg-gray-50 px-4 py-3 space-y-3">
                <div v-for="comment in post.comments" :key="comment.id" class="flex gap-3">
                  <div :class="['w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5', avatarColor(comment.author)]">
                    {{ initials(comment.author) }}
                  </div>
                  <div class="flex-1 bg-white rounded-xl border border-gray-200 px-3 py-2">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-semibold text-gray-700">{{ comment.author }}</span>
                      <span class="text-xs text-gray-400">{{ comment.date }}</span>
                      <button
                        @click="deleteComment(section, post.id, comment.id)"
                        class="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        削除
                      </button>
                    </div>
                    <p class="text-xs text-gray-600 leading-relaxed whitespace-pre-line">{{ comment.text }}</p>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-100 px-4 py-2.5">
                <button
                  @click="toggleComment(section, post.id)"
                  :class="['flex items-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors', sectionMeta[section].commentHoverClass]"
                >
                  {{ post.comments.length > 0 ? `コメント (${post.comments.length})` : "コメント追加" }}
                </button>
              </div>

              <Transition name="slide-down">
                <div v-if="showCommentBox[commentKey(section, post.id)]" class="border-t border-gray-100 bg-gray-50 px-4 py-3 space-y-2">
                  <input
                    v-model="commentAuthor[commentKey(section, post.id)]"
                    type="text"
                    placeholder="名前"
                    class="w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-blue-400 transition-colors"
                  />
                  <textarea
                    v-model="commentText[commentKey(section, post.id)]"
                    rows="2"
                    placeholder="コメントを入力..."
                    class="w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-blue-400 transition-colors resize-none"
                  />
                  <div class="flex gap-2 justify-end">
                    <button
                      @click="toggleComment(section, post.id)"
                      class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      キャンセル
                    </button>
                    <button
                      @click="submitComment(section, post.id)"
                      :class="['px-2.5 py-1 text-xs font-semibold rounded-lg text-white transition-colors', sectionMeta[section].buttonClass]"
                    >
                      送信
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <BaseFooterHome />
</template>

<style scoped>

</style>
