import IconBudgets from "../icons/IconBudgets";
import IconOverview from "../icons/IconOverview";
import IconPots from "../icons/IconPots";
import IconRecurringBills from "../icons/IconRecurringBills";
import IconTransactions from "../icons/IconTransactions";
import LogoLarge from "../logos/LogoLarge";
import IconMinimizeMenu from "../../assets/images/icon-minimize-menu.svg?react"
import { InputSidebar } from "./InputSidebar";

export function Sidebar() {

    return (<div className="w-73 h-screen bg-Grey900 rounded-r-xl">
        <div className="px-400 py-500">
            <LogoLarge />
        </div>
        <div className="h-3/5 pr-300">
            <InputSidebar icon={<IconOverview />} name={"Overview"} />
            <InputSidebar icon={<IconTransactions />} name={"Transactions"} />
            <InputSidebar icon={<IconBudgets />} name={"Budgets"} />
            <InputSidebar icon={<IconPots />} name={"Pots"} />
            <InputSidebar icon={<IconRecurringBills />} name={"Recurring Bills"} />
        </div>
        <button className="group w-full flex px-400 py-200 space-x-200 items-center">
            <IconMinimizeMenu className="group-hover:fill-Grey100" />
            <h3 className="text-Grey300 group-focus:text-Grey900 group-hover:text-Grey100 font-TextPreset3 text-TextPreset3">Minimize Menu</h3>
        </button>
    </div>
    )
}