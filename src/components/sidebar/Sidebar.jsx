import IconBudgets from "../icons/IconBudgets";
import IconOverview from "../icons/IconOverview";
import IconPots from "../icons/IconPots";
import IconRecurringBills from "../icons/IconRecurringBills";
import IconTransactions from "../icons/IconTransactions";
import LogoLarge from "../logos/LogoLarge";
import LogoSmall from "../../assets/images/logo-small.svg?react"
import IconMinimizeMenu from "../../assets/images/icon-minimize-menu.svg?react"
import { InputSidebar } from "./InputSidebar";
import { useState } from "react";

export function Sidebar() {

    // État pour savoir si la sidebar est réduite ou non
    const [isMinimized, setIsMinimized] = useState(false);

    // Fonction pour basculer l'état de la sidebar
    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    return (<div className={`pb-300 h-screen space-y-300 bg-Grey900 rounded-r-xl flex flex-col duration-200 ${isMinimized ? 'w-22' : 'w-73'}`}>
        <div className="px-400 py-500">
            {isMinimized ? <LogoSmall /> : <LogoLarge />}
        </div>
        <div className={`space-y-50 flex-grow ${isMinimized ? 'pr-100' : 'pr-300'}`}>
            <InputSidebar icon={<IconOverview />} name={`${isMinimized ? '' : 'Overview'}`} />
            <InputSidebar icon={<IconTransactions />} name={`${isMinimized ? '' : 'Transactions'}`} />
            <InputSidebar icon={<IconBudgets />} name={`${isMinimized ? '' : 'Budgets'}`} />
            <InputSidebar icon={<IconPots />} name={`${isMinimized ? '' : 'Pots'}`} />
            <InputSidebar icon={<IconRecurringBills />} name={`${isMinimized ? '' : 'Recurring Bills'}`} />
        </div>
        <button onClick={toggleSidebar} className="group w-full flex px-400 py-200 space-x-200 items-center">
            <IconMinimizeMenu className={`group-hover:fill-Grey100 duration-100 ${isMinimized ? 'rotate-180' : 'rotate-0'}`} />
            <h3 className={`${isMinimized ? 'hidden' : 'text-Grey300 group-hover:text-Grey100 font-TextPreset3 text-TextPreset3'}`}>Minimize Menu</h3>
        </button>
    </div>
    )
}