const WalletAction = (props) => {
    const iconClass = props.iconClass || "fa-solid fa-circle-dollar-to-slot";
    const actionName = props.actionName || "Donate";

    return (
        <button className="flex w-[23%] flex-col items-center justify-center rounded-md bg-white p-3 shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
            <div className="relative h-15 w-15 rounded-xl">
                <div className="h-full w-full -rotate-45 rounded-xl bg-gradient-to-b from-[#4f774d] to-[#7ed957]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl text-white">
                    <i className={iconClass}></i>
                </div>
            </div>
            <p className="mt-3 font-medium text-[#3d3d3d]">
                {actionName}
            </p>
        </button>
    );
};

export default WalletAction;
