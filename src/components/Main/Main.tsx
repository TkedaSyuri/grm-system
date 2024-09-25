"use client"
import React from 'react'
import StateSign from '../StateBar/StateSign'
import FloorTable from '@/components/FloorTable/FloorTable'
import FloorLink from '../FloorLink/FloorLink'
import Link from 'next/link'



const Main: React.FC = () => {
  return (
    <div className='mt-12 '>
      <div className='font-semibold text-white flex justify-end pb-2 '>
        <Link href="/login" className='border-b hover:text-green-400 duration-300 '
        >
          スタッフはこちら
        </Link>
        </div>
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