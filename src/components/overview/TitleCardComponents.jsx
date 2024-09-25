import IconCaretRight from "./../../assets/images/icon-caret-right.svg?react"

export function TitleCardComponents({name, buttonName}) {
    return(<div className="w-full flex justify-between">
        <h2 className="text-Grey900 font-TextPreset2 text-TextPreset2">{name}</h2>
        <button className="flex items-center space-x-150">
            <h3 className="text-Grey500 text-TextPreset4 font-TextPreset4">{buttonName}</h3>
            <IconCaretRight />
        </button>
    </div>)
}