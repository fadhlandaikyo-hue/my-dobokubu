// src/composables/useProgressColor.js
// Returns color and status label based on the progress value.

export function useProgressColor() {
    /**
     * Returns a hex color string depending on progress value:
     *  0–10   → red
     * 11–25   → orange
     * 26–50   → yellow
     * 51–100  → blue
     */
    function progressColor(value) {
        if (value <= 10) return '#f87171'
        if (value <= 25) return '#fb923c'
        if (value <= 50) return '#facc15'
        return '#3b82f6'
    }

    /**
     * Returns a Japanese status label based on progress value.
     */
    function statusLabel(value) {
        if (value >= 100) return '完了'
        if (value > 50)   return '進行中'
        if (value > 25)   return '進行中'
        if (value > 0)   return '計画'
        return '計画'
    }

    /**
     * Returns a badge background color based on progress value.
     */
    function badgeColor(value) {
        if (value >= 100) return '#22c55e'
        if (value > 50)   return '#22c55e'
        if (value > 25)   return '#eab308'
        if (value > 10)   return '#f97316'
        return '#ef4444'
    }

    return { progressColor, statusLabel, badgeColor }
}
