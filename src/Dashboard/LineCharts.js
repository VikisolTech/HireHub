import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  const data = {
    'Created': 3,
    'Owned': 7,
    'Added to job': 5,
    'Dropped': 6,
    'Placed': 9
  };

  const categories = Object.keys(data).filter(category => data[category] !== 0);
  const series = [{ data: categories.map(category => data[category]) }];

  // Define an array of custom colors for bars similar to another chart
  const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: categories }]}
      series={series}
      colors={colors}
      width={650}
      height={350}
    />
  );
}
