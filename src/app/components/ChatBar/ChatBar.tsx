"use client";

import React, { useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

interface chatMessage {
  message: string;
}

const ChatBar: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chatList, setChatList] = useState<Array<chatMessage>>([]);

  const submitMessage = () => {
    if(!message) return null
    socket.emit("send_message", { message: message });
    setMessage("");
  };

  socket.on("recieved_message", (data) => {
    console.log(data);
    setChatList([...chatList, data]);
  });

  console.log("再生レンダリング")

  return (
    <div className=" w-96 h-full border-2 border-black ">
      <div className="  py-2 flex justify-center bg-green-500 border-b-2 border-black ">
        連絡チャット
      </div>
      <div>
        チャット欄
        {chatList.map((chat, index) => (
          <div key={index}>
            <p className=" border-b border-black">{chat.message}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 flex size-10">
        <div className=" border-2 border-black ">
          <div>
            <input
              type="text"
              placeholder="チャットを入力"
              className="outline-none pr-10"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>
        <button
          onClick={() => submitMessage()}
          className="px-5 bg-green-500 border-2 border-black "
        >
          送信
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
