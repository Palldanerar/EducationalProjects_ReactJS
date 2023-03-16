import React from 'react'

export default function Button({click}) {
  return (
    <button
    className="w-[120px] h-20[px] 
    bg-green-400 text-lg
    hover:bg-green-600 
    transition ease rounded-md
    mt-12"
    onClick={click}
    >
    Click
    </button>
  )
}
