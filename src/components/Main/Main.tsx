"use client"
import React from 'react'
import StateSign from './MainCompo/StateSign'
import FloorTable from './MainCompo/FloorTable'
import FloorLink from './MainCompo/FloorLink'



const Main: React.FC = () => {
  return (
    <div className='mt-12 '>
      <div >
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