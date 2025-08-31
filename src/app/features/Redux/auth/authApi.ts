import { createAsyncThunk } from "@reduxjs/toolkit";

interface SignupValue {
  staffName: string;
  email: string;
  password: string;
}

interface LoginValue {
  email: string;
  password: string;
}

//サインアップするapi
export const fetchAsyncSingup = createAsyncThunk(
  "register/post",
  async ({ staffName, email, password }: SignupValue) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            staffName: staffName,
            email: email,
            password: password,
          }),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
    } catch (err: any) {
      console.log(err);
      alert(`ログイン失敗${err.message}`);
    }
  }
);

//ログインするapi
export const fetchAsyncLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }: LoginValue,thunkAPI) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return thunkAPI.rejectWithValue(errorData.error);
      }
      const data = await res.json();
      return data;
    } catch (err: any) {
      console.log(err);
      alert(`エラー: ${err.message}`);
    }
  }
);

//ログイン後にトークンを取得するapi
export const fetchAsyncFindToken = createAsyncThunk("staff/get", async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/staff/find`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const data = await res.json();
  return data;
});

//ログアウトするapi
export const fetchAsyncLogout = createAsyncThunk("staff/logout", async () => {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );
});
