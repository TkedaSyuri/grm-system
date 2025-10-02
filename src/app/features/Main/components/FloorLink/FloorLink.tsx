import { changeFloor } from "@/app/features/Redux/floor/floorSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";

const RoomNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

const FloorLink: React.FC = () => {
  const {floorNumber} = useAppSelector((state)=>state.floor)
  const dispatch = useAppDispatch();
  return (
    <div className="text-white grid gap-5">
      <div className="font-bold text-2xl border-b-2 cursor-default">現在のフロア: {floorNumber}F</div>
      <div className="flex justify-between gap-5">
        {RoomNumbers.map((roomNumber, index) => (
          <button
            key={index}
            className="font-bold text-2xl hover:text-green-500 duration-500 cursor-default"
            onClick={() => dispatch(changeFloor(roomNumber))}
          >
            <p>{roomNumber}F</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloorLink;
