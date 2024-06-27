import Main from "./components/Main/Main";
import ChatBar from "./components/ChatBar/ChatBar";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="flex" style={{ width: "1280px" }}>
        <div className="w-2/5">
          <ChatBar />
        </div>
        <div className="w-3/5">
          <Main />
        </div>
      </div>
    </main>
  );
}
