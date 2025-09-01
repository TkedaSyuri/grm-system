import {  useAppSelector } from "@/app/features/Redux/hooks";
import { useGetTasks } from "../../../../hooks/useGetTasks";
import IncompletedTasks from "./IncompletedTasks/IncompletedTasks";
import CompletedTasks from "./CompletedTasks/CompletedTasks";



const Task = () => {
  const { isCompletedTaskOpen } = useAppSelector((state) => state.toggle);

   useGetTasks();

  return (
    <>
      {isCompletedTaskOpen ? (
        <CompletedTasks  />
      ) : (
        <IncompletedTasks  />
      )}
    </>
  );
};

export default Task;
