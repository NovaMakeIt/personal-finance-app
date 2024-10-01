import data from "./../../assets/datas/data.json"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Enregistrement des éléments nécessaires
ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin personnalisé pour afficher le texte au centre
const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    const totalSum = chart.config.options.plugins.centerText.totalSum; // Récupérer totalSum depuis les options

    ctx.save();
    const fontSize = (height / 114).toFixed(2);
    ctx.font = `${fontSize}em 'PublicSansBold1', sans-serif`;
    ctx.fillStyle = '#201F24';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    const text = `${totalSum}`;
    const textX = width / 2;
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.restore();
  },
};

// Enregistrement du plugin
ChartJS.register(centerTextPlugin);

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
            label: 'Total Amount',
            data: [entertainmentSum, billsSum, diningOutSum, personalCareSum],
            backgroundColor: ['#277C78', '#82C9D7', '#F2CDAC', '#626070'],
            borderWidth: 0,
          },
        ],
    };

    const chartOptions = {
      cutout: '70%',
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
        centerText: {
          totalSum: totalSum, // On passe totalSum ici pour que le plugin puisse y accéder
        },
      },
    };

    return (
      <div>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    );
}
