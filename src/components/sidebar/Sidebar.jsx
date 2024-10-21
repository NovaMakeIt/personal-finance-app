import IconBudgets from "../icons/IconBudgets";
import IconOverview from "../icons/IconOverview";
import IconPots from "../icons/IconPots";
import IconRecurringBills from "../icons/IconRecurringBills";
import IconTransactions from "../icons/IconTransactions";
import LogoLarge from "../logos/LogoLarge";
import LogoSmall from "../../assets/images/logo-small.svg?react"
import IconMinimizeMenu from "../../assets/images/icon-minimize-menu.svg?react"
import { InputSidebar } from "./InputSidebar";
import { useEffect, useState } from "react";

export function Sidebar() {

    // État pour savoir si la sidebar est réduite ou non
    const [isMinimized, setIsMinimized] = useState(false);

    // Fonction pour basculer l'état de la sidebar
    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    // Utilisation d'un hook pour forcer l'état à false sur mobile et tablette
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1440) {
                setIsMinimized(false); // Forcer à false si l'écran est plus petit que 768px
            }
        };

        // Exécuter au montage et à chaque redimensionnement
        handleResize(); // Appel initial pour vérifier la taille dès le chargement
        window.addEventListener("resize", handleResize);

        // Nettoyage de l'écouteur lors du démontage
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (<div className={`desktop:pb-300 desktop:h-screen space-y-300 bg-Grey900 desktop:rounded-r-xl flex flex-col duration-200 ${isMinimized ? 'w-22' : 'w-73'} max-desktop:w-full max-desktop:flex-row max-desktop:rounded-t-xl`}>
        <div className="px-400 py-500 max-desktop:hidden">
            {isMinimized ? <LogoSmall /> : <LogoLarge />}
        </div>
        <div className={`space-y-50 flex flex-col flex-grow ${isMinimized ? 'pr-100' : 'pr-300'} max-desktop:flex-row max-desktop:justify-between`}>
            <InputSidebar icon={<IconOverview />} name={`${isMinimized ? '' : 'Overview'}`} />
            <InputSidebar icon={<IconTransactions />} name={`${isMinimized ? '' : 'Transactions'}`} />
            <InputSidebar icon={<IconBudgets />} name={`${isMinimized ? '' : 'Budgets'}`} />
            <InputSidebar icon={<IconPots />} name={`${isMinimized ? '' : 'Pots'}`} />
            <InputSidebar icon={<IconRecurringBills />} name={`${isMinimized ? '' : 'Recurring Bills'}`} />
        </div>
        <button onClick={toggleSidebar} className="group w-full flex px-400 py-200 space-x-200 items-center max-desktop:hidden">
            <IconMinimizeMenu className={`group-hover:fill-Grey100 duration-100 ${isMinimized ? 'rotate-180' : 'rotate-0'}`} />
            <h3 className={`${isMinimized ? 'hidden' : 'text-Grey300 group-hover:text-Grey100 font-TextPreset3 text-TextPreset3'}`}>Minimize Menu</h3>
        </button>
    </div>
    )
}