import useSWR from "swr";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setFloor } from "@/app/features/Redux/floor/floorSlice";
import { io, Socket } from "socket.io-client";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetFloor = (floorNumber: string) => {
  const dispatch = useAppDispatch();
  const socketRef = useRef<Socket | null>(null);
  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/room/get/floor/${floorNumber}`,
    fetcher,
    {revalidateOnFocus: false}
  );


useEffect(() => {
    if (data) {
      dispatch(setFloor(data));  
    }
  }, [data, dispatch]);


  useEffect(() => {
    // Socket.IO接続開始
    socketRef.current = io(process.env.NEXT_PUBLIC_API_BASEURL || "");

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current?.id);
    });

    // サーバーからの更新通知受信
    socketRef.current.on("roomStateUpdated", (msg) => {
      console.log("roomStateUpdated received:", msg);

      // データを再取得してReduxを更新
      mutate();
    });

    socketRef.current.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [mutate]);

  return { data, isLoading };
};
