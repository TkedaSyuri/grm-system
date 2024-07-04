"use client"

import React, { useEffect } from 'react'
import StateSign from './MainCompo/StateSign'
import FloorTable from './MainCompo/FloorTable'
import FloorLink from './MainCompo/FloorLink'
import { useAppSelector } from '@/app/features/Redux/hooks'
import Modal from '@/app/features/Redux/modal/Modal'


const Main: React.FC = () => {
  const fadeModal = ()=> !isOpen
useEffect(()=>{
  console.log("fslaj")
  window.addEventListener("mousedown",fadeModal)
})
  const {isOpen} = useAppSelector((state)=>state.modalReducer)

  return (
    <div className='mt-12'>
      {isOpen && <Modal />}
      <div className=''>
        <StateSign />
      </div>
      <div className="py-14">
        <FloorTable />
      </div>
      <div >
        <FloorLink/>
      </div>
    </div>
  )
}

export default Main