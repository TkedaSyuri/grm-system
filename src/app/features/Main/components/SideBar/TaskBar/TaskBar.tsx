import {  useAppSelector } from "@/app/features/Redux/hooks";
import { useGetTasks } from "../../../../hooks/useGetTasks";
import CompletedTask from "../CompletedTaskList/CompletedTaskList";
import TaskList from "../TaskList/TaskList";
const TaskBar = () => {
  const { taskData } = useAppSelector((state) => state.task);
  const { isCompletedTaskOpen } = useAppSelector((state) => state.toggle);

  const {} = useGetTasks();

  return (
    <>
      {isCompletedTaskOpen ? (
        <CompletedTask taskData={taskData} />
      ) : (
        <TaskList taskData={taskData} />
      )}
    </>
  );
};

export default TaskBar;
