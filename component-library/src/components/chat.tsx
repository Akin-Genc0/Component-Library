"use client";
import Image from "next/image";
import { useState } from "react";

type chatBot = { title: string; img: string; propt: string };
export default function Chat({ title, img, propt }: chatBot) {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState<History[]>([]);
  const [spinner, setSpinner] = useState(false);

  type History = {
    user: string;
    bot: string;
  };

  function getInput(e: any) {
    setInput(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    e.key === "Enter" ? display() : null;
  }

  async function sendMessage(message: string) {
    setSpinner(true);
    const req = await fetch(`/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    });

    const data = await req.json();
    const display = data.message;

    setMsg([...msg, { user: message, bot: display }]);
    console.log(msg);
    setSpinner(false);
  }

  function display() {
    sendMessage(input);
    setInput("");
  }

  function preset() {
    sendMessage(propt);
  }

  return (
    <>
      <div className="w-[37rem] border-1 border-black px-10 py-5 overflow-auto rounded-sm h-full">
        <div className="flex flex-row gap-5 pb-2">
          <Image
            className="p-2 bg-gray-50 rounded-full flex flex-row"
            src={img}
            width={40}
            height={40}
            alt="chat-img"
          />
          <h1 className="text-xl text-gray-800">{title}</h1>
        </div>

        <div className="flex flex-col h-51 ">
          <div className="flex justify-center mb-4">
            <button
              className="p-1 pl-3 pr-3 rounded-full text-sm border border-black"
              onClick={preset}
            >
              {propt}
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {spinner ? <p>Loading...</p> : null}
            {msg.map((display, index) => {
              return (
                <div key={index} className="space-y-3 mb-4">
                  <div className="flex justify-end">
                    <div className="bg-gray-300 p-3 rounded-sm">
                      <p className="text-sm font-medium">{display.user}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-sm ">
                      {display.bot.startsWith("data:image/") ? (
                        <img
                          src={display.bot}
                          alt="Generated image"
                          className="max-w-full h-auto rounded-sm"
                        />
                      ) : (
                        <p className="text-sm">{display.bot}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <input
              className="flex-1 border border-gray-500 rounded-sm px-3 py-2"
              value={input}
              onChange={getInput}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Type your message..."
            />
            <button
              onClick={display}
              className="px-4 py-2 border border-black rounded-sm hover:bg-gray-100"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
