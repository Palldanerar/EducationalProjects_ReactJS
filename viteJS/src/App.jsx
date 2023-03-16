import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const addClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className='w-[400px] h-[200px] bg-slate-400 text-center rounded-2xl'>
        <h1 className="text-[24px] text-red-600 mt-9">{count}</h1>
        <Button click={addClick}/>
      </div>
    </div>
  )
}

export default App
