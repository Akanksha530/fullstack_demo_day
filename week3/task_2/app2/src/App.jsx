import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('')
  function change(e)
  {
    setstat(e.target.value)
    console.log(stat);
  }
async function submitInput() {
      const response = await fetch('https://api.tvmaze.com/search/shows?=${stat}')
      const data = await response.json()
      console.log(data)
}
  return (
    <>
      <div style={{display:'flex', flexDirection:'row'}}>
      <input type="text" onChange={change} />
      <button onClick={()=>{submitInput}}>submit</button>
      </div>
    </>
  )
}

export default App
