import React from 'react'
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



export default function ChartLineal() {
    const options = {
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    };

    const series = [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
    }];




    return (
        <div className='flex  mx-4 my-4'>
            <div className=" py-6 px-6 rounded-xl border border-gray-200 bg-black">
                <div className="app">
                    <div className="row">
                        <div className="mixed-chart">
                            <h5 className="text-xl text-center text-white">Volume and Price</h5>
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

