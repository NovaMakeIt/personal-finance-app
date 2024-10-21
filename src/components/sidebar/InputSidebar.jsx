export function InputSidebar({icon, name}) {
    return (<div>
            <button className="group w-full flex items-center desktop:rounded-r-xl focus:bg-Beige100 max-desktop:flex-col-reverse max-desktop:rounded-t-xl">
                <div className="h-full w-50 max-desktop:h-50 max-desktop:w-full group-focus:bg-Green">&nbsp;</div>
                <div className="flex px-400 py-200 desktop:space-x-200 items-center max-desktop:flex-col max-desktop:space-y-50">
                    {icon}
                    <h3 className={"text-Grey300 group-focus:text-Grey900 group-hover:text-Grey100 font-TextPreset3 text-TextPreset3"}>{name}</h3>
                </div>
            </button>
        </div>
    )
}