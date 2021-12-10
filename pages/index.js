import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState(1)
  
  function click() {
    setState(Math.floor((Math.random() * 10) + 1))
  }

  return (
    <div>
      {state}
      <button onClick = {click}>
        button   
      </button>
    </div>
  )
}
