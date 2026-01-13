"use client";

import Main from "../features/Main/Main";
import { useAppSelector } from "../features/Redux/hooks";
import Sales from "../features/Sales/Sales";

export default function Home() {
    const { isSalesOpen } = useAppSelector((state) => state.toggle);

  return (
    <main className="overflow-hidden p-2">
      {isSalesOpen ?<Sales />  : <Main />}
    </main>
  );
}
