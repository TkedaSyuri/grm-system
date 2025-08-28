"use client";

import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { openRoomModal } from "@/app/features/Redux/toggle/toggleSlice";

interface RoomsProps {
  id: number;
  roomNumber: string;
  roomState: string;
  isConsec: boolean;
}

const Rooms: React.FC<RoomsProps> = ({
  id,
  roomNumber,
  roomState,
  isConsec,
}) => {
  const dispatch = useAppDispatch();
  const { staff } = useAppSelector((state) => state.staff);

  const isDisabled = staff === null && roomState === "vacant";



  let color = "";
  let textColor = "black";
  if (roomState === "vacant") {
    textColor = "text-white";
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
    <>
      <button
        key={id}
        className={`${color} ${textColor} py-8 px-16 text-2xl font-semibold border  flex justify-center  rounded  duration-300  hover:ring-4 hover:ring-green-600   hover:ring-offset-2  cursor-default`}
        disabled={isDisabled}
        onClick={() =>
          dispatch(openRoomModal({ roomNumber: roomNumber, roomId: id }))
        }
      >
        <div className=" w-auto whitespace-nowrap ">
          <div> {roomNumber}</div>
          <div>
            {isConsec && roomState !== "vacant" ? (
              <p className="flex justify-center absolute px-1 bg-yellow-400 rounded-sm text-xl">
                連泊
              </p>
            ) : null}
          </div>
        </div>
      </button>
    </>
  );
};

export default Rooms;
