/*floorSliceで使用するinterface*/

//roomStateの型エイリアス
export type RoomState  =  "white" | "red" | "blue" | "green" | "gray"

//roomsで使用
export interface Rooms {
  id: number;
  roomNumber: string ;
  roomState:  RoomState;
}

//initialStateで使用
export interface FloorData {
  floorData: Rooms[];
  floorNumber: string;
}


/*ModalSliceで使用するinterface*/

//fetchAsyncUpdateで使用
export interface UpdateRoomStatePayload {
  state: RoomState;
  roomId: number;
}

//initialStateで使用
export interface ModalState {
  isOpen: boolean;
  roomNumber: string; 
  roomId: number;

}
