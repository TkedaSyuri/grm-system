"use client";

import Link from "next/link";
import StateSign from "../features/Main/components/StateSign/StateSign";
import FloorTable from "../features/Main/components/FloorTable/FloorTable";
import FloorLink from "../features/Main/components/FloorLink/FloorLink";
import { useAppDispatch, useAppSelector } from "../features/Redux/hooks";
import { fetchAsyncLogout } from "../features/Redux/auth/authSlice";
import { LuLogOut } from "react-icons/lu";
import SideBar from "../features/Main/components/SideBar/SideBar";
import { useGetTime } from "../features/hooks/useGetTime";

export default function Home() {
  const dispatch = useAppDispatch();
  const { staff } = useAppSelector((state) => state.staff);

  const logoutStaff = () => {
    const isConfirmed = window.confirm("本当にログアウトしますか？");
    if (isConfirmed) {
      dispatch(fetchAsyncLogout());
    }
  };

  const { currentTime } = useGetTime();

  return (
    <main className="overflow-hidden mb-0">
      <div className="mt-5 flex w-full max-w-screen-xl mx-auto ">
        <div className="w-4/12 ">
          <div className="pb-2 text-start">
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
              <Link
                href="/auth/login"
                className="font-semibold text-white  hover:text-green-400 duration-300 cursor-default "
                prefetch={false}
              >
                <p className="border-b w-fit"> フロントスタッフはこちらへ</p>
              </Link>
            )}
          </div>

          <SideBar />
        </div>
        <div className=" mt-12  w-8/12 ">
          <div className="text-white text-2xl">現在の日時 : {currentTime}</div>
          <div>
            <div>
              <StateSign />
            </div>
            <div className="py-5">
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
