//floorSliceで使用するinterface
export interface Room {
  id: number;
  roomNumber: string ;
  roomState:  "white" | "red" | "blue" | "green" | "gray";
}

export type RoomState  =  "white" | "red" | "blue" | "green" | "gray"

export interface FloorData {
  floorData: Room[];
  floorNumber: string;
}

//ModalSliceで使用するType
export interface ModalState {
  isOpen: boolean;
  roomNumber: string; 
  roomId: number;
}
