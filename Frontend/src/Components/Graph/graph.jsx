import { Line } from 'react-chartjs-2';
import styles from './graph.module.css'

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Graph = () => {
  const dates = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const actualPrices = [120, 130, 125, 140, 150, 160, 155, 170, 165, 175, 180, 190];
  const predictedPrices = [118, 132, 127, 138, 148, 162, 157, 169, 163, 177, 178, 188];

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Actual Prices',
        data: actualPrices,
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
      {
        label: 'Predicted Prices',
        data: predictedPrices,
        fill: false,
        borderColor: 'red',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Actual vs Predicted Prices Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price (INR per kg)',
        },
      },
    },
  };

  return (
    <div className={styles.graphContainer}>
      <p className={styles.chartTitle}>Actual vs Predicted Prices Over Time</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;