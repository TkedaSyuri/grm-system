"use client"

import { useAppDispatch, useAppSelector } from '@/app/features/Redux/hooks';
import { openModal } from '@/app/features/Redux/modal/modalSlice';
import React from 'react'

interface RoomProps {
    id: number;
    roomNumber: string;
    roomState: string;
}


const Room: React.FC<RoomProps> = (props) => {
    const dispatch = useAppDispatch();
    const {id, roomNumber,roomState} = props;
    
  return (
    <div
    key={id}
    className={
      roomState === "white"
         ? `py-6 px-16 text-2xl font-semibold  bg-${roomState} border-black flex justify-center border-2 `
         : `py-6 px-16 text-2xl font-semibold bg-${roomState}-500 flex justify-center  border-2 border-black `
     }
     onClick={()=>dispatch(openModal(roomNumber))}
  >
    <div>
    {roomNumber}
    </div>
  </div>
)
}

export default Room