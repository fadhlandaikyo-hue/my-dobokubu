import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // Ambil token dari storage saat pertama kali web dibuka
        token: localStorage.getItem('token') || null,
    }),
    actions: {
        // Fungsi saat login berhasil
        login(newToken) {
            this.token = newToken;
            localStorage.setItem('token', newToken);
        },
        // Fungsi saat logout
        logout() {
            this.token = null;
            localStorage.removeItem('token');
        }
    }
});
