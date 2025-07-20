import JuanDerQuestIcon from "../assets/Logo/circle-icon.png";
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
            <div
                id="nav-links"
                className={`fixed inset-0 z-100 flex origin-bottom transition-transform duration-600 ease-in-out ${isClicked ? "scale-100" : "scale-0"}`}
            >
                <div className="w-full self-center">
                    <div className="flex items-center justify-center gap-10">
                        <button
                            className={`h-15 w-15 rounded-full bg-amber-400`}
                        >
                            I
                        </button>
                        <button
                            className={`h-15 w-15 rounded-full bg-amber-400`}
                        >
                            I
                        </button>
                    </div>
                    <br />
                    <div className="flex items-center justify-center gap-10">
                        <button
                            className={`h-15 w-15 rounded-full bg-amber-400`}
                        >
                            I
                        </button>
                    </div>
                    <br />
                    <div className="flex items-center justify-center gap-10">
                        <button
                            className={`h-15 w-15 rounded-full bg-amber-400`}
                        >
                            I
                        </button>
                        <button
                            className={`h-15 w-15 rounded-full bg-amber-400`}
                        >
                            I
                        </button>
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
