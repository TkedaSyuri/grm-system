import { RoomState } from "../../../Types";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { closeModal, fetchAsyncUpdate } from "../../../../Redux/Modal/ModalSlice";

interface StateBtnProps {
  state: RoomState
  text:string
  bg: string
  bgHover: string
}

const StateBtn:React.FC<StateBtnProps> = (props)=> {
  const { roomId } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
const {state,text,bgHover,bg} = props

  const renewState = async (state: RoomState, roomId: number) => {
    await dispatch(fetchAsyncUpdate({ state, roomId }));
    dispatch(closeModal());
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
