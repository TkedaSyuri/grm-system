import { createAsyncThunk } from "@reduxjs/toolkit";

interface CompletedTask {
  id: number;
  isCompleted: boolean;
}

export const fetchAsyncPostTask = createAsyncThunk(
  "task/create",
  async (task: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/create-task`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ task: task }),
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
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/edit-completed-task/${id}`,
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
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/delete-task/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchAsyncDeleteAllTask = createAsyncThunk(
  "task/all-delete",
  async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/tasks`,
        {
          method: "DELETE",
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
);
