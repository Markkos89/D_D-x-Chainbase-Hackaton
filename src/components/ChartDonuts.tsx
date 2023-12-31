import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false }); //importa un componente dinamico

export default function ChartDonuts() {
  const options = {};
  const series = [44, 55, 41, 17, 15];

  return (
    <div className="mx-4   my-4 flex">
      <div className=" rounded-xl border border-gray-200 bg-black px-3 py-3">
        <div className="donut">
          <h5 className="my-4 text-center text-xl text-white">
            Volume and Price
          </h5>
          <Chart options={options} series={series} type="donut" width="380" />
        </div>
      </div>
    </div>
  );
}
