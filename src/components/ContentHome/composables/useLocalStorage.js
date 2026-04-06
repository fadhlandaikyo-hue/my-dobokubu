// src/composables/useLocalStorage.js
// Menyimpan dan memuat progress dari localStorage.

const STORAGE_KEY = 'construction_progress'

export function useLocalStorage() {
    /**
     * Memuat semua progress yang tersimpan.
     * Mengembalikan object { id: progress } atau {} jika belum ada.
     */
    function loadAll() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY)
            return raw ? JSON.parse(raw) : {}
        } catch {
            return {}
        }
    }

    /**
     * Menyimpan progress satu proyek ke localStorage.
     * @param {number|string} id       - ID proyek
     * @param {number}        progress - Nilai progress 0–100
     */
    function saveOne(id, progress) {
        const all = loadAll()
        all[id]   = progress
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    }

    /**
     * Mengambil progress satu proyek.
     * Mengembalikan defaultValue jika belum pernah disimpan.
     * @param {number|string} id           - ID proyek
     * @param {number}        defaultValue - Nilai awal jika belum ada di storage
     */
    function getOne(id, defaultValue = 0) {
        const all = loadAll()
        return all[id] ?? defaultValue
    }

    return { saveOne, getOne, loadAll }
}