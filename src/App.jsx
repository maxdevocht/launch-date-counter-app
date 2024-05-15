import LaunchDateCounter from './components/LaunchDateCounter'
import './App.css'
import './index.css'

function App() {

  const targetDate = new Date(2024, 5, 21, 12, 0, 0);

  return (
    <div>
      <LaunchDateCounter targetDate={targetDate} />
    </div>
  )
}

export default App
