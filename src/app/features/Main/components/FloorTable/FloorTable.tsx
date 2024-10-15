"use client";

import { useGetData } from "@/app/features/Main/hooks/useGetData";
import { useAppSelector } from "@/app/features/Redux/hooks";
import { Rooms } from "@/app/features/Main/Types";
import Room from "../Room/Room";
import Modal from "../Modal/Modal";

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
      {isModalOpen && <Modal />}
      <div className=" flex justify-strech">
        <div className="grid grid-cols-5 gap-4">
          {floorData.map((roomData: Rooms) => (
            <Room
              key={roomData.id}
              id={roomData.id}
              roomNumber={roomData.roomNumber}
              roomState={roomData.roomState}
              isConsec={roomData.is_ConsecRoom}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorTable;
