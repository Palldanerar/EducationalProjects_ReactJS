"use client";

import { count } from "console";
import { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h1 className="text-2xl">Главная страницы</h1>
      <h2 className="text-3xl mt-4">{count}</h2>
      <div className="w-[300px] flex justify-between">
        <button
          onClick={() => setCount(count + 1)}
          className="w-[100px] h-auto py-2 rounded-lg bg-green-500"
        >
          Увеличить
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="w-[100px] h-auto py-2 rounded-lg bg-red-500"
        >
          Уменьшить
        </button>
      </div>
    </div>
  );
}
