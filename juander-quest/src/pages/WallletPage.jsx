import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import MyWallet from "../assets/Signs/my-wallet.png";
import BalanceBoard from "../assets/Canvas/balance-board.png";

// Components
import WalletAction from "../components/wallet/WalletAction";

// Services / Popups
import {
    PopUpDonate,
    PopUpRedeem, // ✨ Corrected typo: "Redeem" ➜ "Redeem"
    PopUpTopUp,
    PopUpEarn,
} from "../services/wallet-services.jsx";

const WalletPage = () => {
    // bg-[url('./assets/Backgrounds/background-blur.png')]
    const [showRedeem, setShowRedeem] = useState(false);
    const [showDonate, setShowDonate] = useState(false);
    const [showTopUp, setShowTopUp] = useState(false);
    const [showEarn, setShowEarn] = useState(false);

    const toggleWalletAction = (actionName) => {
        switch (actionName) {
            case "Donate":
                setShowDonate((prev) => !prev);
                break;

            case "Redeem":
                setShowRedeem((prev) => !prev);
                break;

            case "TopUp":
                setShowTopUp((prev) => !prev);
                break;

            case "Earn":
                setShowEarn((prev) => !prev);
                break;

            default:
                break;
        }
    };

    return (
        <>
            <main
                className={`relative h-fit bg-[#f8ecd2] px-5 pt-7 pb-30 text-[#712304]`}
            >
                <div className="flex items-center justify-between text-3xl">
                    <Link to="/home">
                        <i className="fa-solid fa-angle-left"></i>
                    </Link>
                    <i className="fa-solid fa-bell text-lg"></i>
                </div>
                <img src={MyWallet} alt="" className="mx-auto my-8 w-10/12" />
                <div className="mb-8 text-center text-2xl">
                    <p>0x12345678912345</p>
                </div>
                <div className="relative mb-8">
                    <img
                        src={BalanceBoard}
                        alt="Balance Board Canvas"
                        className="mx-auto w-1/2"
                    />
                    <div className="absolute inset-0 top-3 right-2 flex items-center justify-center">
                        <h2 className="text-5xl font-semibold text-[#3d3d3d]">
                            100
                        </h2>
                    </div>
                </div>
                <div className="mb-8 flex items-center justify-center gap-2">
                    <WalletAction
                        onClick={() => {
                            toggleWalletAction("Donate");
                        }}
                    />
                    <WalletAction
                        iconClass="fas fa-money-bill-transfer"
                        actionName="Redeem"
                        onClick={() => {
                            toggleWalletAction("Redeem");
                        }}
                    />
                    <WalletAction
                        iconClass="fas fa-coins"
                        actionName="Top Up"
                        onClick={() => {
                            toggleWalletAction("TopUp");
                        }}
                    />
                    <WalletAction
                        iconClass="fas fa-hand-holding-dollar"
                        actionName="Earn"
                        onClick={() => {
                            toggleWalletAction("Earn");
                        }}
                    />
                </div>
                <div className="rounded-xl bg-[#d5965c] p-2 text-white">
                    <h2 className="text-center text-lg font-extrabold">
                        About
                    </h2>
                    <p className="text-justify text-sm">
                        This is placeholder text used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content. It helps designers focus on layout
                        and design rather than the actual words. You can replace
                        this with real content once it's available. Until then,
                        feel free to use this text as a visual stand-in.
                    </p>
                </div>
            </main>

            {/* PopUps */}
            {showRedeem && (
                <PopUpRedeem
                    onClick={() => {
                        toggleWalletAction("Redeem");
                    }}
                />
            )}
            {showTopUp && (
                <PopUpTopUp
                    onClick={() => {
                        toggleWalletAction("TopUp");
                    }}
                />
            )}

            {showDonate && (
                <PopUpDonate
                    onClick={() => {
                        toggleWalletAction("Donate");
                    }}
                />
            )}

            {showEarn && (
                <PopUpEarn
                    onClick={() => {
                        toggleWalletAction("Earn");
                    }}
                />
            )}
        </>
    );
};

export default WalletPage;
