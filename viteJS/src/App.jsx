import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className='w-[400px] h-[200px] bg-slate-400'>
        <h1>{count}</h1>
        <Button />
      </div>
    </div>
  )
}

export default App
