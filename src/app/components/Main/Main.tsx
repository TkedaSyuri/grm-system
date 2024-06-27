import React from 'react'
import StateSign from './MainCompo/StateSign'
import FloorTable from './MainCompo/FloorTable'
import FloorLink from './MainCompo/FloorLink'

const Main = () => {
  return (
    <div>
      <div  >
        <StateSign />
      </div>
      <div >
        <FloorTable />
      </div>
      <div>
        <FloorLink/>
      </div>
    </div>
  )
}

export default Main