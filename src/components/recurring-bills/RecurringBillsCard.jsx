export function RecurringBillsCard({ name, dollarvalue, bgColor }) {
    return (
        <div className="relative w-full flex flex-col items-center pl-1">
            <div className={`absolute top-0 left-0 w-200 h-full rounded-lg ${bgColor}`}>&nbsp;</div>
            <div className="relative flex w-full items-center justify-between rounded-lg px-200 py-250 bg-Beige100">
                <p className="text-Grey500 text-TextPreset4 font-TextPreset4">{name}</p>
                <p className="text-Grey900 text-TextPreset4Bold font-TextPreset4Bold">${dollarvalue}</p>
            </div>
        </div>
    );
}
