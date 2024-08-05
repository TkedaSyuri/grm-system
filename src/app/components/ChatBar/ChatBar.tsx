"use client";

import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io(`${process.env.NEXT_PUBLIC_API_BASEURL}`);

interface ChatMessage {
  message: string;
}

const ChatBar: React.FC = () => {
  const [chatList, setChatList] = useState<Array<ChatMessage>>([]);
  const messageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // サーバーからデータを受け取る。
    socket.on("received_message", (data: ChatMessage) => {
      setChatList((prevChatList) => [...prevChatList, data]);
    });

    return () => {
      socket.off("received_message");
    };
  }, []);

  // チャットのメッセージを送信
  const submitMessage = () => {
    if (messageRef.current?.value) {
      const message = messageRef.current?.value.trim();
      socket.emit("send_message", { message });
      messageRef.current.value = "";
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitMessage();
    }
  };

  return (
    <div className="w-96 h-full border-2 border-black flex flex-col">
      <div className="py-2 bg-green-500 border-b-2 border-black flex justify-center">
        連絡チャット
      </div>
      <div className="flex-grow bg-white overflow-y-auto">
        {chatList.map((chat, index) => (
          <div key={index} className="break-words border-b border-black">
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      <div className="border-t-2 p-2 flex">
        <input
          type="text"
          placeholder="チャットを入力"
          className="outline-none w-full"
          ref={messageRef}
          onKeyDown={handleEnter}
        />
        <button
          onClick={submitMessage}
          className="px-1 bg-green-500 border-2 border-gray-500"
        >
          📤
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
