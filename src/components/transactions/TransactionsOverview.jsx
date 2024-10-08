import { TitleCardComponents } from "../overview/TitleCardComponents";
import data from "./../../assets/datas/data.json"

export function TransactionOverview() {

    const firstFiveTransactions = data.transactions.slice(0, 5);

    return(<div className="rounded-xl space-y-400 p-400 bg-White">
        <TitleCardComponents name={'Transactions'} buttonName={'View All'} />
        <div className="space-y-150">
        {firstFiveTransactions.map((transaction, index) => (
          <div key={index}>
            <div className="w-full flex justify-between">
              <div className="flex space-x-200 items-center">
                  <img src={transaction.avatar}/>
                  <p className="text-TextPreset4Bold font-TextPreset4Bold text-Grey900">{transaction.name}</p>
              </div>
              <div className="space-y-100">
                  <p className={`text-TextPreset4Bold font-TextPreset4Bold ${transaction.amount > 0 ? 'text-Green' : 'text-Grey900'}`}>
                    {transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}
                  </p>
                  <p className="text-TextPreset5 font-TextPreset5 text-Grey500">{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
            </div>
            {index !== firstFiveTransactions.length - 1 && (
              <div className="h-px bg-Grey100 my-200"></div>
            )}
          </div>
        ))}
        </div>
    </div>)
}