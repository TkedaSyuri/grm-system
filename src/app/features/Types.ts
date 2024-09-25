export type RoomState  =  "white" | "red" | "blue" | "green" | "gray" 

export interface Rooms {
  id: number;
  roomNumber: string ;
  roomState:  RoomState;
  is_ConsecRoom: boolean;
}

export interface FloorData {
  floorData: Rooms[];
  floorNumber: string;
}


export interface UpdateRoomState {
  state: RoomState;
  roomId: number;
}

export interface InitialModalState {
  isOpen: boolean;
  roomNumber: string; 
  roomId: number;

}

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

