import { useAppDispatch } from "@/app/features/Redux/hooks";
import { fetchAsyncCompletedTask } from "@/app/features/Redux/task/taskSlice";
import React from "react";

interface TasksListProps {
    id: number;
    task: string;
    is_completed:boolean
}

const TasksList:React.FC<TasksListProps> = ({id,task,is_completed}) => {

    const handleCompletedTask = async (id: number, isCompleted: boolean) => {
        const dispatch = useAppDispatch();

        await dispatch(fetchAsyncCompletedTask({ id, isCompleted }));
      };
    
  return (
    <li key={id}>
      {is_completed || (
        <div className="p-2 border-b border-gray-200 flex justify-between items-center">
          <p className="text-black font-semibold ">{task}</p>
          <button
            className="p-1 ml-2 font-semibold text-sm bg-green-600 rounded-md border border-black flex-shrink-0 outline-none"
            onClick={() => handleCompletedTask(id,is_completed)}
          >
            完了
          </button>
        </div>
      )}
    </li>
  );
};

export default TasksList;
