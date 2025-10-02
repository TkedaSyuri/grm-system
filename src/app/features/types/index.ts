export type RoomState =
  | "vacant"
  | "required"
  | "cleaning"
  | "completed"
  | "unnecessary";

export interface Rooms {
  id: number;
  roomNumber: string;
  roomState: RoomState;
  isConsecutiveNight: boolean;
}

export interface Tasks {
  id: number;
  task: string;
  isCompleted: boolean;
}

export interface TaskDataProps {
  taskData: Tasks[];
}

export type floorNumber =

  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14";

export interface Chats {
  id: number;
  message: string;
  createdAt: string;
  sender: "housekeeper" | "front";
  floorNumber: floorNumber;
}
