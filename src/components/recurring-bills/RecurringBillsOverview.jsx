import { TitleCardComponents } from "../overview/TitleCardComponents";
import { RecurringBillsCard } from "./RecurringBillsCard";
import data from "./../../assets/datas/data.json";

export function RecurringBillsOverview() {
    const currentDate = new Date();

    // Fonction pour obtenir la prochaine occurrence d'une transaction récurrente
    const getNextOccurrence = (transactionDate) => {
        let nextDate = new Date(transactionDate);
        while (nextDate <= currentDate) {
            nextDate.setMonth(nextDate.getMonth() + 1); // On avance d'un mois jusqu'à dépasser la date actuelle
        }
        return nextDate;
    };

    // Fonction pour obtenir la dernière occurrence passée d'une transaction récurrente
    const getLastOccurrence = (transactionDate) => {
        let lastDate = new Date(transactionDate);
        while (lastDate <= currentDate) {
            let potentialNextDate = new Date(lastDate);
            potentialNextDate.setMonth(lastDate.getMonth() + 1);
            if (potentialNextDate > currentDate) break; // Si la prochaine est après la date actuelle, on s'arrête
            lastDate = potentialNextDate; // Sinon, on continue
        }
        return lastDate;
    };

    // Filtrer les transactions avec "recurring": true
    const recurringTransactions = data.transactions.filter(transaction => transaction.recurring === true);

    // Calculer les transactions payées (celles qui sont déjà passées)
    const paidBills = recurringTransactions
        .filter(transaction => {
            const transactionDate = new Date(transaction.date);
            const lastOccurrence = getLastOccurrence(transactionDate);
            return lastOccurrence <= currentDate; // La dernière occurrence est déjà passée
        })
        .reduce((total, transaction) => total + transaction.amount, 0);

    // Calculer les transactions à venir dans le mois
    const upcomingBills = recurringTransactions
        .filter(transaction => {
            const transactionDate = new Date(transaction.date);
            const nextOccurrence = getNextOccurrence(transactionDate);
            return (
                nextOccurrence.getMonth() === currentDate.getMonth() &&
                nextOccurrence.getFullYear() === currentDate.getFullYear()
            );
        })
        .reduce((total, transaction) => total + transaction.amount, 0);

    // Calculer les transactions dues bientôt (dans la semaine)
    const dueSoonBills = recurringTransactions
        .filter(transaction => {
            const transactionDate = new Date(transaction.date);
            const nextOccurrence = getNextOccurrence(transactionDate);
            const oneWeekFromNow = new Date(currentDate);
            oneWeekFromNow.setDate(currentDate.getDate() + 7);
            return nextOccurrence > currentDate && nextOccurrence <= oneWeekFromNow;
        })
        .reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <div className="rounded-xl space-y-400 p-400 bg-White">
            <TitleCardComponents name={'Recurring Bills'} buttonName={'See Details'} />
            <div className="w-full space-y-150">
                <RecurringBillsCard name={'Paid Bills'} dollarvalue={`${Math.abs(paidBills.toFixed(2))}`} bgColor={'bg-Green'} />
                <RecurringBillsCard name={'Total Upcoming'} dollarvalue={`${Math.abs(upcomingBills.toFixed(2))}`} bgColor={'bg-Yellow'} />
                <RecurringBillsCard name={'Due Soon'} dollarvalue={`${Math.abs(dueSoonBills.toFixed(2))}`} bgColor={'bg-Cyan'} />
            </div>
        </div>
    );
}
