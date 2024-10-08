import data from "./../../assets/datas/data.json"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Enregistrement des éléments nécessaires
ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin personnalisé pour afficher les deux textes au centre
const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    const totalSum = chart.config.options.plugins.centerText.totalSum; // Récupérer totalSum depuis les options
    const totalBudget = chart.config.options.plugins.centerText.totalBudget; // Récupérer totalBudget depuis les options

    ctx.save();
    
    // Configuration de la première ligne (totalSum)
    ctx.font = `32px 'PublicSansBold1', sans-serif`; // Définir la police et la taille
    ctx.fillStyle = '#201F24'; // Définir la couleur du texte
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    const textX = width / 2;

    // Première ligne : totalSum
    const textY1 = height / 2 - 10; // Position Y pour la première ligne (légèrement plus haut)
    const totalSumText = `$${totalSum}`;
    ctx.fillText(totalSumText, textX, textY1);

    // Deuxième ligne : totalBudget (juste en dessous de totalSum)
    const textY2 = height / 2 + 20; // Position Y pour la deuxième ligne (un peu plus bas)
    const totalBudgetText = `of $${totalBudget} limit`;
    ctx.font = `12px 'PublicSansRegular5', sans-serif`; // Plus petit pour la deuxième ligne
    ctx.fillStyle = '#696868';
    ctx.fillText(totalBudgetText, textX, textY2);

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
    const totalBudget = data.budgets[0].maximum + data.budgets[1].maximum + data.budgets[2].maximum + data.budgets[3].maximum;

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
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
        centerText: {
          totalSum: totalSum,    // On passe totalSum ici pour que le plugin puisse y accéder
          totalBudget: totalBudget // On passe totalBudget ici pour la deuxième ligne
        },
      },
    };

    return (
      <div className="w-247 h-240">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    );
}
