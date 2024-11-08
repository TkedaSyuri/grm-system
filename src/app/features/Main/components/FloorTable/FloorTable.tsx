"use client";

import { useGetData } from "@/app/features/hooks/useGetFloor";
import { useAppSelector } from "@/app/features/Redux/hooks";
import { Rooms } from "@/app/features/types";
import * as Main from "@/app/features/Main/Index"


const FloorTable: React.FC = () => {
  const { isModalOpen } = useAppSelector((state) => state.toggle);
  const { floorData, floorNumber } = useAppSelector((state) => state.floor);
  const { isLoading } = useGetData(floorNumber);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <div className="font-bold text-white text-4xl flex justify-normal items-center">
          <div className="animate-ping w-8 h-8 bg-blue-600 rounded-full"></div>
          <div>フロアのデータを取得中...</div>
        </div>
      </div>
    );

  return (
    <div>
      {isModalOpen && <Main.Modal />}
      <div className=" flex justify-strech">
        <div className="grid grid-cols-5 gap-4">
          {floorData.map((roomData: Rooms) => (
            <Main.Rooms
              key={roomData.id}
              id={roomData.id}
              roomNumber={roomData.roomNumber}
              roomState={roomData.roomState}
              isConsec={roomData.isConsecutiveNight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorTable;
