import './App.css'
import Left from './components/Left'
import Top from './components/Top'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [main, setMain] = useState('Skills')

  return (
    <div className="App">
      <Top />
      <Left setMain={setMain} />
      <Main main={main} />
    </div>
  )
}

export default App
