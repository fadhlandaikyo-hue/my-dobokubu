export function useProgressColor() {
    function progressColor(value) {
        if (value <= 10) return '#f87171'
        if (value <= 25) return '#fb923c'
        if (value <= 50) return '#facc15'
        if (value === 100) return '#22c55e'
        return '#3b82f6'
    }

    function statusLabel(value) {
        if (value >= 100) return '完成'
        if (value > 25) return '進行中'
        return '計画'
    }

    function badgeColor(value) {
        if (value >= 100) return '#22c55e'
        if (value > 50) return '#3b82f6'
        if (value > 25) return '#eab308'
        if (value > 10) return '#f97316'
        return '#ef4444'
    }

    return { progressColor, statusLabel, badgeColor }
}
