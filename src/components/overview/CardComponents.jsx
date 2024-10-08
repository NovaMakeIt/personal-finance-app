import { BudgetsOverview } from "../budgets/BudgetsOverview";
import { PotsOverview } from "../pots/PotsOverview";
import { TransactionOverview } from "../transactions/TransactionsOverview";

export function CardComponents() {
    return(<div className="w-full flex space-x-300">
        <div className="space-y-300 min-w-608">
            <PotsOverview />
            <TransactionOverview />
        </div>
        <div className="space-y-300 w-full">
            <BudgetsOverview />
        </div>
    </div>
    )
}