import React from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

function Hacii() {
   
       const series = [ {
        name: 'MeOH-O2',
        data: [2236.68115234375, 2235.07348632812, 2236.86669921875, 2235.85522460937, 2235.78979492187, 2235.72412109375, 2236.880859375]
        }];
      const options = {
        chart: {
          toolbar:false,
         // height: 350,
          type: 'area',
          minHeight:50,
        },
        dataLabels: {
          enabled: false
        },
        
        stroke: {
          width: 1,
          curve: "smooth"
        },
        xaxis: {
          labels: {
            show: false,
          }, 
          axisBorder: {
            show: false,
          },  
          axisTicks: {
            show: false
          }, 
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
          labels: {
            show: false,
          }, 
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        grid: {
          show: false,
        }
      };


    return (
      <>
    <div id="chart" className="haciichart">
     <Chart options={options} series={series} type="area" height={75}  />
     <div>
      <div className="left-float">HAcII</div>
      <div className="right-float"> <p>MEoH Feed</p>
           <p>424.3 GPM</p>
      </div>
    </div>
    </div>
   
    </>
    )
}

export default Hacii