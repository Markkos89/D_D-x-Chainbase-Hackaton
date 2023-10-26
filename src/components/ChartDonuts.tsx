import React, { Component } from 'react'
import Chart from 'react-apexcharts'


interface State {
  options: {};
  series: number[];
  labels: string[];
}

class ChartDonuts extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    };
  }

  render() {
    return (
      <div className='flex   my-4'>
        <div className=" py-3 px-3 rounded-xl border border-gray-200 bg-black">
          <div className="donut">
          <h5 className="text-xl text-white text-center my-4">Volume and Price</h5>
            <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartDonuts;
