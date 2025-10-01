import { fetchAsyncDeleteMessage } from "@/app/features/Redux/chat/chatApi";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";


interface ChatsListProps{
    id:number;
    message: string;
    created_at: string
} 



const ChatsList:React.FC<ChatsListProps> = ({id,message,created_at}) => {
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();


  const deleteMessage = (id: number) => {
    const isConfirmed = window.confirm("本当にメッセージを削除しますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteMessage(id));
    }
  };

  return (
          <li
            className="p-2 border-b border-gray-200 flex justify-between  break-words "
          >
            <p className="font-semibold">{message}</p>
            <div className="flex items-center">
              <p>
                {new Date(created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              {staff && (
                <button
                  className="p-1 ml-2 font-semibold text-sm bg-red-500 rounded-md border border-black flex-shrink-0"
                  onClick={() => deleteMessage(id)}
                >
                  <FaTrashAlt />
                </button>
              )}
            </div>
          </li>
  );
};

export default ChatsList
