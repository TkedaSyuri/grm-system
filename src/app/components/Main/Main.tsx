"use client"
import React from 'react'
import StateSign from './MainCompo/StateSign'
import FloorTable from './MainCompo/FloorTable'
import FloorLink from './MainCompo/FloorLink'
import { Provider } from "react-redux";
import { store } from "../../features/Redux/store";






const Main: React.FC = () => {

  return (
    <Provider store={store}>
    <div className='mt-12'>
      <div>
        <StateSign />
      </div>
      <div className="py-14">
        <FloorTable />
      </div>
      <div >
        <FloorLink/>
      </div>
    </div>
    </Provider>

  )
}

export default Main