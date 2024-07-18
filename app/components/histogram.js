"use client";

import { useRef } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import "chart.js/auto";

function Histogram({ letter, setLetter, letterData }) {
  const data = {
    labels: letterData.map((e) => e.letter),
    datasets: [
      {
        label: "Occurences",
        backgroundColor: function (ctx) {
          const idx = ctx.dataIndex;
          if (letterData[idx].letter === letter) {
            return "#ef4444";
          } else {
            return "#fca5a5";
          }
        },
        data: letterData.map((e) => e.count),
      },
    ],
  };

  const chartRef = useRef();

  const onClick = (e) => {
    const idx = getElementAtEvent(chartRef.current, e)[0].index;
    setLetter(letterData[idx].letter);
  };

  return <Bar ref={chartRef} data={data} onClick={(e) => onClick(e)} />;
}

export { Histogram };
