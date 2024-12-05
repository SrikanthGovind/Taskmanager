import React from 'react'

export default function Sidebar({handlecreateproject,projects,Showproject}) {
  return (
<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
   <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
         <div>
         <button 
         className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" 
         onClick={handlecreateproject}>
         + Add Projects
         </button>
         </div>
         <ul className='mt-8'>
            {projects.map((ele)=>{
              return( <li key={ele.id}>
                  <button
                  onClick={()=>{Showproject(ele.id)}}
                  className='w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
                  >{ele.title}</button>
              </li>)
            })}
         </ul>
    </aside>
  )
}
