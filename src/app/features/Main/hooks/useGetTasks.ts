import useSWR from "swr";
import { useEffect } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { setTask } from "../../Redux/task/taskSlice";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetTasks = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/all-tasks`,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setTask(data));
    }
  }, [dispatch, data]);

  return {
    data,
    isLoading,
  };
};
