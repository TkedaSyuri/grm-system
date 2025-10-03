import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { fetchAsyncDeleteTask } from "@/app/features/Redux/task/taskApi";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface CompleteListProps {
  id: number;
  task: string;
  isCompleted: boolean;
}

const CompletedTaskItem: React.FC<CompleteListProps> = ({
  id,
  task,
  isCompleted,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { staff } = useAppSelector((state) => state.staff);

  const dispatch = useAppDispatch();

  const deleteTask = async (id: number) => {
    try {
      setIsLoading(true);

      const isConfirmed = window.confirm("業務を削除しますか？");
      if (isConfirmed) {
        await dispatch(fetchAsyncDeleteTask(id));
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (err) {
      console.error("削除処理に失敗", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li key={id}>
      {isCompleted && (
        <div className="p-2   border-b border-gray-400 flex justify-between items-center ">
          <p className="font-semibold break-words break-all  ">{task}</p>
          {staff && (
            <div>
              {isLoading ? (
                <div className="mr-2 w-4 h-4 border-2 border-y-red-600 rounded-full animate-spin"></div>
              ) : (
                <button
                  className="p-1 ml-2 font-semibold text-sm bg-red-600 rounded-md border border-black outline-none flex-shrink-0"
                  onClick={() => deleteTask(id)}
                >
                  <FaTrashAlt />
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default CompletedTaskItem;
