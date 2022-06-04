import './App.css'
import Left from './components/Left'
import Top from './components/Top'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [main, setMain] = useState('')

  return (
    <div className="App">
      <Left setMain={setMain} />
      <Top />
      <Main main={main} />
    </div>
  )
}

export default App
