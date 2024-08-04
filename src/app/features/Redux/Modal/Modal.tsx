
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeModal, fetchAsyncUpdate } from "./ModalSlice";

const Modal: React.FC = () => {
  const { roomNumber, roomId } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  //roomのroomStateの状態を変更
  const renewState= async(state: string,roomId: number)=>{
    await dispatch(fetchAsyncUpdate({state,roomId}))
    dispatch(closeModal())
  }

  return (
    <div>
      <div className="bg-black text-lg fixed inset-0 bg-opacity-50 flex justify-center items-center cursor-default  ">
        <div className="bg-white p-10 ">
          <div className="text-4xl underline font-semibold">
            部屋番号 {roomNumber}
          </div>
          <div className="text-4xl my-4 flex gap-3  ">
            <div
             className="border-4 border-black px-6 hover:bg-slate-100"
             onClick={()=>renewState("white",roomId)}
             >
              空室
            </div>
            <div
              className="border-4 border-black px-3  bg-red-400  hover:bg-red-600"
              onClick={()=>renewState("red",roomId)}
              >
              在室中
            </div>
            <div
              className="border-4 border-black px-3  bg-blue-400  hover:bg-blue-600 "
              onClick={()=>renewState("blue",roomId)}

            >
              清掃中
            </div>
            <div
              className="border-4 border-black bg-green-400 hover:bg-green-600  "
              onClick={()=>renewState("green",roomId)}

            >
              清掃完了
            </div>
            <div className="border-4 border-black bg-gray-400  hover:bg-gray-600 "
             onClick={()=>renewState("gray",roomId)}

            >
              清掃不要
            </div>
          </div>
          <div
            className="text-2xl flex justify-end"
            onClick={() => dispatch(closeModal())}
          >
            ❌閉じる
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
