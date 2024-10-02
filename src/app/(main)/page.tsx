"use client";

import Link from "next/link";
import StateSign from "../features/Main/components/StateBar/StateSign";
import FloorTable from "../features/Main/components/FloorTable/FloorTable";
import FloorLink from "../features/Main/components/FloorLink/FloorLink";
import ChatBar from "../features/Main/components/ChatBar/ChatBar";
import { useAppDispatch, useAppSelector } from "../features/Redux/hooks";
import { LuLogOut } from "react-icons/lu";
import { fetchAsyncLogout } from "../features/Redux/Auth/AuthSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { staff } = useAppSelector((state) => state.staff);
  const logoutStaff = () => {
    dispatch(fetchAsyncLogout());
  };
  return (
    <main className=" flex min-h-fit overflow-hidden">
      <div className="flex" style={{ width: "1280px" }}>
        <div className="w-2/5 flex justify-center h-full">
          <ChatBar />
        </div>
        <div className="w-3/5">
          <div className="mt-12 ">
            {staff ? (
              <div className=" pb-2 text-white font-semibold hover:text-green-400  flex justify-end items-center ">
                <button
                  className="border-b duration-300 cursor-pointer"
                  onClick={() => {
                    logoutStaff();
                  }}
                >
                  ログアウト
                </button>
                <LuLogOut />
              </div>
            ) : (
              <div className="font-semibold text-white flex justify-end pb-2 ">
                <Link
                  href="/auth/login"
                  className="border-b hover:text-green-400 duration-300 cursor-pointer "
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
