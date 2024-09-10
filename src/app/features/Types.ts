/*floorSliceで使用するinterface*/

//roomStateの型エイリアス
export type RoomState  =  "white" | "red" | "blue" | "green" | "gray" 

//roomsで使用
export interface Rooms {
  id: number;
  roomNumber: string ;
  roomState:  RoomState;
  is_ConsecRoom: boolean;
}

//initialStateで使用
export interface FloorData {
  floorData: Rooms[];
  floorNumber: string;
}


/*ModalSliceで使用するinterface*/

//fetchAsyncUpdateで使用
export interface UpdateRoomState {
  state: RoomState;
  roomId: number;
}

//initialStateで使用
export interface ModalState {
  isOpen: boolean;
  roomNumber: string; 
  roomId: number;

}
