import { useState } from 'react'
import './App.css'

const apiData = {}

function App() {
  const [data, setData] = useState(apiData)

  return (
    <div style={{ margin: '0.5rem' }}>
      <h2>NextStage Kanban Board</h2>
    </div>
  )
}

export default App
