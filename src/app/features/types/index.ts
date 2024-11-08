

export type RoomState  =  "vacant" | "required" | "cleaning" | "completed" | "unnecessary" 

export interface Rooms {
  id: number;
  roomNumber: string ;
  roomState:  RoomState;
  isConsecutiveNight: boolean;
}

export interface Tasks {
  id: number;
  task: string;
  isCompleted: boolean
}

export interface TaskDataProps {
  taskData: Tasks[];
}

export interface Chats {
  id:number;
  message: string;
  createdAt: string
}


