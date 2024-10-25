import { format } from "date-fns";
import { useEffect, useState } from "react";

export const useGetTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  const showNowTime = () => {
    const nowTime = new Date();
    setCurrentTime(format(nowTime, "MM月dd日HH時mm分"));
  };

  useEffect(() => {
    showNowTime();
    const timer = setInterval(showNowTime, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return {
    currentTime,
  };
};
