"use client";

import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Input({ letter, setLetter }) {
  const onChange = (e) => {
    setLetter(e.target.value);
  };

  return (
    <input
      value={letter}
      onChange={(e) => onChange(e)}
      required={true}
      maxLength="1"
      autoFocus={true}
      className={`${plexMono.className} focus:border-red-500 focus:outline-none focus:ring-0 border-2 border-stone-900 rounded text-2xl p-2 w-14 z-10 text-center drop-shadow`}
    />
  );
}

export { Input };
