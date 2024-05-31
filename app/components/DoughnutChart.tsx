"use client"

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import LoadingComp from './LoadingComp';

ChartJS.register(ArcElement, Tooltip, Legend);



const options={
    plugins: {
    legend: {
      onClick: null,
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true 
     }
    }
  }}


  type Props = {
   data: {LOW: number
    MEDIUM: number
    HIGH: number}
    loading:boolean

  }

export function DoughnutChart({data,loading}: Props) {


   const chartdata = {
    labels: ['High','Medium','Low'],
    datasets: [
      {
        label: '# of Votes',
        data: [data.HIGH,data.LOW,data.MEDIUM],
        backgroundColor: [
          '#EB5757',
          '#2F80ED',
          '#F2C94C'
        ],
        
      },
    ],
  
  }

  return (
  
<div className="flex flex-col flex-wrap mt-2	 items-start py-4 bg-white rounded-lg border border-gray-300 border-solid max-md:max-w-full">
  <div className="ml-4 text-base font-medium leading-6 text-black ">
    Tasks Priorities
  </div>
  <div className="shrink-0 self-stretch mt-4 h-px bg-gray-200 max-md:max-w-full flex flex-column justify-center"></div>
      {loading ? (<LoadingComp/>):(
      <div>
      <Doughnut data={chartdata} options={options} />
      
      </div>
      
      )}
</div>
  
  )
  
//   <Pie data={data} options={options} />;
}
