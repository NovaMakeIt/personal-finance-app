import IconBudgets from "../icons/IconBudgets";
import IconOverview from "../icons/IconOverview";
import IconPots from "../icons/IconPots";
import IconRecurringBills from "../icons/IconRecurringBills";
import IconTransactions from "../icons/IconTransactions";
import { InputSidebar } from "./InputSidebar";

export function Sidebar() {

    return (<div className="w-73 h-screen bg-Grey900">
        <div className="h-3/5 pr-6">
            <InputSidebar icon={<IconOverview />} name={"Overview"} />
            <InputSidebar icon={<IconTransactions />} name={"Transactions"} />
            <InputSidebar icon={<IconBudgets />} name={"Budgets"} />
            <InputSidebar icon={<IconPots />} name={"Pots"} />
            <InputSidebar icon={<IconRecurringBills />} name={"Recurring Bills"} />
        </div>
    </div>
    )
}