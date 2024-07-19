"use client";

import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { openModal } from "@/app/features/Redux/modal/modalSlice";
import React from "react";

interface RoomProps {
  id: number;
  roomNumber: string;
  roomState: string;
}

const Room: React.FC<RoomProps> = (props) => {
  const dispatch = useAppDispatch();
  const { id, roomNumber, roomState } = props;

  let color = "";
  if (roomState === "white") {
    color = "bg-white";
  } else if (roomState === "red") {
    color = "bg-red-400";
  } else if (roomState === "blue") {
    color = "bg-blue-400";
  } else if (roomState === "green") {
    color = "bg-green-400";
  } else if (roomState === "gray") {
    color = "bg-gray-400";
  }

  return (
    <div
      key={id}
      className={`${color} py-6 px-16 text-2xl font-semibold   border-black flex justify-center border-2`}
      onClick={() => dispatch(openModal(roomNumber))}
    >
      <div>{roomNumber}</div>
    </div>
  );
};

export default Room;
