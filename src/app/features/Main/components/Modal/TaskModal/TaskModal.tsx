import { useAppDispatch } from "@/app/features/Redux/hooks";
import { fetchAsyncPostTask } from "@/app/features/Redux/task/taskSlice";
import { closeTaskModal } from "@/app/features/Redux/toggle/toggleSlice";
import React, { useCallback, useRef } from "react";

const TaskModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const taskRef = useRef<HTMLTextAreaElement | null>(null);

  const submitTask = useCallback(() => {
    if (taskRef.current?.value) {
      const task = taskRef.current?.value.trim();
      dispatch(fetchAsyncPostTask(task));
      taskRef.current.value = "";
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg relative">
        <div className="space-y-4 m-2">
          <div>
            <label className="text-2xl block font mb-1">業務を作成</label>
            <textarea
              placeholder="業務内容を入力"
              rows={4}
              ref={taskRef}
              className="w-full border rounded-lg p-2 focus:ring-1 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between space-x-3 ">
          <button
            className="px-4 py-2 "
            onClick={() => dispatch(closeTaskModal())}
          >
            キャンセル
          </button>
          <button className="px-4 my-1 font-semibold bg-green-500 hover:bg-green-600 duration-300  border border-black rounded-md outline-none " onClick={()=>submitTask()}>
            作成
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
