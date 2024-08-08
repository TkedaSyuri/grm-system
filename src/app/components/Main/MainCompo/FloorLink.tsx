import { changeFloor } from "@/app/features/Redux/Floor/FloorSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import React from "react";

//フロアの階用の配列
const RoomNumbers  = Array.from({ length: 14 }, (_, i) => i + 1);

const FloorLink: React.FC = () => {
  const {floorNumber} = useAppSelector((state)=>state.floor)
  const dispatch = useAppDispatch();
  return (
    <div className="text-white grid gap-5">
      <div className="font-bold text-2xl border-b-2">現在のフロア: {floorNumber}F</div>
      <div className="flex justify-between gap-5">
        {RoomNumbers.map((roomNumber, index) => (
          <button
            key={index}
            className="font-bold text-2xl hover:text-green-500 duration-500 cursor-pointer "
            onClick={() => dispatch(changeFloor(roomNumber))}
          >
            <p>{roomNumber}F</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloorLink;
