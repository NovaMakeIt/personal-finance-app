import IconCaretRight from "./../../assets/images/icon-caret-right.svg?react"
import IconPot from "./../../assets/images/icon-pot.svg?react"
import data from "./../../assets/datas/data.json"

export function PotsOverview() {

    let totalSaved;

    return(<div className="rounded-xl space-y-250 p-400 bg-White">
        <div className="w-full flex justify-between">
            <h2 className="text-Grey900 font-TextPreset2 text-TextPreset2">Pots</h2>
            <button className="flex items-center space-x-150">
                <h3 className="text-Grey500 text-TextPreset4 font-TextPreset4">See Details</h3>
                <IconCaretRight />
            </button>
        </div>
        <div className="flex space-y-250">
            <div className="flex w-full space-x-200 p-200 rounded-xl bg-Beige100">
                <IconPot />
                <div>
                    <p className="text-Grey500 font-TextPreset4 text-TextPreset4">Total Saved</p>
                    <p className="text-Grey900 font-TextPreset1 text-TextPreset1">850$</p>
                </div>
            </div>
        </div>
    </div>)
}