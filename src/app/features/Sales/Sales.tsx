"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useGetAllRooms } from "../hooks/useGetAllRooms";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { closeSales } from "../Redux/toggle/toggleSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const Sales = () => {
  const { allRoomsData } = useAppSelector((state) => state.floor);

  const dispatch = useAppDispatch();

  useGetAllRooms();

  const vacantRooms = allRoomsData?.filter(
    (room) => room.roomState === "vacant"
  ).length;

  const occupiedRooms = allRoomsData?.filter(
    (room) => room.roomState === "required" && room.isConsecutiveNight === false
  ).length;

  const isConsecutiveNightsRooms = allRoomsData?.filter(
    (room) => room.roomState === "required" && room.isConsecutiveNight === true
  ).length;

  //売上
  const totalSales = occupiedRooms * 10000 + isConsecutiveNightsRooms * 11000;

  const data = {
    labels: ["空室", "在室", "在室(連泊)"],
    datasets: [
      {
        data: [vacantRooms, occupiedRooms, isConsecutiveNightsRooms],
        backgroundColor: ["white", "blue", "yellow", "green"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#fff" },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
      <button onClick={() => dispatch(closeSales())} className="text-2xl">戻る</button>
      <h1 className="text-4xl font-bold mb-5 text-center">
        セールスダッシュボード
      </h1>

      <div className="flex flex-row justify-center items-center gap-12">
        {/*概要カード */}
        <div className="grid grid-cols-1 gap-4 w-80 sm:w-96">
          {/* 空室 */}
          <div className="h-20 flex justify-center items-center bg-gray-800 rounded-2xl shadow-md text-center">
            <div>
              <h2 className="text-base font-semibold text-gray-300">空室</h2>
              <p className="text-2xl font-bold text-white">{vacantRooms}部屋</p>
            </div>
          </div>

          {/* 在室中 */}
          <div className="h-20 flex justify-center items-center bg-gray-800 rounded-2xl shadow-md text-center">
            <div>
              <h2 className="text-base font-semibold text-gray-300">在室</h2>
              <p className="text-2xl font-bold text-blue-500">
                {occupiedRooms}部屋
              </p>
            </div>
          </div>

          {/* 連泊 */}
          <div className="h-20 flex justify-center items-center bg-gray-800 rounded-2xl shadow-md text-center">
            <div>
              <h2 className="text-base font-semibold text-gray-300">
                在室(連泊)
              </h2>
              <p className="text-2xl font-bold text-yellow-500">
                {isConsecutiveNightsRooms}部屋
              </p>
            </div>
          </div>

          {/* 売上 */}
          <div className="h-20 flex justify-center items-center bg-gray-800 rounded-2xl shadow-md text-center">
            <div>
              <h2 className="text-base font-semibold text-gray-300">売上</h2>
              <p className="text-2xl font-bold text-green-500">
                ¥{totalSales.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/*円グラフ */}
        <div className="bg-gray-800 rounded-2xl p-10 shadow-2xl w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-300">
            客室ステータス
          </h2>
          <div className="flex justify-center items-center">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
