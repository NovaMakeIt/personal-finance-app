import { LittleCardInfo } from "../others/LittleCardInfo";
import { TitleCardComponents } from "../overview/TitleCardComponents";
import data from "./../../assets/datas/data.json"
import { DoughnutChart } from "./DoughnutChart";

export function BudgetsOverview() {
    return(<div className="rounded-xl space-y-250 p-400 bg-White">
        <TitleCardComponents name={'Budgets'} buttonName={'See Details'} />
        <div className="flex max-tablet:flex-col max-tablet:space-y-200 items-center justify-between py-100">
            <div className="mx-auto">
                <DoughnutChart />
            </div>
            <div className="tablet:space-y-200 max-tablet:space-x-200 max-tablet:flex">
                <div className="space-y-200">
                    <LittleCardInfo name={data.budgets[0].category} dollarvalue={data.budgets[0].maximum} bgColor={'bg-Green'} />
                    <LittleCardInfo name={data.budgets[1].category} dollarvalue={data.budgets[1].maximum} bgColor={'bg-Cyan'} />
                </div>
                <div className="space-y-200">
                    <LittleCardInfo name={data.budgets[2].category} dollarvalue={data.budgets[2].maximum} bgColor={'bg-Yellow'} />
                    <LittleCardInfo name={data.budgets[3].category} dollarvalue={data.budgets[3].maximum} bgColor={'bg-Navy'} />
                </div>
            </div>
        </div>
    </div>)
}