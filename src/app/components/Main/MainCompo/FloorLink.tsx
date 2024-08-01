import { changeFloor } from "@/app/features/Redux/floor/floorSlice";
import { useAppDispatch } from "@/app/features/Redux/hooks";
import React from "react";

const RoomNumbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, , 11, 12, 13, 14];

const FloorLink: React.FC = () => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <div className="font-bold text-2xl">フロア</div>
      <div className="flex justify-between gap-5">

      {RoomNumbers.map((roomNumber, index) => (
          <button
          key={index} 
            className="font-bold text-2xl hover:text-green-500 duration-500 cursor-pointer "
            onClick={()=>dispatch(changeFloor(roomNumber))}
          >
            <p>{roomNumber}F</p>
          </button>
      ))}
  </div>
    </div>
  );
};

export default FloorLink;
