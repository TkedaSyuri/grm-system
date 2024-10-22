import { useEffect, useState } from "react";


export const useGetTime = () => {
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

    return  {
        time
    }
  
}
