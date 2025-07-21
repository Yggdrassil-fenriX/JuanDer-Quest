import JuanDerQuestIcon from "../../assets/Logo/circle-icon.png";
import NavLink from "./NavLink";
import { useState } from "react";

const InteractiveButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleNav = () => {
        const navLinks = document.querySelector("#nav-links");
        if (navLinks) {
            setIsClicked(!isClicked);
        }
    };

    return (
        <>
            <div className={`fixed inset-0 bg-black transition-opacity duration-600 ease-in-out z-100 ${isClicked ? "opacity-50" : "opacity-0 scale-0"}`}></div>
            <div
                id="nav-links"
                className={`fixed inset-0 bottom-22 z-100 flex items-end origin-bottom transition-transform duration-400 ease-in-out pb-10 ${isClicked ? "scale-100" : "scale-0"}`}
                onClick={toggleNav}
            >
                <div className="w-full">
                    <div className="flex items-center justify-center gap-10">
                        <NavLink to="home" iconClass="fa-solid fa-house" label="Home" />
                        <NavLink to="quests" iconClass="fa-solid fa-magnifying-glass-location" label="Quest" />

                    </div>
                    <br />
                    <div className="flex items-center justify-center gap-10">
                        <NavLink to="wallet" iconClass="fa-solid fa-wallet" label="Wallet" />
                    </div>
                    <br />
                    <div className="flex items-center justify-center gap-10">
                        {/* <NavLink to="profile" iconClass="fa-solid fa-user" label="Profile" /> */}
                        {/* <NavLink to="settings" iconClass="fa-solid fa-gear" label="Settings" /> */}
                    </div>
                </div>
            </div>
            <button
                className="fixed right-1/2 bottom-1 left-1/2 z-110 w-15 -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-amber-600 bg-[#e8c49f]"
                onClick={toggleNav}
            >
                <img
                    src={JuanDerQuestIcon}
                    alt="Interactive Button Image (JuanDerQuest Logo)"
                    className="w-full"
                />
            </button>
        </>
    );
};

export default InteractiveButton;
