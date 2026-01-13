"use client";

import * as MainComponents from "@/app/features/Main/Index";
import { useAppSelector } from "../Redux/hooks";
import { useGetTime } from "../hooks/useGetTime";
import { useDispatch } from "react-redux";
import { openSales } from "../Redux/toggle/toggleSlice";

export default function Main() {
  const { currentTime } = useGetTime();
  const { staff } = useAppSelector((state) => state.staff);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full max-w-screen-xl mx-auto ">
      <div className="w-4/12 ">
        <div className="pb-2 text-start mb-10">
          <MainComponents.AuthBtn />
        </div>
        <div>
          <div className="text-white text-2xl flex gap-4">
            <p>オペレーター:</p>
            {staff ? (
              <>
                <p>フロントスタッフ</p>
              </>
            ) : (
              <>
                <p>ハウスキーパー</p>
              </>
            )}
          </div>

          <MainComponents.SideBar />
        </div>
      </div>
      <div className=" mt-10  w-8/12 ">
        <div className="text-white text-2xl flex justify-end">
          <button  onClick={() => dispatch(openSales())} className="rounded-sm border bg-gray-600 p-1 px-2">
            セールスダッシュボード
          </button>
        </div>

        <div className="text-white text-2xl">現在の日時 : {currentTime}</div>
        <div>
          <div>
            <MainComponents.StateSign />
          </div>
          <div className="py-5">
            <MainComponents.FloorTable />
          </div>
          <div>
            <MainComponents.FloorLink />
          </div>
        </div>
      </div>
    </div>
  );
}
