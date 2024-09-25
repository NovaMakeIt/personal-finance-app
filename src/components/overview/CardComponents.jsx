import { BudgetsOverview } from "../budgets/BudgetsOverview";
import { PotsOverview } from "../pots/PotsOverview";

export function CardComponents() {
    return(<div className="w-full flex space-x-300">
        <div className="space-y-300">
            <PotsOverview />
        </div>
        <div className="space-y-300">
            <BudgetsOverview />
        </div>
    </div>
    )
}