import React, { useState } from "react";
import { Mycontext } from "../App";
import { useContext } from "react";

export default function Tasks({ProjectId}) {
  const {change,handleAddtask,create,ClearTask}=useContext(Mycontext);
   const{Tasks}=create;
  console.log(Tasks)

  let rendertask=Tasks.filter((ele)=>{
      return ele.projectId===ProjectId
  })


  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>       
      <div className="flex items-center gap-4">
        <input
        ref={change}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
        ></input>
         <button 
         onClick={handleAddtask} 
       className="text-stone-700 hover:text-stone-950">Add Task</button>
      </div>

{rendertask.length===0?
    <p className="text-stone-800 my-4"> NO Tasks Have Been Set Yet....</p>:
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
      {rendertask.map((ele)=>{
      return(
        <li 
        key={ele.id}
         className="flex justify-between my-4 ">
         <span>{ele.title}</span>
          <button
          onClick={()=>ClearTask(ele.id)}
          className="text-stone-700 hover:text-red-500">Clear</button>
        </li>)
      })}
      </ul>
 }
    </div>
  );
}

