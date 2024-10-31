import React from 'react'

const StateSign= () => {
  return (
    <div className="flex justify-between">
    <div className="bg-white font-semibold text-xl py-2  px-10 border-2 border-black ">
      空室
    </div>
    <div className="bg-red-500 font-semibold text-xl text-white py-2  px-10  border-2 border-black ">
      在室中
    </div>
    <div className="bg-blue-500 font-semibold text-xl text-white py-2  px-10  border-2 border-black ">
      清掃中
    </div>
    <div className="bg-green-500 font-semibold text-xl text-white py-2 px-6 border-2 border-black ">
      清掃完了
    </div>
    <div className="bg-gray-500 font-semibold text-xl text-white py-2 px-6 border-2 border-black ">
      清掃不要
    </div>
  </div>
  )
}

export default StateSign