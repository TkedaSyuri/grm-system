import useSWR from "swr";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setTask } from "../Redux/task/taskSlice";
import { io, Socket } from "socket.io-client";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

//タスクを取得
export const useGetTasks = () => {
  const dispatch = useAppDispatch();
  const socketRef = useRef<Socket | null>(null);

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks`,
    fetcher
  );

  useEffect(() => {

    if (data) {
      dispatch(setTask(data));
    }
  }, [dispatch, data]);

  // Socket.IO接続開始
  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_API_BASEURL || "");

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current?.id);
    });

    // サーバーからの更新通知受信
    socketRef.current.on("updatedTask", (msg) => {
      console.log("updatedTask received:", msg);

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

  return {
    data,
    isLoading,
  };
};
