import { useGetChats } from "@/app/features/hooks/useGetChats";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import ChatsList from "./ChatsList/ChatsList";
import {
  fetchAsyncDeleteAllMessage,
  fetchAsyncPostMessage,
} from "@/app/features/Redux/chat/chatApi";

const ChatBar = () => {
  const { staff } = useAppSelector((state) => state.staff);
  const { chatData } = useAppSelector((state) => state.chat);
  const { floorNumber } = useAppSelector((state) => state.floor);
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
const hasScrolledRef = useRef(false);

  useGetChats();

  const submitMessage = useCallback(() => {
    if (messageRef.current?.value) {
      const message = messageRef.current.value.trim();
      if (!message) return;
      const sender = staff ? "front" : "housekeeper";
      dispatch(fetchAsyncPostMessage({ message, sender, floorNumber }));
      messageRef.current.value = "";
    }
  }, [staff, floorNumber, dispatch]);

  const deleteAllMessage = () => {
    const isConfirmed = window.confirm(
      "本当に全てのメッセージを削除しますか？"
    );
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteAllMessage());
    }
  };

  //初回データ取得時のみ最下部までスクロール
  useEffect(() => {
    if (chatData.length > 0 && !hasScrolledRef.current) {
      const container = chatContainerRef.current;
      if (container) {
        requestAnimationFrame(() => {
          container.scrollTop = container.scrollHeight;
          hasScrolledRef.current = true; 
        });
      }
    }
  }, [chatData]);


  return (
    <div className="flex flex-col">
      <div
        ref={chatContainerRef}
        className="h-96 bg-white overflow-auto p-2 scroll-smooth border-b border-gray-300"
      >
        <ul>
          {[...chatData]
            .sort(
              (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            )
            .map((chat) => (
              <ChatsList
                key={chat.id}
                id={chat.id}
                message={chat.message}
                created_at={chat.createdAt}
                sender={chat.sender}
                floorNumber={chat.floorNumber}
              />
            ))}
        </ul>
      </div>

      {/* 入力欄（固定しない） */}
      <div className="p-2 bg-slate-300 border-t border-black">
        <textarea
          placeholder="チャットを入力"
          ref={messageRef}
          className="w-full outline-none flex-grow mr-2 rounded-lg p-2 border overflow-hidden"
        />
        <div className="flex justify-between mt-2">
          <button
            className="px-5 py-1 flex items-center font-semibold bg-green-500 border border-black hover:bg-green-400 duration-300 rounded-lg outline-none"
            onClick={submitMessage}
            title="メッセージを送信"
          >
            送信
            <FiSend className="ml-1" />
          </button>
          {staff && (
            <button
              className="px-5 py-1 font-semibold text-sm bg-red-600 hover:bg-red-500 border border-black rounded-lg outline-none"
              onClick={deleteAllMessage}
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
