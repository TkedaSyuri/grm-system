import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { closeModal} from "./ModalSlice";

const Modal = () => {

  const { roomNumber } = useAppSelector((state) => state.ModalReducer);
  const dispatch = useAppDispatch()
  return (
    <div>
      <div className="bg-black font-bold text-lg fixed inset-0 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-10 ">
          <div>部屋番号 {roomNumber}</div>
          <div className="text-lg flex  ">
            <div className="border">空室</div>
            <div className="border">在室中</div>
            <div className="border">清掃中</div>
            <div className="border">清掃完了</div>
            <div className="border">清掃不要</div>
          </div>
          <div onClick={()=>dispatch(closeModal())}>閉じる</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
