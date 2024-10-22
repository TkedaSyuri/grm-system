import useSWR from "swr";
import { useEffect } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setChat } from "../Redux/chat/chatSlice";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetChats = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useSWR(
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

  return {
    data,
    isLoading,
  };
};
