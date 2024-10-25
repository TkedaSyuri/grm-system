import { useGetChats } from "@/app/features/hooks/useGetChats";
import {
  fetchAsyncDeleteMessage,
  fetchAsyncPostMessage,
} from "@/app/features/Redux/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import React, { useCallback, useRef } from "react";
import { FiSend } from "react-icons/fi";

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

  const deleteMessage = (id: number) => {
    const isConfirmed = window.confirm("本当にタスクを削除しますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteMessage(id));
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow bg-white overflow-auto">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="break-words border-b border-gray-200 p-2 flex justify-between"
          >
            <p className="font-semibold">{chat.message}</p>
            <div className="flex items-center">
            <p>
              {new Date(chat.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            {true && (
              <button
                className="p-1 ml-2 font-semibold text-sm bg-red-600 rounded-md border border-black flex-shrink-0"
                onClick={() => deleteMessage(chat.id)}
              >
                削除
              </button>
            )}

            </div>
          </div>
        ))}
      </div>
      <div className="p-2 bg-slate-400 flex items-center">
        <textarea
          placeholder="チャットを入力"
          ref={messageRef}
          className="outline-none flex-grow mr-2 rounded-lg p-2 border overflow-hidden"
        />
        <button
          onClick={submitMessage}
          className="bg-green-500 p-2 border-2 border-gray-500 hover:bg-green-300 rounded-lg"
          title="メッセージを送信"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
