"use client"
import React from 'react'
import StateSign from './StateSign'
import FloorTable from './FloorTable'
import FloorLink from './FloorLink'



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