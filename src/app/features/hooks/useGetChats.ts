import useSWR from "swr";
import { useEffect, useRef ,} from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setChat } from "../Redux/chat/chatSlice";
import { io, Socket } from "socket.io-client";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetChats = () => {
    const socketRef = useRef<Socket | null>(null);
  
  const dispatch = useAppDispatch();
  const { data,mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/chats/chats`,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setChat(data));
    }
  }, [dispatch, data]);
  // Socket.IO接続開始
  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_API_BASEURL || "");

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current?.id);
    });

    // サーバーからの更新通知受信
    socketRef.current.on("updatedChat", (msg) => {
      console.log("updatedChat received:", msg);

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
