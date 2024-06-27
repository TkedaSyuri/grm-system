import React from 'react'

const StateSign = () => {
  return (
    <div className="flex mt-24 justify-evenly">
    <div className="bg-white text-2xl py-2 px-6 border-2 border-black ">
      空室
    </div>
    <div className="bg-red-500 text-2xl text-white py-2 px-6 border-2 border-black ">
      在室中
    </div>
    <div className="bg-blue-500 text-2xl text-white py-2 px-6 border-2 border-black ">
      清掃中
    </div>
    <div className="bg-green-500 text-2xl text-white py-2 px-6 border-2 border-black ">
      清掃完了
    </div>
    <div className="bg-gray-500 text-2xl text-white py-2 px-6 border-2 border-black ">
      清掃不要
    </div>
  </div>
  )
}

export default StateSign