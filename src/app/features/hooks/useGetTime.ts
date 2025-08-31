import { useEffect, useState } from "react";
import { format } from "date-fns";
import {ja} from "date-fns/locale/ja"

export const useGetTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  const showNowTime = () => {
    const date = new Date();
    setCurrentTime(format(date, "M月dd日 (E) HH時mm分",{
      locale:ja
    }));
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
