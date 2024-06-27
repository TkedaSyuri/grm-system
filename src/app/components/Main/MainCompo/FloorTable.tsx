"use client";

import { changeState, setFloor } from "@/app/features/Redux/FloorTable/FloorSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/store";
import { room } from "@/app/features/Types";
import React, { useEffect } from "react";
import useSWR from "swr";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

const FloorTable = () => {
  const floorData = useAppSelector((state) => state.FloorReducer.floorData);
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useSWR(
    "http://localhost:8080/getFloorData",
    fetcher
  );

  useEffect(() => {
    if (data) {
      dispatch(setFloor(data));
    }
  }, [dispatch, data]);

  return (
    <div className=" flex justify-center">
      <div className="grid grid-cols-5 gap-2">
        {floorData.map((roomData: room) => (
          <div
            key={roomData.id}
            className={
              roomData.roomState === "white"
                 ? `flex justify-center border-2 border-black py-6 px-16 bg-${roomData.roomState} `
                 : `flex justify-center  border-2 border-black py-6 px-16 bg-${roomData.roomState}-500`
             }
             onClick={()=>dispatch(changeState({id: roomData.id,ChangRoomState:"white"}))}
          >
            <div>
            {roomData.roomNumber}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorTable;
