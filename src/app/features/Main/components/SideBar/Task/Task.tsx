import {  useAppSelector } from "@/app/features/Redux/hooks";
import { useGetTasks } from "../../../../hooks/useGetTasks";
import CompletedBoard from "./CompletedBoard.tsx/CompletedBoard";
import IncompletedBoard from "./IncompletedBoard.tsx/IncompletedBoard";



const Task = () => {
  const { isCompletedTaskOpen } = useAppSelector((state) => state.toggle);

   useGetTasks();

  return (
    <>
      {isCompletedTaskOpen ? (
        <CompletedBoard  />
      ) : (
        <IncompletedBoard  />
      )}
    </>
  );
};

export default Task;
