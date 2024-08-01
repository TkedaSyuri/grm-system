
import Main from "./components/Main/Main";
import ChatBar from "./components/ChatBar/ChatBar";
import { Providers } from "./features/Redux/provider";

export default function Home() {
  return (
    <Providers>
    <main className="flex min-h-fit">
      <div className="flex" style={{ width: "1280px" }}>
        <div className="w-2/5">
          <ChatBar />
        </div>
        <div className="w-3/5">
          <Main />
        </div>
      </div>
    </main>
    </Providers>

  );
}
