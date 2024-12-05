import React from 'react'

export default function Noprojectselected({handlecreateproject}) {
  return (
    <div className="mt-24 text-center w-2/3">
        <h1 className="text-xl font-bold text-stone-700 my-4"> No project selected Here...</h1>
        <h3 className="text-md text-stone-700 my-4"> Click here to start creating projects</h3>
        <p className='mt-8'>
        <button 
        onClick={handlecreateproject} 
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" 
        >
                Create Project
            </button>
        </p>
    </div>
  )
}
