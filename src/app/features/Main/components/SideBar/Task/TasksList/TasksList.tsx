import { useAppDispatch } from "@/app/features/Redux/hooks";
import { fetchAsyncCompletedTask } from "@/app/features/Redux/task/taskSlice";
import React, { useState } from "react";

interface TasksListProps {
  id: number;
  task: string;
  isCompleted: boolean;
}

const TasksList: React.FC<TasksListProps> = ({ id, task, isCompleted }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleCompletedTask = async (id: number, isCompleted: boolean) => {
    setLoading(true);
    try {
      await dispatch(fetchAsyncCompletedTask({ id, isCompleted }));
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error("完了処理に失敗", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li key={id}>
      {isCompleted || (
        <div className="p-2 border-b border-gray-200 flex justify-between items-center">
          <p className="text-black font-semibold ">{task}</p>
          {loading ? (
            <>
              <div className="mr-2 w-4 h-4 border-2 border-y-green-500 rounded-full animate-spin"></div>
            </>
          ) : (
            <>
              <button
                className="p-1 ml-2 font-semibold text-sm bg-green-600 rounded-md border border-black flex-shrink-0 outline-none"
                onClick={() => handleCompletedTask(id, isCompleted)}
              >
                完了
              </button>
            </>
          )}
        </div>
      )}
    </li>
  );
};

export default TasksList;
