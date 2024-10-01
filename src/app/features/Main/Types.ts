

export type RoomState  =  "white" | "red" | "blue" | "green" | "gray" 

export interface Rooms {
  id: number;
  roomNumber: string ;
  roomState:  RoomState;
  is_ConsecRoom: boolean;
}
