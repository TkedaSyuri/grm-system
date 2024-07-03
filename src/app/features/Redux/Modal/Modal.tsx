import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { closeModal} from "./ModalSlice";

const Modal:React.FC = () => {

  const { roomNumber } = useAppSelector((state) => state.ModalReducer);
  const dispatch = useAppDispatch()
  return (
    <div>
      <div className="bg-black text-lg fixed inset-0 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-10 ">
          <div className="text-4xl underline font-semibold">部屋番号 {roomNumber}</div>
          <div className="text-4xl my-4 flex gap-3  ">
            <div className="border-  border-black px-6">空室</div>
            <div className="border-4 border-black px-3  bg-red-400">在室中</div>
            <div className="border-4 border-black px-3  bg-blue-400">清掃中</div>
            <div className="border-4 border-black bg-green-400">清掃完了</div>
            <div className="border-4 border-black bg-gray-400">清掃不要</div>
          </div>
          <div className="text-2xl flex justify-end" onClick={()=>dispatch(closeModal())}>❌閉じる</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
