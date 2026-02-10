import { useState ,} from 'react'
import './App.css'

function App() {
  // let counter = 15
  const [counter, setCounter] = useState(15)

  const addValue = ()=>{
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Rucha aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
