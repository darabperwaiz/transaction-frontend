import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const PieCharts = ({data}) => {


  return (
    <PieChart
      series={[
        {
          data: data.map((item, index)=> (
            {id:index, value: item.itemCount, label: `${item.category} (${item.itemCount})`}
          )),
        },
      ]}
      width={700}
      height={200}
    />
  )
}

export default PieCharts
