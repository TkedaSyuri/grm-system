import { createAsyncThunk } from "@reduxjs/toolkit";

interface CompletedTask {
  id: number;
  isCompleted: boolean;
}

interface TaskPayload {
  task: string;
  targetFloor: number;
}

export const fetchAsyncPostTask = createAsyncThunk(
  "task/create",
  async ({task,targetFloor}:TaskPayload) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ task: task,targetFloor:targetFloor }),
        }
      );
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncCompletedTask = createAsyncThunk(
  "task/completedTask",
  async ({ id, isCompleted }: CompletedTask) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isCompleted: !isCompleted }),
        }
      );
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncDeleteTask = createAsyncThunk(
  "task/delete",
  async (id: number) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchAsyncDeleteAllTask = createAsyncThunk(
  "task/all-delete",
  async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  }
);
