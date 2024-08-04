"use client"
import React from 'react'
import StateSign from '@/app/components/Main/MainCompo/StateSign'
import FloorLink from '@/app/components/Main/MainCompo/FloorLink'
import FloorTable from '@/app/components/Main/MainCompo/FloorTable'






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