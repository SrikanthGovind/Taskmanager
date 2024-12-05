// harmonious-bublanina-96fe51.netlify.app

import Sidebar from "./Components/Sidebar";
import Newproject from "./Components/Newproject";
import Noprojectselected from "./Components/Noprojectselected";
import { useState } from "react";
import Selectedproject from "./Components/Selectedproject";
import { createContext } from 'react'
import { useRef } from "react";

export const Mycontext=createContext();

function App() {

  const change=useRef('');

  const [create,setcreate]=useState({
    SelectedProjectId:undefined,
    Projects:[],
    Tasks:[]
  });

  function handlecreateproject(){
      setcreate(prev=>{
        return{
        ...prev,
        SelectedProjectId:null
        }
      })
  }

  function AddingProjects(projectdata){
       setcreate((prev)=>{
          return {
            ...prev,
            Projects:[...prev.Projects,projectdata]
          }
       })
  }

  function Showproject(id){
      setcreate((prev)=>{
           return{
            ...prev,
            SelectedProjectId:id
           }
      })
  }
  
  function handlecancel(){
    setcreate(prev=>{
      return{
      ...prev,
      SelectedProjectId:undefined
      }
    })
  }

  function Deleteproject(id){
     let filteredprojects=create.Projects.filter((ele)=>{
      return ele.id!== id
     })
    setcreate(prev=>{
      return{
      ...prev,
      SelectedProjectId:undefined,
         Projects:filteredprojects
      }
    })
  }
   
  function handleAddtask(){
    const title=change.current.value
    setcreate((prev)=>{
       const taskdata={
         id:Math.random(),
         title:title,
         projectId:prev.SelectedProjectId        
       }

       return{
          ...prev,
          Tasks:[...prev.Tasks,taskdata]
       }
       }
    )

    change.current.value = "";
}

function ClearTask(id){
  let filtertask= create.Tasks.filter((ele)=>{
      return ele.id!==id
   })
   setcreate((prev)=>{
    return{
      ...prev,
      Tasks:filtertask
    }
   })
}
  
let selectedproject=create.Projects.find((ele)=>{
    return ele.id===create.SelectedProjectId 
})

let render=<Selectedproject  project={selectedproject} Deleteproject={Deleteproject}/>

  if(create.SelectedProjectId===null){
    render=<Newproject  addproject={AddingProjects} handlecancel={handlecancel}/>
  }
  else if(create.SelectedProjectId===undefined){
    render=<Noprojectselected handlecreateproject={handlecreateproject}/>
  }

  return (
    <>
    <Mycontext.Provider value={{change,handleAddtask,create,ClearTask}}>
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handlecreateproject={handlecreateproject} projects={create.Projects} Showproject={Showproject} /> 
      {render}
      </main>
      </Mycontext.Provider>
    </>
  );
}

export default App;
