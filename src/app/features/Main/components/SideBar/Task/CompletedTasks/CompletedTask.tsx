import React from "react";
import { TaskDataProps } from "../../../../../types";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import {
  fetchAsyncDeleteAllTask,
  fetchAsyncDeleteTask,
} from "@/app/features/Redux/task/taskSlice";
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

  const deleteAllTasks = () => {
    const isConfirmed = window.confirm("本当にリセット(全てのタスクを削除)しますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteAllTask());
    }
  };

  return (
    <div className="flex-col">
      <div className="h-96 bg-white overflow-scroll">
        <ul>
          {taskData.map((task) => (
            <li key={task.id}>
              {task.isCompleted && (
                <>
                  <div className="p-2   border-b border-gray-400 flex justify-between items-center ">
                    <li className="font-semibold  ">{task.task}</li>
                    {staff && (
                      <button
                        className="p-1 ml-2 font-semibold text-sm bg-red-600 rounded-md border border-black outline-none flex-shrink-0"
                        onClick={() => deleteTask(task.id)}
                      >
                        削除
                      </button>
                    )}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-black  p-2 bg-slate-300">
        <div
          className="p-2 px-10 font-semibold bg-green-500 rounded-sm border border-black  hover:text-white duration-300 cursor-pointer"
          onClick={() => dispatch(toggleCompletedTask())}
        >
          <p className="text-center">タスク一覧へ戻る</p>
        </div>
        <div className="text-end">
          <button
            className="px-5 py-1 mt-1  font-semibold  text-sm bg-red-600 border border-black flex-shrink-0 outline-none"
            onClick={() => deleteAllTasks()}
            title="全てのメッセージを削除"
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskList;
