import { useGetChats } from "@/app/features/hooks/useGetChats";
import {
  fetchAsyncDeleteAllMessage,
  fetchAsyncPostMessage,
} from "@/app/features/Redux/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import React, { useCallback, useRef } from "react";
import { FiSend } from "react-icons/fi";
import ChatsList from "./ChatsList/ChatsList";

const ChatBar = () => {
  const { staff } = useAppSelector((state) => state.staff);
  const { chatData } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const {} = useGetChats();

  const submitMessage = useCallback(() => {
    if (messageRef.current?.value) {
      const message = messageRef.current?.value.trim();
      dispatch(fetchAsyncPostMessage(message));
      messageRef.current.value = "";
    }
  }, []);

  const deleteAllMessage = () => {
    const isConfirmed = window.confirm(
      "本当に全てのメッセージを削除しますか？"
    );
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteAllMessage());
    }
  };

  return (
    <div className="flex-col">
      <div className="h-96 bg-white overflow-auto">
        <ul>
          {chatData.map((chat) => (
            <ChatsList
              id={chat.id}
              message={chat.message}
              created_at={chat.created_at}
            />
          ))}
        </ul>
      </div>

      <div className="p-2 bg-slate-300 border-t border-black ">
        <textarea
          placeholder="チャットを入力"
          ref={messageRef}
          className="w-full outline-none flex-grow mr-2 rounded-lg p-2 border overflow-hidden"
        />
        <div className="flex justify-between">
          <button
            className="px-5 py-1 flex items-center font-semibold bg-green-500   border border-black  hover:bg-green-400 duration-300 rounded-lg outline-none"
            onClick={submitMessage}
            title="メッセージを送信"
          >
            送信
            <FiSend />
          </button>
          {staff && (
            <div className="flex justify-end">
              <button
                className="px-5 py-1  font-semibold text-sm bg-red-600 hover:bg-red-500 border border-black flex-shrink-0 outline-none"
                onClick={() => deleteAllMessage()}
                title="全てのメッセージを削除"
              >
                リセット
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
