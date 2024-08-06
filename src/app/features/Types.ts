//floorSliceで使用するType
export interface room {
  id: number;
  roomNumber: string ;
  roomState:  "white" | "red" | "blue" | "green" | "gray";
}

export interface FloorData {
  floorData: room[];
  floorNumber: string;
}

//ModalSliceで使用するType
export interface ModalState {
  isOpen: boolean;
  roomNumber: string; 
  roomId: number;
}
