export function LittleCardInfo({name, dollarvalue, bgColor}) {
    return(<div className="flex space-x-200">
        <div className={`w-50 rounded-lg ${bgColor}`}>&nbsp;</div>
        <div>
            <p className="text-Grey500 text-TextPreset5 font-TextPreset5">{name}</p>
            <p className="text-Grey900 text-TextPreset4Bold font-TextPreset4Bold">${dollarvalue}</p>
        </div>
    </div>)
}