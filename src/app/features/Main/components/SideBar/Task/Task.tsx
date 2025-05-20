import {  useAppSelector } from "@/app/features/Redux/hooks";
import { useGetTasks } from "../../../../hooks/useGetTasks";
import CompletedTaskList from "./CompletedTasks/CompletedTask";
import IncompletedTasks from "./IncompletedTasks/IncompletedTasks";



const Task = () => {
  const { taskData } = useAppSelector((state) => state.task);
  const { isCompletedTaskOpen } = useAppSelector((state) => state.toggle);

   useGetTasks();

  return (
    <>
      {isCompletedTaskOpen ? (
        <CompletedTaskList taskData={taskData} />
      ) : (
        <IncompletedTasks taskData={taskData} />
      )}
    </>
  );
};

export default Task;
