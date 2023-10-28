import React  from 'react'
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); //importa un componente dinamico


    export default function ChartDonuts(){
      const options = {}
      const series = [44, 55, 41, 17, 15]

    

    return (
      <div className='flex   mx-4 my-4'>
        <div className=" py-3 px-3 rounded-xl border border-gray-200 bg-black">
          <div className="donut">
          <h5 className="text-xl text-white text-center my-4">Volume and Price</h5>
            <Chart options={options} series={series} type="donut" width="380" />
          </div>
        </div>
        
      </div>
    );
  };

