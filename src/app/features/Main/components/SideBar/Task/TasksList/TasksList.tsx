import { useAppDispatch } from "@/app/features/Redux/hooks";
import { fetchAsyncCompletedTask } from "@/app/features/Redux/task/taskSlice";
import React from "react";

interface TasksListProps {
    id: number;
    task: string;
    isCompleted:boolean
}

const TasksList:React.FC<TasksListProps> = ({id,task,isCompleted}) => {
  const dispatch = useAppDispatch();

    const handleCompletedTask = async (id: number, isCompleted: boolean) => {

        await dispatch(fetchAsyncCompletedTask({ id, isCompleted }));
      };
    
  return (
    <li key={id}>
      {isCompleted || (
        <div className="p-2 border-b border-gray-200 flex justify-between items-center">
          <p className="text-black font-semibold ">{task}</p>
          <button
            className="p-1 ml-2 font-semibold text-sm bg-green-600 rounded-md border border-black flex-shrink-0 outline-none"
            onClick={() => handleCompletedTask(id,isCompleted)}
          >
            完了
          </button>
        </div>
      )}
    </li>
  );
};

export default TasksList;
