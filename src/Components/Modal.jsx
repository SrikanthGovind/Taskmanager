import React, { useImperativeHandle } from 'react'
import {createPortal} from 'react-dom'
import { forwardRef,useRef } from 'react'

const Modal=forwardRef(function Modal(_,ref) {
    const dialog=useRef()

    useImperativeHandle(ref,()=>{
          return{
            open(){
              dialog.current.showModal()
            }
          }
    })
    
  return (createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
          <h1 className='text-red-600'>  Please Enter all the fields !!!</h1>
          <form method='dialog' className="mt-4 text-right">
             <button
             className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
             Close</button>
          </form>
    </dialog>
  ,document.getElementById('modal-root')))
})

export default Modal;