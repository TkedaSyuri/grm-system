"use client";

import React, { useRef, useState } from "react";
import io from "socket.io-client";

const socket = io(`${process.env.NEXT_PUBLIC_API_BASEURL}`, {
  withCredentials: true,
  extraHeaders: {
    "Content-Type": "application/json",
  }
});

interface chatMessage {
  message: string;
}

const ChatBar: React.FC = () => {
  const [chatList, setChatList] = useState<Array<chatMessage>>([]);
  const messageRef = useRef<HTMLInputElement | null>(null);

  //サーバーからデータを受け取る。
  socket.on("recieved_message", (data) => {
    console.log(data);
    setChatList([...chatList, data]);
  });

  //チャットのメッセージを送信
  const submitMessage = () => {
    if (messageRef.current?.value) {
      const message = messageRef.current?.value.trim();
      socket.emit("send_message", { message });
      messageRef.current.value = "";
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text: string = e.key;
    if (text === "Enter") {
      submitMessage();
    }
  };

  return (
    <div className=" w-96 h-full border-2 border-black flex flex-col ">
      <div className="  py-2 r bg-green-500 border-b-2 border-black flex justify-center">
        連絡チャット
      </div>
      <div className="break-words flex-grow  bg-white">
        {chatList.map((chat, index) => (
          <div key={index}>
            <p className=" border-b border-black">{chat.message}</p>
          </div>
        ))}
      </div>
      <div className="border-t-2">
        <div className="flex justify-start">
          <input
            type="text"
            placeholder="チャットを入力"
            className="outline-none w-full"
            ref={messageRef}
            onKeyDown={handleEnter}
          />
          <button
            onClick={() => submitMessage()}
            className=" px-1 bg-green-500 border-2 border-gray-500"
          >
            📤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
