const apiUrl = import.meta.env.VITE_API_URL || "/api"

export function useLocalStorage() {
    async function saveOne(id, progress) {
        const res = await fetch(`${apiUrl}/projects/${id}/progress`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ progress })
        })
        if (!res.ok) {
            throw new Error(`Failed to save progress (${res.status})`)
        }
    }

    async function getOne(id, defaultValue = 0) {
        try {
            const res = await fetch(`${apiUrl}/projects/${id}/progress`)
            if (!res.ok) {
                return defaultValue
            }
            const data = await res.json()
            return data.data?.progress ?? defaultValue
        } catch {
            return defaultValue
        }
    }

    return { saveOne, getOne }
}