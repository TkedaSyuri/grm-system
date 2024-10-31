import {  useAppSelector } from "@/app/features/Redux/hooks";
import { useGetTasks } from "../../../../../hooks/useGetTasks";
import * as Task from "@/app/features/Main/components/SideBar/Index"



const TaskBar = () => {
  const { taskData } = useAppSelector((state) => state.task);
  const { isCompletedTaskOpen } = useAppSelector((state) => state.toggle);

  const {} = useGetTasks();

  return (
    <>
      {isCompletedTaskOpen ? (
        <Task.CompletedTaskList taskData={taskData} />
      ) : (
        <Task.TaskList taskData={taskData} />
      )}
    </>
  );
};

export default TaskBar;
