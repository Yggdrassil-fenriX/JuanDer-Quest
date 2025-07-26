import DonateLabel from "../assets/Signs/donate-label.png";
import EarnLabel from "../assets/Signs/earn-label.png"
import Token from "../assets/Icons/Token.png";
import Ads from "../assets/Icons/ads.png";

export function PopUpDonate(props) {
    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-[#00000070]">
            <div className="relative h-120 w-9/12 max-w-md rounded-xl bg-[#db9d5f] p-3 text-center shadow-xl">
                <div className="flex h-full flex-col items-center justify-between rounded-md bg-[#e8c49f] p-2 pb-10">
                    <img
                        src={DonateLabel}
                        alt=""
                        className="-mt-30 mb-5 w-11/12"
                    />
                    <div className="w-11/12 text-sm">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus nulla labore, quae totam, non
                            veritatis quisquam animi cum sit beatae corrupti
                            qui. Aspernatur, laudantium vero? Magni tempora
                            provident accusamus quod!
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="mx-auto mb-3 flex w-10/12 items-center justify-between rounded-xl bg-white py-1.5">
                            <input
                                type="text"
                                className="w-[80%] text-center text-3xl font-bold outline-none placeholder:text-xl"
                                placeholder="Token Amount:"
                            />
                            <img
                                src={Token}
                                alt="JDC Token"
                                className="w-[20%]"
                            />
                        </div>
                        <button className="w-10/12 rounded-xl border border-[#4f774d] bg-[#69cd3e] py-1.5 text-3xl font-extrabold text-white">
                            DONATE
                        </button>
                    </div>
                </div>
                <button
                    className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#e60008] text-white shadow-[0px_2px_0px_rgba(0,0,0)]"
                    onClick={props.onClick}
                >
                    <i className="fas fa-xmark"></i>
                </button>
            </div>
        </div>
    );
}

export function PopUpRedeem(props) {
    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-[#00000070]">
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h2 className="mb-4 text-lg font-bold">Redeem</h2>
                <button
                    onClick={props.onClick}
                    className="absolute top-3 right-3 text-xl text-gray-400 hover:text-gray-600"
                >
                    X
                </button>
            </div>
        </div>
    );
}

export function PopUpTopUp(props) {
    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-[#00000070]">
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h2 className="mb-4 text-lg font-bold">Top Up</h2>
                <button
                    onClick={props.onClick}
                    className="absolute top-3 right-3 text-xl text-gray-400 hover:text-gray-600"
                >
                    X
                </button>
            </div>
        </div>
    );
}

export function PopUpEarn(props) {
    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-[#00000070]">
            <div className="relative h-fit w-9/12 max-w-md rounded-xl bg-[#db9d5f] p-3 text-center shadow-xl">
                <div className="flex h-full flex-col items-center justify-between rounded-md bg-[#e8c49f] p-2 pb-5">
                    <img
                        src={EarnLabel}
                        alt=""
                        className="-mt-30 mb-5 w-11/12"
                    />
                    <div className="mb-5">
                        <img src={Ads} alt="" className="w-full" />
                        <p className="text-sm">1 credit per day</p>
                    </div>
                    <div className="w-full flex items-center flex-col gap-3">
                        <button className="w-10/12 rounded-xl border border-[#4f774d] bg-[#69cd3e] px-1 py-1.5 text-left text-3xl font-extrabold text-white text-shadow-lg">
                            <span className="mr-1">🎬</span>
                            Watch Ad
                        </button>
                        <button className="w-10/12 rounded-xl border border-[#4d6e77] bg-[#5ce1e6] px-1 py-1.5 text-left text-3xl font-extrabold text-white text-shadow-lg" onClick={props.onClick}>
                            <span className="mr-1">🚫</span>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
