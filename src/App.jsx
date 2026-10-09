import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'

export default function App() {
  const { isDancing, toggle, dance, setDanceId, speed, setSpeedId } = useAnimation()

  return (
    <Layout>
      <DancingCat isDancing={isDancing} dance={dance} speed={speed} onToggle={toggle} />
      <AnimationControls
        isDancing={isDancing}
        onToggle={toggle}
        dance={dance}
        onDanceChange={setDanceId}
        speed={speed}
        onSpeedChange={setSpeedId}
      />
    </Layout>
  )
}
