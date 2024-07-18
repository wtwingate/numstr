"use client";

import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Background({ numStr, letter }) {
  const bgText = letter
    ? numStr.replaceAll(letter, `<span style="color: #fca5a5">${letter}</span>`)
    : numStr;

  return (
    <div
      className={`${plexMono.className} text-4xl break-all text-center text-stone-200 absolute max-h-screen overflow-y-hidden top-0 left-0`}
      dangerouslySetInnerHTML={{ __html: bgText }}
    ></div>
  );
}

export { Background };
