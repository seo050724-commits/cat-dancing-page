import { DANCES, SPEEDS } from '../hooks/useAnimation'

export default function AnimationControls({
  isDancing,
  onToggle,
  dance,
  onDanceChange,
  speed,
  onSpeedChange,
}) {
  return (
    <section className="controls" aria-label="애니메이션 제어">
      <button
        type="button"
        className={`play-button ${isDancing ? 'is-on' : ''}`}
        onClick={onToggle}
        aria-pressed={isDancing}
      >
        <span aria-hidden="true">{isDancing ? '⏸' : '▶'}</span>
        {isDancing ? '멈추기' : '춤추기'}
      </button>

      <fieldset className="control-group">
        <legend>춤 동작</legend>
        <div className="chips">
          {DANCES.map((d, i) => (
            <button
              key={d.id}
              type="button"
              className="chip"
              aria-pressed={dance.id === d.id}
              onClick={() => onDanceChange(d.id)}
            >
              <span aria-hidden="true">{d.emoji}</span> {d.label}
              <kbd aria-hidden="true">{i + 1}</kbd>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="control-group">
        <legend>속도</legend>
        <div className="chips">
          {SPEEDS.map((s) => (
            <button
              key={s.id}
              type="button"
              className="chip"
              aria-pressed={speed.id === s.id}
              onClick={() => onSpeedChange(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="hint">
        고양이를 누르거나 <kbd>Space</kbd>로 시작/정지 · <kbd>1</kbd>–<kbd>5</kbd> 춤 선택 ·{' '}
        <kbd>←</kbd>/<kbd>→</kbd> 속도
      </p>
    </section>
  )
}
