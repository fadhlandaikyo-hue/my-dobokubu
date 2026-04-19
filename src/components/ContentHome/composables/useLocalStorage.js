const apiUrl = import.meta.env.VITE_API_URL

export function useLocalStorage() {
    async function saveOne(id, progress) {
        await fetch(`${apiUrl}/projects/${id}/progress`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ progress })
        })
    }

    async function getOne(id, defaultValue = 0) {
        try {
            const res = await fetch(`${apiUrl}/projects/${id}/progress`)
            const data = await res.json()
            return data.data?.progress ?? defaultValue
        } catch {
            return defaultValue
        }
    }

    return { saveOne, getOne }
}