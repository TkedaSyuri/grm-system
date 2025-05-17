"use client";

import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import {
  openTaskBar,
  openChatBar,
} from "@/app/features/Redux/toggle/toggleSlice";
import ChatBar from "./Chat/Chat";
import Task from "./Task/Task";


const SideBar = () => {
  const { isBarOpen, isCompletedTaskOpen } = useAppSelector(
    (state) => state.toggle
  );
  const dispatch = useAppDispatch();
  return (
    <aside className="w-96 border-2 border-black flex flex-col ">
      <div className="flex border-b border-black">
        <div
          className={`flex-1 px-7 py-1 font-semibold cursor-pointer text-center hover:text-white duration-500 ${
            !isBarOpen ? "bg-green-800 text-black" : "bg-green-600 text-white"
          }`}
          onClick={() => dispatch(openChatBar())}
        >
          連絡チャット
        </div>

        {isCompletedTaskOpen ? (
          <div
            className={`flex-1 px-5 py-1 text-center font-semibold hover:text-white duration-500 cursor-pointer ${
              isBarOpen ? "bg-cyan-800 text-black" : "bg-cyan-600 text-white"
            }`}
            onClick={() => dispatch(openTaskBar())}
          >
            完了した業務一覧
          </div>
        ) : (
          <div
            className={`flex-1 px-5 py-1 text-center font-semibold hover:text-white  duration-500 cursor-pointer ${
              isBarOpen ? "bg-green-800 text-black" : "bg-green-600 text-white"
            }`}
            onClick={() => dispatch(openTaskBar())}
          >
            業務一覧
          </div>
        )}
      </div>
      <div>{isBarOpen ? <ChatBar /> : <Task />}</div>
    </aside>
  );
};

export default SideBar;
