
import useSWR from "swr";
import { useEffect } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setFloor } from "../Redux/Floor/FloorSlice";
async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}





//フロアのデータを取得するカスタムフック
export const useGetData = (floorNumber: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/getFloorData/${floorNumber}` || `http://localhost:10000/getFloorData/${floorNumber}`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  useEffect(() => {
    if (data) {
      //取得したデータでstoreを更新
      dispatch(setFloor(data));
    }
  }, [dispatch, data]);




  return {
    data,
    isLoading,
    error,
  };
};
