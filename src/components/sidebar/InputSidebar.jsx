export function InputSidebar({icon, name}) {
    return (<div>
            <button className="group w-full flex items-center rounded-r-xl focus:bg-Beige100">
                <div className="h-full w-50 group-focus:bg-Green">&nbsp;</div>
                <div className="flex px-400 py-200 space-x-200 items-center">
                    {icon}
                    <h3 className={"text-Grey300 group-focus:text-Grey900 group-hover:text-Grey100 font-TextPreset3 text-TextPreset3"}>{name}</h3>
                </div>
            </button>
        </div>
    )
}