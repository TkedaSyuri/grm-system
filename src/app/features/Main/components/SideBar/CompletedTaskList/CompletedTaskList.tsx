import React from "react";
import { TaskDataProps} from "../../../../types";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { fetchAsyncDeleteTask } from "@/app/features/Redux/task/taskSlice";
import { RiArrowGoBackFill } from "react-icons/ri";
import { toggleCompletedTask } from "@/app/features/Redux/toggle/toggleSlice";

const CompletedTaskList: React.FC<TaskDataProps> = ({ taskData }) => {
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();

  const deleteTask = (id: number) => {
    const isConfirmed = window.confirm("本当にタスクを削除しますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteTask(id));
    }
  };

  return (
    <div className="bg-white h-full flex flex-col justify-between ">
      <div className="text-2xl font-bold text-center border-y border-black bg-orange-500 ">
        完了したタスク一覧
      </div>
      <div className="mt-2 flex-grow overflow-auto">
        {taskData.map((task) => (
          <div key={task.id}>
            {task.is_completed && (
              <>
                <div className="p-1 flex justify-between items-center border-b border-gray-400">
                  <div className="text-black font-semibold flex-grow ">
                    {task.task}
                  </div>
                  {staff && (
                    <button
                      className="p-1 ml-2 font-semibold text-sm bg-red-600 rounded-md border border-black flex-shrink-0"
                      onClick={() => deleteTask(task.id)}
                    >
                      削除
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="p-2 bg-slate-300 border-y border-black  ">
      <div
          className="py-1 mt-1 font-semibold text-center bg-orange-500 rounded-sm border border-black cursor-pointer"
          onClick={() => dispatch(toggleCompletedTask())}
        >
          <p>タスク一覧へ戻る</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskList;
