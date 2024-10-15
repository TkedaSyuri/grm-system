"use client";

import Link from "next/link";
import StateSign from "../features/Main/components/StateBar/StateSign";
import FloorTable from "../features/Main/components/FloorTable/FloorTable";
import FloorLink from "../features/Main/components/FloorLink/FloorLink";
import { useAppDispatch, useAppSelector } from "../features/Redux/hooks";
import { fetchAsyncLogout } from "../features/Redux/auth/authSlice";
import { LuLogOut } from "react-icons/lu";
import { useEffect, useState } from "react";
import SideBar from "../features/Main/components/SideBar/SideBar";

export default function Home() {
  const dispatch = useAppDispatch();
  const { staff } = useAppSelector((state) => state.staff);

  const logoutStaff = () => {
    const isConfirmed =
    window.confirm("本当にログアウトしますか？");
  if (isConfirmed) {
    dispatch(fetchAsyncLogout());
  }

  };
  
  const [time, setTime] = useState("");
  const showNowTime = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");

    const nowTime = `${month}月${date}日 ${hour}時${minute}分`;

    setTime(nowTime);
  };

  useEffect(() => {
    showNowTime();
    const timer = setInterval(showNowTime, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="  overflow-hidden">
      <div className="flex w-full max-w-screen-xl mx-auto">
        <div className="w-4/12">
          <SideBar />
        </div>
        <div className="w-8/12">
          <div className="text-white text-2xl">現在の日時 : {time}</div>
          <div>
            {staff ? (
              <div className=" pb-2 text-white font-semibold hover:text-green-400  flex justify-end items-center ">
                <button
                  className="border-b duration-300 cursor-default"
                  onClick={()=>logoutStaff()}
                >
                  ログアウト
                </button>
                <LuLogOut />
              </div>
            ) : (
              <div className="font-semibold text-white flex justify-end pb-2 ">
                <Link
                  href="/auth/login"
                  className="border-b hover:text-green-400 duration-300 cursor-default "
                >
                  フロントスタッフはこちらへ
                </Link>
              </div>
            )}
            <div>
              <StateSign />
            </div>
            <div className="py-14">
              <FloorTable />
            </div>
            <div>
              <FloorLink />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
