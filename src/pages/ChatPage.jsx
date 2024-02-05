import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import chatStore from "@/store/chatStore";
import userStore from "@/store/userStore";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function ChatPage() {
  const { messages, addMessage } = chatStore();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if(input.trim() === "") return;
    addMessage("user", input);
    setInput("");
    setLoading(false);
  }
  return (
    <main className="mx-6">
      <h1 className="text-3.5xl font-ibmflexserif border-b border-lightsilver pb-4">
        BloomAI
      </h1>
      <div className="space-y-4 pt-4">
        {messages.map((message, i) => (
          <Message key={i} from={message.from} message={message.message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
        disabled={loading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-lightsilver border  px-6 py-3 absolute w-[87%] md:w-[90%] bottom-[6rem] rounded-sm"
          type="text"
          placeholder="Enter text..."
        />
        <button disabled={loading} className="absolute bottom-[6rem] right-[10%] -translate-y-3 bg-[#1A4CD3] text-white p-2 rounded-sm">
          <Rocket size={12} />
        </button>
      </form>
    </main>
  );
}

function Message({ from, message }) {
  const { user } = userStore();
  return (
    <div className="flex flex-col gap-1.5 rounded-[0.9375rem] border border-[#8D8D8D] p-5 text-[0.69156rem]">
      <div>
        <Avatar
          className={twMerge(
            "w-8 h-8 rounded-full",
            from === "bot" && "mr-auto",
            from === "user" && "ml-auto"
          )}
        >
          <AvatarImage
            src={from === "bot" ? "/images/ai.svg" : user.photoURL}
          />
          <AvatarFallback className="bg-red-500">
            {user.displayName.toUpperCase()[0]}
          </AvatarFallback>
        </Avatar>
      </div>
      <div
        className={twMerge(
          "rounded-[1.875rem] flex-grow text-[#A8A8A8] text-sm",
          from === "bot" && "text-left",
          from === "user" && "text-right"
        )}
      >
        {message}
      </div>
    </div>
  );
}
export default ChatPage;