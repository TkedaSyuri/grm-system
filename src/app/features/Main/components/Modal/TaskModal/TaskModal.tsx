import { useAppDispatch } from "@/app/features/Redux/hooks";
import { fetchAsyncPostTask } from "@/app/features/Redux/task/taskApi";
import { closeTaskModal } from "@/app/features/Redux/toggle/toggleSlice";
import React, { useCallback, useRef, useState } from "react";

const TaskModal: React.FC = () => {
  const [floor, setFloor] = useState(0);
  const dispatch = useAppDispatch();
  const taskRef = useRef<HTMLTextAreaElement | null>(null);

  const createTask = useCallback(() => {
    if (taskRef.current?.value) {
      const task = taskRef.current?.value.trim();
      const targetFloor = floor;
      console.log(targetFloor)
      dispatch(fetchAsyncPostTask({ task, targetFloor }));
      taskRef.current.value = "";
    }
  }, [floor]);

  const floorOptions = [
    { value: 0, label: "全階" },
    ...Array.from({ length: 13 }, (_, i) => ({
      value: i + 2,
      label: `${i + 2}F`,
    })),
  ];

  return (
<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
  <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl relative">
    <div className="m-2">
      <label className="text-2xl block font mb-4">業務を作成</label>

      {/* 横並び */}
      <div className="flex gap-4">
        {/* テキストエリア */}
        <textarea
          placeholder="業務内容を入力"
          rows={4}
          ref={taskRef}
          className="flex-1 border rounded-lg p-2 focus:ring-1 focus:ring-blue-400 outline-none"
        />

        {/* プルダウン */}
        <div className="flex flex-col w-40">
          <label htmlFor="floorSelect" className="font-semibold mb-2">
            対象の階
          </label>
          <select
            id="floorSelect"
            value={floor}
            onChange={(e) => setFloor(Number(e.target.value))}
            className="border rounded px-3 py-2"
          >
            {floorOptions.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>

          <p className="text-sm text-gray-600 mt-2">
            選択中: {floor === 0 ? "ALL" : `${floor}F`}
          </p>
        </div>
      </div>
    </div>

    {/* ボタン */}
    <div className="mt-6 flex justify-between space-x-3">
      <button
        className="px-4 py-2"
        onClick={() => dispatch(closeTaskModal())}
      >
        キャンセル
      </button>
      <button
        className="px-4 py-2 font-semibold bg-green-500 hover:bg-green-600 duration-300 border border-black rounded-md outline-none"
        onClick={() => createTask()}
      >
        作成
      </button>
    </div>
  </div>
</div>
  );
};

export default TaskModal;
