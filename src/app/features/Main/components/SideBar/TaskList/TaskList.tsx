import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import {
  fetchAsyncCompletedTask,
  fetchAsyncPostTask,
} from "@/app/features/Redux/task/taskSlice";
import { useCallback, useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { TaskDataProps } from "../../../../types";
import { toggleCompletedTask } from "@/app/features/Redux/toggle/toggleSlice";



const TaskList: React.FC<TaskDataProps> = ({ taskData }) => {
  const {staff} = useAppSelector((state)=>state.staff)
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
<div className="bg-white h-full flex flex-col justify-between">
  <div>
    {taskData.map((task) => (
      <div key={task.id}>
        {task.is_completed || (
          <div className="p-1 border-b border-gray-200 flex justify-between items-center">
            <div className="text-black font-semibold ">{task.task}</div> 
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
      </div>
    ))}
  </div>


    <div className="border-t border-black">
      <div className="p-2 bg-slate-300">
        {staff && (
        <div className="flex items-center">
        <textarea
          placeholder="タスクを入力"
          ref={taskRef}
          className="outline-none flex-grow mr-2 rounded-lg border overflow-hidden"
        />
        <CiCirclePlus
          onClick={submitTask}
          className="text-4xl text-black hover:text-green-500 duration-300"
          title="タスクを追加"
        />
      </div>

        )}
        <div
          className="py-1 mt-1 font-semibold  text-center bg-cyan-500 rounded-sm border border-black cursor-pointer hover:text-white duration-300"
          onClick={() => dispatch(toggleCompletedTask())}
        >
          <p>完了タスクを確認する</p>
        </div>
      </div>
    </div>
  
</div>
  );
};

export default TaskList;
