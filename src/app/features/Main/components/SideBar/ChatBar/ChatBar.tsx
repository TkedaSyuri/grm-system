import { useGetChats } from "@/app/features/hooks/useGetChats";
import {
  fetchAsyncDeleteAllMessage,
  fetchAsyncDeleteMessage,
  fetchAsyncPostMessage,
} from "@/app/features/Redux/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import React, { useCallback, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

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
    const isConfirmed = window.confirm("本当にメッセージを削除しますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteMessage(id));
    }
  };

  const deleteAllMessage = () => {
    const isConfirmed = window.confirm(
      "本当に全てのメッセージを削除しますか？"
    );
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteAllMessage());
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow  bg-white overflow-auto">
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
              {staff && (
                <button
                  className="p-1 ml-2 font-semibold text-sm bg-red-500 rounded-md border border-black flex-shrink-0"
                  onClick={() => deleteMessage(chat.id)}
                >
                  <FaTrashAlt/>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 bg-slate-400 ">
        <textarea
          placeholder="チャットを入力"
          ref={messageRef}
          className="w-full outline-none flex-grow mr-2 rounded-lg p-2 border overflow-hidden"
        />
        <div className="flex justify-between">
          <button
            className="px-5 py-1 flex items-center font-semibold bg-green-500   border border-black  hover:bg-green-400 duration-300 rounded-lg"
            onClick={submitMessage}
            title="メッセージを送信"
          >
            送信
            <FiSend/>

          </button>
          {staff && (
            <button
              className="px-5 py-1  font-semibold text-sm bg-red-600 border border-black flex-shrink-0"
              onClick={() => deleteAllMessage()}
              title="全てのメッセージを削除"
            >
              リセット
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
