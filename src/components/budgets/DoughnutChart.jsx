import data from "./../../assets/datas/data.json"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const getSumByCategory = (category) => {
    return data.transactions
      .filter(transaction => transaction.category === category)
      .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);
  }

export function DoughnutChart() {
    const entertainmentSum = getSumByCategory('Entertainment');
    const billsSum = getSumByCategory('Bills');
    const diningOutSum = getSumByCategory('Dining Out');
    const personalCareSum = getSumByCategory('Personal Care');

    const totalSum = entertainmentSum + billsSum + diningOutSum + personalCareSum;

    const chartData = {
        datasets: [
          {
            label: 'Total Amount ',
            data: [entertainmentSum, billsSum, diningOutSum, personalCareSum],
            backgroundColor: ['#277C78', '#82C9D7', '#F2CDAC', '#626070'],
            borderWidth: 0,
          },
        ],
      };

      const chartOptions = {
        cutout: '70%', // Réduire l'épaisseur de l'anneau (valeur plus élevée = anneau plus fin)
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      };

    return (<div>
        <Doughnut data={chartData} options={chartOptions} />
    </div>)
}