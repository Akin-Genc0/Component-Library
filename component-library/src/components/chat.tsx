"use client";
import Image from "next/image";
import { useState } from "react";

type chatBot = {
  title: string;
  img: string;
  propt: string;
  endpoint?: string;
  embedded?: boolean;
  invertImageInDark?: boolean;
};
export default function Chat({
  title,
  img,
  propt,
  endpoint = "/api/chat",
  embedded = false,
  invertImageInDark = false,
}: chatBot) {
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
    const req = await fetch(endpoint, {
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
      <div
        data-looply
        style={embedded ? undefined : { maxWidth: "37rem" }}
        className={`h-full w-full overflow-auto px-5 py-5 sm:px-10 ${
          embedded ? "" : "neu-inset"
        }`}
      >
        <div className="flex flex-row gap-5 pb-2">
          <Image
            className={`flex flex-row rounded-full bg-gray-50 p-2 dark:bg-gray-900 ${
              invertImageInDark ? "dark:invert" : ""
            }`}
            src={img}
            width={40}
            height={40}
            alt="chat-img"
          />
          <h1 className="text-xl text-gray-800 dark:text-gray-100">{title}</h1>
        </div>

        <div className="flex flex-col h-51 ">
          <div className="flex justify-center mb-4">
            <button
              className="neu-btn p-1 pl-3 pr-3 text-sm dark:text-gray-300"
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
                    <div className="neu-flat p-3">
                      <p className="text-sm font-medium">{display.user}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="neu-inset p-3">
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
              className="flex-1 neu-inset !rounded-lg px-3 py-2 dark:text-gray-100 dark:placeholder-gray-400 outline-none"
              value={input}
              onChange={getInput}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Type your message..."
            />
            <button
              onClick={display}
              className="neu-btn px-4 py-2 dark:text-gray-100"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
