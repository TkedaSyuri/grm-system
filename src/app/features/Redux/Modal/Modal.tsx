
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeModal} from "./ModalSlice";
import StateBtn from "./StateBtn";

const Modal: React.FC = () => {
  const { roomNumber} = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();


  return (
    <div>
      <div className="bg-black text-lg fixed inset-0 bg-opacity-50 flex justify-center items-center cursor-default  ">
        <div className="bg-white p-10 ">
          <div className="text-4xl underline font-semibold">
            部屋番号 {roomNumber}
          </div>
          <div className="text-4xl my-4 flex gap-3  ">
            <StateBtn color="white" text="空室" bg="bg-white" bgHover="hover:bg-slate-100"/>
            <StateBtn color="red" text="在室中" bg="bg-red-400" bgHover="hover:bg-red-600"/>
            <StateBtn color="blue" text="清掃中" bg="bg-blue-400"  bgHover="hover:bg-blue-600"/>
            <StateBtn color="green" text="清掃完了" bg="bg-green-400"  bgHover="hover:bg-green-600"/>
            <StateBtn color="gray" text="清掃不要" bg="bg-gray-400"  bgHover="hover:bg-gray-600"/>
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
