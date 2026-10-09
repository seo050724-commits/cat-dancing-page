import { useCallback, useEffect, useState } from 'react'

export const DANCES = [
  { id: 'wiggle', label: '좌우 흔들기', emoji: '↔️' },
  { id: 'jump', label: '점프', emoji: '⬆️' },
  { id: 'spin', label: '회전', emoji: '🔄' },
  { id: 'groove', label: '그루브', emoji: '🎵' },
  { id: 'party', label: '파티 믹스', emoji: '🎉' },
]

export const SPEEDS = [
  { id: 'slow', label: '느리게', multiplier: 1.6 },
  { id: 'normal', label: '보통', multiplier: 1 },
  { id: 'fast', label: '빠르게', multiplier: 0.6 },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function useAnimation() {
  // 모션 감소 설정 사용자는 정지 상태로 시작
  const [isDancing, setIsDancing] = useState(() => !prefersReducedMotion())
  const [danceId, setDanceId] = useState(DANCES[0].id)
  const [speedId, setSpeedId] = useState('normal')

  const toggle = useCallback(() => setIsDancing((prev) => !prev), [])

  const changeSpeed = useCallback((step) => {
    setSpeedId((current) => {
      const index = SPEEDS.findIndex((s) => s.id === current)
      const next = Math.min(SPEEDS.length - 1, Math.max(0, index + step))
      return SPEEDS[next].id
    })
  }, [])

  // 키보드 단축키: Space 시작/정지, 1~5 춤 선택, ←/→ 속도 조절
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return
      const tag = event.target.tagName
      const onControl = tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT'

      if (event.code === 'Space' && !onControl) {
        event.preventDefault()
        toggle()
        return
      }
      const number = Number(event.key)
      if (number >= 1 && number <= DANCES.length) {
        setDanceId(DANCES[number - 1].id)
        setIsDancing(true)
        return
      }
      if (onControl && tag !== 'BUTTON') return
      if (event.key === 'ArrowRight') changeSpeed(1)
      if (event.key === 'ArrowLeft') changeSpeed(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggle, changeSpeed])

  const speed = SPEEDS.find((s) => s.id === speedId)
  const dance = DANCES.find((d) => d.id === danceId)

  return {
    isDancing,
    toggle,
    dance,
    setDanceId: (id) => {
      setDanceId(id)
      setIsDancing(true)
    },
    speed,
    setSpeedId,
  }
}
