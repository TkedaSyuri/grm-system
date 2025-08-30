import React from "react";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { fetchAsyncLogout } from "@/app/features/Redux/auth/authApi";

const AuthBtn = () => {
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();

  const logoutStaff = () => {
    const isConfirmed = window.confirm("本当にログアウトしますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncLogout());
    }
  };

  return (
    <>
      {staff ? (
        <div className="text-white text-lg flex border-b w-fit items-center hover:text-green-400  ">
          <button
            className=" font-semibold  duration-300 cursor-default"
            onClick={() => logoutStaff()}
          >
            ログアウト
          </button>
          <LuLogOut />
        </div>
      ) : (
        <div className="w-fit  text-white  hover:text-green-400  duration-300 cursor-default ">
          <Link
            href="/auth/login"
            className="font-semibold"
            prefetch={false}
          >
            <p className="border-b w-fit"> フロントスタッフはこちらへ</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthBtn;
