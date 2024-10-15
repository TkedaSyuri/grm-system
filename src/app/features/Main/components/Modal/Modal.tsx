import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { closeModal } from "@/app/features/Redux/toggle/toggleSlice";
import StateBtn from "./StateBtn/StateBtn";
import { RiArrowGoBackFill } from "react-icons/ri";
import { fetchAsyncToggleConsec } from "@/app/features/Redux/floor/floorSlice";

const Modal: React.FC = () => {
  const { roomNumber, roomId } = useAppSelector((state) => state.toggle);
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();

  const handleIsConsec = async (roomId: number) => {
    try{
      await dispatch(fetchAsyncToggleConsec(roomId));
      dispatch(closeModal());
    }catch(err){
      console.log(err)
    }
  };

  return (
      <div className="bg-black text-lg fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center cursor-default  ">
        <div className="bg-white p-10 ">
          <div className="text-4xl underline font-semibold">
            部屋番号 {roomNumber}
          </div>
          <div className="text-4xl my-4 flex gap-3  ">
            <StateBtn
              state="white"
              text="空室"
              bg="bg-white"
              bgHover="hover:bg-slate-100"
            />
            <StateBtn
              state="red"
              text="在室中"
              bg="bg-red-400"
              bgHover="hover:bg-red-600"
            />
            <StateBtn
              state="blue"
              text="清掃中"
              bg="bg-blue-400"
              bgHover="hover:bg-blue-600"
            />
            <StateBtn
              state="green"
              text="清掃完了"
              bg="bg-green-400"
              bgHover="hover:bg-green-600"
            />
            <StateBtn
              state="gray"
              text="清掃不要"
              bg="bg-gray-400"
              bgHover="hover:bg-gray-600"
            />
            {staff && (
              <button
                className="border-4 border-black px-6 bg-yellow-400 hover:bg-yellow-500"
                onClick={() => handleIsConsec(roomId)}
              >
                連泊
              </button>
            )}
          </div>
          <div
            className="text-4xl font-normal flex justify-end items-center "
            onClick={() => dispatch(closeModal())}
          >
            <RiArrowGoBackFill className="text-red-600" />
            <p>戻る</p>
          </div>
        </div>
      </div>
  );
};

export default Modal;
