import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { toggleCompletedTask } from "@/app/features/Redux/toggle/toggleSlice";
import { fetchAsyncDeleteAllTask } from "@/app/features/Redux/task/taskApi";
import CompletedTaskItem from "../TaskItems/CompletedTaskItem";

const CompletedBoard= () => {
  const { taskData } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const deleteAllTasks = () => {
    const isConfirmed = window.confirm(
      "本当にリセット(全ての業務を削除)しますか？"
    );
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteAllTask());
    }
  };

  return (
    <div className="flex-col">
      <div className="h-96 bg-white overflow-scroll">
        <ul>
          {taskData.map((tasks) => (
            <CompletedTaskItem
              id={tasks.id}
              task={tasks.task}
              isCompleted={tasks.isCompleted}
            />
          ))}
        </ul>
      </div>
      <div className="border-t border-black  p-2 bg-slate-300">
        <div
          className="p-2 px-10 font-semibold bg-green-500 rounded-sm border border-black  hover:text-white duration-300 cursor-pointer"
          onClick={() => dispatch(toggleCompletedTask())}
        >
          <p className="text-center">業務一覧へ戻る</p>
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

export default CompletedBoard;
