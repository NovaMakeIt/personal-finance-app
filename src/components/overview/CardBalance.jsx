import data from "./../../assets/datas/data.json"

export function CardBalance() {
    return(<div className="flex w-full tablet:space-x-300 max-tablet:flex-col max-tablet:space-y-150">
        <SingleCardBalance name={'Current Balance'} dollarvalue={data.balance.current} color={'bg-Grey900 text-White'} />
        <SingleCardBalance name={'Income'} dollarvalue={data.balance.income} color={'bg-White'} textColor={'text-Grey500'} textColor2={'text-Grey900'} />
        <SingleCardBalance name={'Expenses'} dollarvalue={data.balance.expenses} color={'bg-White'} textColor={'text-Grey500'} textColor2={'text-Grey900'} />
    </div>
    )
}

function SingleCardBalance({name, dollarvalue, color, textColor, textColor2}) {
    return(<div className={`p-300 w-full space-y-150 rounded-xl ${color}`}>
        <h2 className={`${textColor} font-TextPreset4 text-TextPreset4`}>{name}</h2>
        <h3 className={`w-full ${textColor2} font-TextPreset1 text-TextPreset1`}>${dollarvalue}</h3>
    </div>)
}