import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartLineal() {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div className="mx-4  my-4 flex">
      <div className=" rounded-xl border border-gray-200 bg-black px-6 py-6">
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <h5 className="text-center text-xl text-white">
                Volume and Price
              </h5>
              <Chart
                options={options}
                series={series}
                type="line"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
