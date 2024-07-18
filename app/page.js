"use client";

import { useState } from "react";
import { getLetterData, generateNumStr } from "./numstr";

import { Background } from "./components/background";
import { Hero } from "./components/hero";
import { InfoBox } from "./components/infobox";
import { Input } from "./components/input";

export default function Home() {
  const numStr = generateNumStr(1, 123);
  const letterData = getLetterData(numStr);

  const [letter, setLetter] = useState("");

  return (
    <main className="text-stone-900 bg-stone-50 relative flex min-h-screen max-h-screen max-w-5xl flex-col items-center justify-center gap-16 mx-auto p-24 drop-shadow-xl">
      <Background numStr={numStr} letter={letter} />
      <Hero />
      <Input letter={letter} setLetter={setLetter} />
      <InfoBox
        letter={letter}
        setLetter={setLetter}
        numStr={numStr}
        letterData={letterData}
      />
    </main>
  );
}
