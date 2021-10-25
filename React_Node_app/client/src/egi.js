import React from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

function Egi() {
  const series = [ {
    name: 'MeOH-O2',
    data: [77.9453353881835,77.9590682983398, 77.8692550659179, 78.0018157958984, 78.1513290405273, 77.8414688110351, 78.0176620483398,76.1513290405273, 72.8414688110351, 72.0176620483398,73.1513290405273, 74.8414688110351, 71.0176620483398]
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
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z","2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z","2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z", "2018-09-19T12:30:00.000Z"]
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
  <div className="left-float">EG 1</div>
  <div className="right-float"> <p>EO Feed</p>
       <p>75 GPM</p>
  </div>
</div>
</div>

</>
)
    // function generateDayWiseTimeSeries(baseval, count, yrange) {
    //     var i = 0;
    //     var series = [];
    //     while (i < count) {
    //       var x = baseval;
    //       var y =
    //         Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
    //         yrange.min;
      
    //       series.push([x, y]);
    //       baseval += 86400000;
    //       i++;
    //     }
    //     return series;
    //   };
    //    const series = [
    //     {
    //       name: 'South',
    //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 60
    //       })
    //     },
    //     {
    //       name: 'North',
    //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 20
    //       })
    //     },
    //     {
    //       name: 'Central',
    //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 15
    //       })
    //     }
    //   ];
    //   const options = {
    //     chart: {
    //       toolbar:false,
    //       type: 'area',
    //       height: 350,
    //       stacked: true,
    //       events: {
    //         selection: function (chart, e) {
    //           console.log(new Date(e.xaxis.min))
    //         }
    //       },
    //     },
    //     dataLabels: {
    //         enabled: false,
    //         enabledOnSeries: undefined,
    //         formatter: function (val, opts) {
    //             return val
    //         },
    //       },
    //       legend: {
    //         show: false,
    //         width: undefined,
    //         height: undefined,
    //       },
    //     colors: ['#008FFB', '#00E396', '#CED4DC'],
    //     stroke: {
    //       width: 1,
    //       curve: "smooth"
    //     },
    //     fill: {
    //       type: 'gradient',
    //       gradient: {
    //         opacityFrom: 0.2,
    //         opacityTo: 0.4,
    //       }
    //     },
    //     // legend: {
    //     //   position: 'top',
    //     //   horizontalAlign: 'left'
    //     // },
    //     xaxis: {
    //       type: 'datetime',
    //       visible: false
    //     },
    //     yAxis: {
    //       min: 0,
    //       gridLineWidth: 0,
    //       title: {
    //           text: '',
    //           align: 'high'
    //       },
    //       labels:{
    //           enabled:false//default is true
    //       }
    //   },
    //   grid: {
    //     show: false,
    //   }
       
    //   };


    // return (
    // <div id="chart" className="vachart">
    //  <Chart options={options} series={series} type="area" height={150}  width={246}/>
    //   </div>
    // )
}

export default Egi