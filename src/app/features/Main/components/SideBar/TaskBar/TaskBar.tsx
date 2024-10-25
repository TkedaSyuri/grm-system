import {  useAppSelector } from "@/app/features/Redux/hooks";
import { useGetTasks } from "../../../../hooks/useGetTasks";
import CompletedTask from "../CompletedTaskList/CompletedTaskList";
import TaskList from "../TaskList/TaskList";
const TaskBar = () => {
  const { taskData } = useAppSelector((state) => state.task);
  const { isCompletedTaskOpen } = useAppSelector((state) => state.toggle);

  const {} = useGetTasks();

  return (
    <div className="flex flex-col h-full ">
      {isCompletedTaskOpen ? (
        <CompletedTask taskData={taskData} />
      ) : (
        <TaskList taskData={taskData} />
      )}
    </div>
  );
};

export default TaskBar;
