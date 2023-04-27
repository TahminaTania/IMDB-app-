import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center'>
      <div>
        <h1 className="text-5xl font-extrabold text-red-500 py-20">loading...</h1>
        <img src='spinner.svg'/>
      </div>
    </div>
  )
}
