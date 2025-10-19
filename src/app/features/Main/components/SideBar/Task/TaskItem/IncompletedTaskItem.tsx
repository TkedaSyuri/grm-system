import { useAppDispatch } from "@/app/features/Redux/hooks";
import { fetchAsyncCompletedTask } from "@/app/features/Redux/task/taskApi";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

interface TasksListProps {
  id: number;
  task: string;
  isCompleted: boolean;
  targetFloor: number;
}

const IncompletedTaskItem: React.FC<TasksListProps> = ({
  id,
  task,
  isCompleted,
  targetFloor,
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleCompletedTask = async (id: number, isCompleted: boolean) => {
    setIsLoading(true);
    try {
      await dispatch(fetchAsyncCompletedTask({ id, isCompleted }));
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (error) {
      console.error("完了処理に失敗", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li key={id} className="px-1">
      {isCompleted || (
        <div className="py-1 border-b border-gray-200 ">
          <div className="text-sm text-white bg-green-600 w-fit p-1 rounded">
            {targetFloor !== 0 ? (
              <p>対象: {targetFloor}階</p>
            ) : (
              <p>対象: 全階</p>
            )}
          </div>

          <div className="p-2  flex justify-between items-center">
            <p className="text-black font-semibold break-words break-all ">
              {task}
            </p>
          </div>
          <div className="text-right">
            {isLoading ? (
              <div className="mr-2 w-4 h-4 border-2 border-y-green-500 rounded-full animate-spin"></div>
            ) : (
              <button
                className="p-1 ml-2 font-semibold  text-sm bg-green-600 rounded-md border border-black flex-shrink-0 outline-none"
                onClick={() => handleCompletedTask(id, isCompleted)}
              >
                <IoMdCheckmark />
              </button>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default IncompletedTaskItem;
