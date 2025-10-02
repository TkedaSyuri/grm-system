import { fetchAsyncDeleteMessage } from "@/app/features/Redux/chat/chatApi";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

interface ChatsListProps {
  id: number;
  message: string;
  created_at: string;
  sender: string;
}

const ChatsList: React.FC<ChatsListProps> = ({
  id,
  message,
  created_at,
  sender,
}) => {
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();

  const deleteMessage = (id: number) => {
    const isConfirmed = window.confirm("本当にメッセージを削除しますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncDeleteMessage(id));
    }
  };

  return (
    <li className="p-2 border-b border-gray-200 break-all">
      {/* 送信者 */}
      <div className="bg-blue-700 w-fit px-4 ">
        <p className="text-white">
          {sender === "housekeeper" ? "ハウスキーパー" : "フロントスタッフ"}
        </p>
      </div>
      {/* メッセージ */}
      <div>
        <p className="font-semibold">{message}</p>
        <div className="flex items-center">
          {staff && (
            <button
              className="p-1 ml-2 font-semibold text-sm bg-red-500 rounded-md border border-black flex-shrink-0"
              onClick={() => deleteMessage(id)}
            >
              <FaTrashAlt />
            </button>
          )}
        </div>
        {/* 送信時間 */}
        <div className="text-right">
          <p>
            {new Date(created_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ChatsList;
