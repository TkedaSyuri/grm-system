import useSWR from "swr";
import { useEffect } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setFloor } from "@/app/features/Redux/floor/floorSlice";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetFloor = (floorNumber: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/room/get/floor/${floorNumber}`,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setFloor(data));
    }
  }, [dispatch, data]);

  return {
    data,
    isLoading,
  };
};
