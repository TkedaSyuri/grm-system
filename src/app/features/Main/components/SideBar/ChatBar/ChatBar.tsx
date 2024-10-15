import { useAppSelector } from "@/app/features/Redux/hooks";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import io from "socket.io-client";

interface ChatMessage {
  message: string;
}

const socket = io(`${process.env.NEXT_PUBLIC_API_BASEURL}`);

const ChatBar = () => {
  const [chatList, setChatList] = useState<Array<ChatMessage>>([]);
  const { staff } = useAppSelector((state) => state.staff);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    socket.on("received_message", (data: ChatMessage) => {
      setChatList((prevChatList) => [...prevChatList, data]);
    });
    return () => {
      socket.off("received_message");
    };
  }, []);

  const submitMessage = useCallback(() => {
    if (messageRef.current?.value) {
      const message = messageRef.current?.value.trim();
      socket.emit("send_message", { message });
      messageRef.current.value = "";
    }
  }, []);

  return (
    <div className="flex flex-col h-full">

      <div className="flex-grow bg-white overflow-auto">
        {chatList.map((chat, index) => (
          <div key={index} className="break-words border-b border-gray-200 p-2">
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      {true && (
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
      )}
    </div>
  );
};

export default ChatBar;
