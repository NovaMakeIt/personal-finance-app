import { BudgetsOverview } from "../budgets/BudgetsOverview";
import { PotsOverview } from "../pots/PotsOverview";
import { RecurringBillsOverview } from "../recurring-bills/RecurringBillsOverview";
import { TransactionOverview } from "../transactions/TransactionsOverview";

export function CardComponents() {
    return(<div className="w-full flex max-desktop:flex-col desktop:space-x-300 max-desktop:space-y-300">
        <div className="space-y-300 desktop:min-w-608">
            <PotsOverview />
            <TransactionOverview />
        </div>
        <div className="space-y-300 w-full">
            <BudgetsOverview />
            <RecurringBillsOverview />
        </div>
    </div>
    )
}