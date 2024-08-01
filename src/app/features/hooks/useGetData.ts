
import { useEffect } from "react";
import useSWR from "swr";
import { useAppDispatch } from "../Redux/hooks";
import { setFloor } from "../Redux/floor/floorSlice";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}


export const useGetData = (floorNumber: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useSWR(
    `http://localhost:8080/getFloorData/${floorNumber}`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setFloor(data));
    }
  }, [dispatch, data]);

  

  // if (isLoading) return (
  //   <div className="font-bold">
  //     Loading...
  //    <div className="animate-ping w-8 h-8 bg-blue-600 rounded-full"></div>
  //   </div>
  // )
  //   if (error) return <div>Error: {error.message}</div>;
  
  



  return {
    data,
    isLoading,
    error,
  };
};
