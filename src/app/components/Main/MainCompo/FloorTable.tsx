"use client";

import { useGetData } from "@/app/features/hooks/useGetData";
import { useAppSelector } from "@/app/features/Redux/hooks";
import Modal from "@/app/features/Redux/Modal/Modal";
import { Rooms } from "@/app/features/Types";
import React from "react";
import Room from "./Room";

const FloorTable: React.FC = () => {
  //ModalSliceから値を取得する
  const { isOpen } = useAppSelector((state) => state.modal);
    //FloorSliceから値を取得する
  const { floorData, floorNumber } = useAppSelector((state) => state.floor);

  //フロアのデータを取得
  const { isLoading, error } = useGetData(floorNumber);

  if (isLoading)
    return (
      <div className="font-bold text-white text-4xl flex">
        フロアのデータを取得中...
        <div className="animate-ping w-8 h-8 bg-blue-600 rounded-full"></div>
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {isOpen && <Modal />}
      <div className=" flex justify-strech">
        <div className="grid grid-cols-5 gap-4">
          {floorData.map((roomData: Rooms) => (
            <Room
              key={roomData.id}
              id={roomData.id}
              roomNumber={roomData.roomNumber}
              roomState={roomData.roomState}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorTable;
