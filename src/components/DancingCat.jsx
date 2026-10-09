import catImage from '../assets/images/cat.svg'

const NOTES = ['♪', '♫', '♬', '♪']

export default function DancingCat({ isDancing, dance, speed, onToggle }) {
  const style = { '--speed': speed.multiplier }

  return (
    <div
      className={`stage ${isDancing ? 'is-dancing' : 'is-paused'}`}
      data-dance={dance.id}
      style={style}
    >
      <div className="notes" aria-hidden="true">
        {NOTES.map((note, i) => (
          <span key={i} className={`note note-${i + 1}`}>
            {note}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="cat-button"
        onClick={onToggle}
        aria-pressed={isDancing}
        aria-label={isDancing ? '고양이 춤 멈추기' : '고양이 춤추게 하기'}
      >
        <span className={`cat dance-${dance.id}`}>
          <img src={catImage} alt="" draggable="false" width="200" height="220" />
        </span>
      </button>

      <div className="shadow" aria-hidden="true" />

      <p className="visually-hidden" aria-live="polite">
        {isDancing ? `고양이가 ${dance.label} 춤을 추고 있어요` : '고양이가 쉬고 있어요'}
      </p>
    </div>
  )
}
