"use client";

import { useGetFloor } from "@/app/features/hooks/useGetFloor";
import { useAppSelector } from "@/app/features/Redux/hooks";
import { Rooms } from "@/app/features/types";
import * as Main from "@/app/features/Main/Index"


const FloorTable: React.FC = () => {
  const { isRoomModalOpen } = useAppSelector((state) => state.toggle);
  const { isTaskModalOpen } = useAppSelector((state) => state.toggle);
  const { floorData} = useAppSelector((state) => state.floor);
  const { isLoading } = useGetFloor();

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
      {isRoomModalOpen && <Main.RoomModal />}
      {isTaskModalOpen && <Main.TaskModal />}
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
