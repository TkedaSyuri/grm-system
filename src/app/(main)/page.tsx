"use client";

import Link from "next/link";
import StateSign from "../features/Main/components/StateBar/StateSign";
import FloorTable from "../features/Main/components/FloorTable/FloorTable";
import FloorLink from "../features/Main/components/FloorLink/FloorLink";
import ChatBar from "../features/Main/components/ChatBar/ChatBar";
import { useAppSelector } from "../features/Redux/hooks";

export default function Home() {
  const { staff } = useAppSelector((state) => state.staff);
  console.log(staff)
  return (
    <main className=" flex min-h-fit overflow-hidden">
      <div className="flex" style={{ width: "1280px" }}>
        <div className="w-2/5 flex justify-center h-full">
          <ChatBar />
        </div>
        <div className="w-3/5">
          <div className="mt-12 ">
            <div className="font-semibold text-white flex justify-end pb-2 ">
              <Link
                href="/auth/login"
                className="border-b hover:text-green-400 duration-300 "
              >
                スタッフはこちらへ
              </Link>
            </div>
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
