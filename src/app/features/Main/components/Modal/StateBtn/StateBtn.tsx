import { RoomState } from "../../../../types";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import {
  closeModal,
  fetchAsyncConsecFalse,
} from "@/app/features/Redux/toggle/toggleSlice";
import { fetchAsyncUpdate } from "@/app/features/Redux/floor/floorSlice";

interface StateBtnProps {
  state: RoomState;
  text: string;
  bg: string;
  bgHover: string;
}

const StateBtn: React.FC<StateBtnProps> = ({ state, text, bgHover, bg }) => {
  const { roomId } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();

  const renewState = async (state: RoomState, roomId: number) => {
    try {
      if (state === "white") {
        await dispatch(fetchAsyncUpdate({ state, roomId }));
        await dispatch(fetchAsyncConsecFalse(roomId));
      } else {
        await dispatch(fetchAsyncUpdate({ state, roomId }));
      }
      dispatch(closeModal());
    } catch (error) {
      console.error("State更新に失敗しました:", error);
    }
  };
  return (
    <div
      className={`border-4 border-black px-6 ${bg} ${bgHover}`}
      onClick={() => renewState(`${state}`, roomId)}
    >
      {text}
    </div>
  );
};

export default StateBtn;
