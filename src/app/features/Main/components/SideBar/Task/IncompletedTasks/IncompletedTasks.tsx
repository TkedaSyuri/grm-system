import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { TaskDataProps } from "../../../../../types";
import {openTaskModal, toggleCompletedTask } from "@/app/features/Redux/toggle/toggleSlice";
import TasksList from "../TasksList/TasksList";

const IncompletedTasks: React.FC<TaskDataProps> = ({ taskData }) => {
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();



  return (
    <div className="flex-col">
      <div className=" h-96 bg-white overflow-auto  scroll-m-0">
        <ul>
          {taskData.map((task) => (
            <TasksList key={task.id} id={task.id} task={task.task} isCompleted={task.isCompleted} />
          ))}
        </ul>
      </div>
      <div className="border-t border-black  p-2 bg-slate-300">
        {staff && (
        <button
          className=" py-1 mt-2 w-full font-semibold  text-center bg-green-500 rounded-sm border border-black cursor-pointer hover:text-white duration-300 outline-none"
          onClick={() => dispatch(openTaskModal())}
        >
          <p>業務を作成 +</p>
        </button>
        )}
        <button
          className=" py-1 mt-2 w-full font-semibold  text-center bg-cyan-500 rounded-sm border border-black cursor-pointer hover:text-white duration-300 outline-none"
          onClick={() => dispatch(toggleCompletedTask())}
        >
          <p>完了した業務を確認</p>
        </button>
      </div>
    </div>
  );
};

export default IncompletedTasks;
