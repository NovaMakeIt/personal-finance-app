import { CardBalance } from "./CardBalance"
import { CardComponents } from "./CardComponents"

export function Overview() {
    return (<div className="w-full px-500 py-400 space-y-400 bg-Beige100">
        <h1 className="w-full py-100 text-Grey900 font-TextPreset1 text-TextPreset1">Overview</h1>
        <CardBalance />
        <CardComponents />
    </div>
    )
}