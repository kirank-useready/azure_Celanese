import React,{ useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import axios  from 'axios';

function Vachart() {

  const [data, setData] = useState(null);
  const [vaoptions,setvaoptions] = useState({
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
      categories: []
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
  });
  const [vaseries,setvaseries] = useState([ { name: 'MeOH-O2', data: [] }])


//   useEffect(() => {
//     fetch("/vachart")
//       .then((res) => res.json())
//       .then(
//         (data) => console.log("data",data)
// );
        
//   }, []);

const url = "/vachart";


 const getChartData = () => {
  axios({
    method: 'GET',
    url: url,
  }).then(function(response) {
   console.log("response data-->",response);
   let datas = response.data;
   let seriesdata = [];
   let seriesdate = [];
   for (let i=0; i < datas.length;i++){
     seriesdata.push(datas[i].datavalue);
     seriesdate.push(datas[i].date);  
   }
   console.log("seriesdata-->",seriesdata)
   let updateVaoptions = {...vaoptions, xaxis: {
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
    categories: [...seriesdate]
  }};
  
  let updateseriesArray = [];
  let updateseries = { name: 'MeOH-O2', data: [...seriesdata] };
  updateseriesArray.push(updateseries)
  setvaoptions(updateVaoptions);
  console.log("updateseriesArray-->",updateseriesArray)
  setvaseries(updateseriesArray);
  })
 }


  useEffect(() => {
    getChartData();
  },[])



return (
  <>
<div id="chart" className="haciichart">

 {/* <Chart options={options} series={series} type="area" height={75}  /> */}
 {vaoptions.xaxis.categories.length  ?  <Chart options={vaoptions} series={vaseries} type="area" height={75}  /> : '' }

 <div>
  <div className="left-float">VA<p></p></div>  
 
  <div className="right-float"> <p>O2 Feed</p>
       <p>35,925 LB/HR</p>
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

export default Vachart