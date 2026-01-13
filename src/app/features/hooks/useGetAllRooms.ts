import useSWR from "swr";
import { useEffect} from "react";
import { useAppDispatch} from "../Redux/hooks";
import { setAllRooms} from "@/app/features/Redux/floor/floorSlice";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetAllRooms = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/rooms/sales`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      dispatch(setAllRooms(data));
      console.log(data)
    }
  }, [dispatch, data]);


  return { data, isLoading };
};
