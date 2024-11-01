"use client";

import { useGetTime } from "../features/hooks/useGetTime";
import * as Main from "@/app/features/Main/Index";

export default function Home() {
  const { currentTime } = useGetTime();

  return (
    <main className="overflow-hidden mb-0">
      <div className="mt-5 flex w-full max-w-screen-xl mx-auto ">
        <div className="w-4/12 ">
          <div className="pb-2 text-start mb-10">
            <Main.AuthBtn />
          </div>
          <div>
            <Main.SideBar />
          </div>
        </div>
        <div className=" mt-12  w-8/12 ">
          <div className="text-white text-2xl">現在の日時 : {currentTime}</div>
          <div>
            <div>
              <Main.StateSign />
            </div>
            <div className="py-5">
              <Main.FloorTable />
            </div>
            <div>
              <Main.FloorLink />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
