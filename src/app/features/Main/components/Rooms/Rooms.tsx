"use client";

import { useAppDispatch } from "@/app/features/Redux/hooks";
import { openModal } from "@/app/features/Redux/toggle/toggleSlice";

interface RoomsProps {
  id: number;
  roomNumber: string;
  roomState: string;
  isConsec: boolean;
}

const Rooms:React.FC<RoomsProps> = ({ id, roomNumber, roomState, isConsec }) => {
  const dispatch = useAppDispatch();

  let color = "";
  if (roomState === "vacant") {
    color = "bg-white";
  } else if (roomState === "required") {
    color = "bg-red-400";
  } else if (roomState === "cleaning") {
    color = "bg-blue-400";
  } else if (roomState === "completed") {
    color = "bg-green-400";
  } else if (roomState === "unnecessary") {
    color = "bg-gray-400";
  }

  return (
    <div
      key={id}
      className={`${color} py-8 px-16 text-2xl font-semibold   border-black flex justify-center border-2  overflow-hidden rounded transition-all duration-300  hover:ring-4 hover:ring-green-600 hover:ring-offset-2 cursor-default`}
      onClick={() =>
        dispatch(openModal({ roomNumber: roomNumber, roomId: id }))
      }
    >
      <div className=" w-auto whitespace-nowrap ">
        <div> {roomNumber}</div>
        <div>
          {isConsec && roomState !== "white" ? (
            <p className="flex justify-center absolute px-1 bg-yellow-400 rounded-sm text-xl">
              連泊
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
