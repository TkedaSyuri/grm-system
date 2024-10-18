"use client";

import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import ChatBar from "./ChatBar/ChatBar";
import TaskBar from "./TaskBar/TaskBar";
import {
  openTaskBar,
  openChatBar,
} from "@/app/features/Redux/toggle/toggleSlice";

const SideBar= () => {
  const { isBarOpen } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();
  return (
    <div className="w-96 h-full border-2 border-black flex flex-col bg-white">
      <div className="flex">
        <div
          className={`flex-1 px-7 py-1 text-white font-semibold cursor-pointer text-center ${
            !isBarOpen ? "bg-green-800" : "  bg-green-600"
          }`}
          onClick={() => dispatch(openChatBar())}
        >
          連絡チャット
        </div>

        <div
          className={`flex-1 px-7 py-1 text-white font-semibold cursor-pointer text-center ${
            isBarOpen ? "bg-green-800" : "   bg-green-600"
          }`}
          onClick={() => dispatch(openTaskBar())}
        >
          タスク一覧
        </div>
      </div>

      <div className="flex-grow bg-white">
        {isBarOpen ? <ChatBar /> : <TaskBar />}
      </div>
    </div>
  );
};

export default SideBar;
