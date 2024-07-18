"use client";

import { Histogram } from "./histogram";
import { Exposition } from "./exposition";

function InfoBox({ letter, setLetter, numStr, letterData }) {
  const data = letterData.find((e) => e.letter === letter);
  const probability = data ? (data.count / numStr.length) * 100 : 0;

  return (
    <div className="border-2 border-stone-900 rounded bg-stone-50 p-4 w-4/5 mb-auto z-10 drop-shadow">
      {letter === "" ? (
        <Exposition />
      ) : (
        <>
          <Histogram
            letter={letter}
            setLetter={setLetter}
            letterData={letterData}
          />
          <p className="text-center">
            {" "}
            The letter &apos;{letter}&apos; occurred {data ? data.count : "0"}{" "}
            times out of {numStr.length} letters.
            <br />
            The probability of randomly selecting it is {probability.toFixed(2)}
            %.
          </p>
        </>
      )}
    </div>
  );
}

export { InfoBox };
