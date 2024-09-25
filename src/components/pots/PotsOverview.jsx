import IconPot from "./../../assets/images/icon-pot.svg?react"
import data from "./../../assets/datas/data.json"
import { LittleCardInfo } from "../others/LittleCardInfo";
import { TitleCardComponents } from "../overview/TitleCardComponents";

export function PotsOverview() {

    let totalSaved = data.pots[0].total + data.pots[1].total + data.pots[2].total + data.pots[3].total + data.pots[4].total;

    return(<div className="rounded-xl space-y-250 p-400 bg-White">
        <TitleCardComponents name={'Pots'} buttonName={'See Details'} />
        <div className="flex space-x-250">
            <div className="flex w-full space-x-200 p-200 rounded-xl items-center bg-Beige100">
                <IconPot />
                <div className="flex flex-col justify-between">
                    <p className="text-Grey500 font-TextPreset4 text-TextPreset4">Total Saved</p>
                    <p className="text-Grey900 font-TextPreset1 text-TextPreset1">${totalSaved}</p>
                </div>
            </div>
            <div className="flex flex-col space-y-200 w-full">
                <div className="flex space-x-200">
                    <LittleCardInfo name={data.pots[0].name} dollarvalue={data.pots[0].total} bgColor={'bg-Green'} />
                    <LittleCardInfo name={data.pots[2].name} dollarvalue={data.pots[2].total} bgColor={'bg-Cyan'} />
                </div>
                <div className="flex space-x-200">
                    <LittleCardInfo name={data.pots[1].name} dollarvalue={data.pots[1].total} bgColor={'bg-Navy'} />
                    <LittleCardInfo name={data.pots[3].name} dollarvalue={data.pots[3].total} bgColor={'bg-Yellow'} />
                </div>
            </div>
        </div>
    </div>)
}