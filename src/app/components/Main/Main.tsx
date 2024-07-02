"use client"

import React from 'react'
import StateSign from './MainCompo/StateSign'
import FloorTable from './MainCompo/FloorTable'
import FloorLink from './MainCompo/FloorLink'
import { useAppDispatch, useAppSelector } from '@/app/features/Redux/store'
import Modal from '@/app/features/Redux/Modal/Modal'


const Main = () => {

  const {isOpen} = useAppSelector((state)=>state.ModalReducer)

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