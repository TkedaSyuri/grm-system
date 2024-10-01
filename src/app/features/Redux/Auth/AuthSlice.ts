import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { number } from "zod";

interface LoginValue {
  email: string;
  password: string;
}

interface SignupValue {
  staffName: string;
  email: string;
  password: string;
}


export const fetchAsyncLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }: LoginValue) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      const token = data.token
      localStorage.setItem("localJWT", token);
    } catch (err: any) {
      console.log(err);
      alert(`エラー: ${err.message}`);
    }
  }
);

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

export const fetchAsyncStaff = createAsyncThunk("staff/get", async () => {
const token = localStorage.getItem("localJWT")
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/staff/find`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json()
  console.log(data)
  return data;
});

interface initialStaffState {
  staff: null | {
    staffId: number;
    staffName: string;
    email: string;
  };
}


const initialState: initialStaffState = {
  staff: null 

};

const loginSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.staff = action.payload;
    },
    logOut: (state, action) => {
      state.staff = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncStaff.fulfilled, (state, action) => {
      state.staff = action.payload;
    });
  },
});

export default loginSlice.reducer;
export const { logIn, logOut } = loginSlice.actions;
