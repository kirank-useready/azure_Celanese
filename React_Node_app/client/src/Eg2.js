import React,{ useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import { Config } from './Config';

function Eg2(props) {

  const [vaoptions,setvaoptions] = useState({
    chart: {
      toolbar:false,
     // height: 350,
      type: 'area',
      minHeight:50,
	  animations: {
		  enabled:false
	  }
    },
	markers: {
		size:0
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
         format: 'MM/dd/yyyy hh:mm:ss TT',
		 datetimeUTC: false 
      },
    },
    grid: {
      show: false,
    }
  });
  const [vaseries,setvaseries] = useState([ { name: 'EG2', data: [] }])

 const getChartData = () => {

   let datas = props.productionUnitData;
   let seriesdata = [];
   let seriesdate = [];
   for (let i=0; i < datas.length;i++){
	 seriesdata.push(parseFloat(datas[i].EG2).toFixed(1));
     seriesdate.push(datas[i].TIME);  
   }
  
   let updateVaoptions = {...vaoptions, xaxis: {
	tooltip: {
		enabled: false,
		datetimeUTC: false
	},
    labels: {
      show: false,
	  datetimeUTC: false
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
  let updateseries = { name: 'Eg2', data: [...seriesdata] };
  updateseriesArray.push(updateseries)
  setvaoptions(updateVaoptions);
  console.log("updateseriesArray-->",updateseriesArray)
  setvaseries(updateseriesArray);
 }


  useEffect(() => {
    getChartData();
  },[props.productionUnitData])



return (
  <>
<div id="chart" className="haciichart">

 
 {vaoptions.xaxis.categories.length  ?  <Chart options={vaoptions} series={vaseries} type="area" height={75}  /> : '' }

 <div>
  <div className="left-float">EG2<p></p></div>  
 
  <div className="right-float"> <p>EO Feed</p>
       <p> { vaseries[0].data.length ? parseFloat(vaseries[0].data[vaseries[0].data.length - 1]).toFixed() : ''} GPM</p>
  </div>
</div>
</div>

</>
)
  
}

export default Eg2