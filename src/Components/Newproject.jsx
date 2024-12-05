import React, { useRef, useState } from 'react'
import Modal from './Modal';

export default function Newproject({addproject,handlecancel}) {
   
   const title=useRef('');
   const description=useRef('');
   const date=useRef('');
   const dialog=useRef();

   function handleSave(){
      let newtitle=title.current.value
      let newdescription=description.current.value
      let newdate=date.current.value

      if(newtitle ==='' || newdescription==='' || newdate===''){
           dialog.current.open();
           return;
      }

     const projectdate={
         id:Math.random(),
         title:newtitle,
         description:newdescription,
         date:newdate
       }  
      addproject(projectdate)
      title.current.value='';
      description.current.value='';
      date.current.value='';

   }

  return (
   <>
   <Modal ref={dialog} />
    <div className="w-[35rem] mt-16">

    <menu className="flex items-center justify-end gap-4 my-4">
    <li>
      <button 
      onClick={handlecancel}
      className="text-stone-800 hover:text-stone-950">Cancel</button>
    </li>
    <li>
      <button 
      onClick={handleSave}
      className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
    </li>
    </menu>

         <p className="flex flex-col gap-1 my-4">
            <label>Enter Project Title</label>
            <input 
            ref={title}
            type='text' 
            required
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"            />
         </p>
         <p className="flex flex-col gap-1 my-4">
            <label>Enter Project Description</label>
            <textarea 
            ref={description}
            type='text'
             required
             className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"             ></textarea>
         </p>
         <p className="flex flex-col gap-1 my-4">
            <label>Enter Date</label>
            <input 
            ref={date}
            type='date'
             required
             className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"            />
         </p>

    </div>
    </>
  )
}
