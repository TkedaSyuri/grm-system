

export type RoomState  =  "white" | "red" | "blue" | "green" | "gray" 

export interface Rooms {
  id: number;
  roomNumber: string ;
  roomState:  RoomState;
  is_ConsecRoom: boolean;
}

export interface Tasks {
  id: number;
  task: string;
  is_completed: boolean
}

export interface TaskDataProps {
  taskData: Tasks[];
}

export interface Chats {
  id:number;
  message: string;
  created_at: string
}


