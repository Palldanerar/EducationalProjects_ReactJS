"use client";

import { useState } from "react";

export default function Home() {
  let [count, useCount] = useState(0);

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h2 className="text-2xl">{count}</h2>
      <button
        className="mt-4 w-[200px] h-auto py-2 px-[20px] bg-green-400 rounded-lg"
        onClick={() => {
          useCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
