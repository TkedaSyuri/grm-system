import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import {
  fetchAsyncCompletedTask,
  fetchAsyncPostTask,
} from "@/app/features/Redux/task/taskSlice";
import { useCallback, useRef } from "react";
import { TaskDataProps } from "../../../../types";
import { toggleCompletedTask } from "@/app/features/Redux/toggle/toggleSlice";

const TaskList: React.FC<TaskDataProps> = ({ taskData }) => {
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();
  const taskRef = useRef<HTMLTextAreaElement | null>(null);

  const submitTask = useCallback(() => {
    if (taskRef.current?.value) {
      const task = taskRef.current?.value.trim();
      dispatch(fetchAsyncPostTask(task));
      taskRef.current.value = "";
    }
  }, []);

  const handleCompletedTask = async (id: number, isCompleted: boolean) => {
    await dispatch(fetchAsyncCompletedTask({ id, isCompleted }));
  };

  return (
    <div className="flex-col">
      <div className=" h-96 bg-white overflow-auto  scroll-m-0">
        <ul>
          {taskData.map((task) => (
            <li key={task.id}>
              {task.is_completed || (
                <div className="p-2 border-b border-gray-200 flex justify-between items-center">
                  <p className="text-black font-semibold ">{task.task}</p>
                  <button
                    className="p-1 ml-2 font-semibold text-sm bg-green-600 rounded-md border border-black flex-shrink-0"
                    onClick={() =>
                      handleCompletedTask(task.id, task.is_completed)
                    }
                  >
                    完了
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-black  p-2 bg-slate-300">
        {staff && (
          <div className="flex items-center">
            <textarea
              placeholder="タスクを入力"
              ref={taskRef}
              className="outline-none flex-grow mr-2 rounded-lg border overflow-hidden"
            />
            <button
              className="px-2 py-1 font-semibold text-black border border-black bg-green-500 hover:bg-green-300 duration-300 rounded-md outline-none"
              onClick={submitTask}
              title="タスクを追加"
            >
              追加＋
            </button>
          </div>
        )}
        <div
          className=" py-1 mt-2 font-semibold  text-center bg-cyan-500 rounded-sm border border-black cursor-pointer hover:text-white duration-300"
          onClick={() => dispatch(toggleCompletedTask())}
        >
          <p>完了タスクを確認する</p>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
