
import useSWR from "swr";
import { useEffect } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { setFloor } from "../../Redux/Floor/FloorSlice";
async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}



export const useGetData = (floorNumber: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/getFloorData/${floorNumber}` ,
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
