//floorSliceで使用するinterface
export type RoomState  =  "white" | "red" | "blue" | "green" | "gray"


export interface Rooms {
  id: number;
  roomNumber: string ;
  roomState:  RoomState;
}


export interface FloorData {
  floorData: Rooms[];
  floorNumber: string;
}

//ModalSliceで使用するType
export interface ModalState {
  isOpen: boolean;
  roomNumber: string; 
  roomId: number;
}
