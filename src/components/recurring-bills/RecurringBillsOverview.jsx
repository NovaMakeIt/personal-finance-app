import { TitleCardComponents } from "../overview/TitleCardComponents";

export function RecurringBillsOverview() {
    return(<div className="rounded-xl space-y-400 p-400 bg-White">
        <TitleCardComponents name={'Recurring Bills'} buttonName={'See Details'} />
    </div>)
}