import { useGetChats } from "@/app/features/hooks/useGetChats";
import { fetchAsyncPostMessage } from "@/app/features/Redux/chat/chatSlice";
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

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow bg-white overflow-auto">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="break-words border-b border-gray-200 p-2 flex justify-between"
          >
            <p className="font-semibold">{chat.message}</p>
            <p>
              {new Date(chat.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
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
