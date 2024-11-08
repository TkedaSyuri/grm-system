import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface LoginValue {
  email: string;
  password: string;
}

interface SignupValue {
  staffName: string;
  email: string;
  password: string;
}

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
        throw new Error(errorData.error);
      }
      const data = await res.json();
      const token = data.token;
      if (token) {
        localStorage.setItem("localJWT", token);
      }
    } catch (err: any) {
      console.log(err);
      alert(`エラー: ${err.message}`);
    }
  }
);

export const fetchAsyncStaff = createAsyncThunk("staff/get", async () => {
  const token = localStorage.getItem("localJWT");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/staff/find`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if(!token) return null
  const data = await res.json();
  return data;
});

export const fetchAsyncLogout = createAsyncThunk("staff/logout", async () => {
  const token = localStorage.getItem("localJWT");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/staff/find`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
});

interface InitialStaffState {
  staff:
    | null
    | {}
    | {
        staffId: number;
        staffName: string;
      };
}

const initialState: InitialStaffState = {
  staff: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAsyncStaff.fulfilled,
      (
        state,
        action: PayloadAction<{ staffId: number; staffName: string }>
      ) => {
        state.staff = action.payload;
      }
    );
    builder.addCase(fetchAsyncLogout.fulfilled, (state, action) => {
      localStorage.removeItem("localJWT");
      delete action.payload.token;
      state.staff = null;
    });
  },
});

export default authSlice.reducer;
