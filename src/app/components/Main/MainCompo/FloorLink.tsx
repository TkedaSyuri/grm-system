import { changeFloor } from "@/app/features/Redux/floor/floorSlice";
import { useAppDispatch } from "@/app/features/Redux/hooks";
import React from "react";

const numbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, , 11, 12, 13, 14];

const FloorLink: React.FC = () => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <div className="font-bold text-2xl">フロア</div>
      <div className="flex justify-between gap-5">

      {numbers.map((number, index) => (
          <button
          key={index} 
            className="font-bold text-2xl hover:text-green-500 duration-500 cursor-pointer "
            onClick={()=>dispatch(changeFloor(number))}
          >
            {number}F
          </button>
      ))}
  </div>
    </div>
  );
};

export default FloorLink;
